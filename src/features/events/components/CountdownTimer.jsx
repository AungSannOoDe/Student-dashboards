// components/CountdownTimer.js
import { useState } from 'react';
import useTimer from '../hooks/useTimer';
import useAccountStore from '@/stores/useAccountStore';
export default function CountdownTimer() {
  const{triggerRefresh}=useAccountStore()
  const { 
    remaining, 
    isActive, 
    Loading, 
    startTimer, 
    resetTimer 
  } = useTimer();
  const [customTime, setCustomTime] = useState(300);
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const handleStart = (seconds) => {
    startTimer(seconds);
  };
  const handleCustomStart = () => {
    startTimer(customTime);
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Countdown Timer</h1>
      
      {Loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        <>
          <div className="text-center mb-6">
            <div className="text-5xl font-mono bg-gray-100 p-4 rounded inline-block">
              {formatTime(remaining)}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              {isActive ? 'Timer is running' : 'Timer is stopped'}
            </div>
          </div>
          <div className="flex flex-col space-y-3 mb-6">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleStart(300)}
                disabled={isActive}
                className={`px-4 py-2 rounded transition ${isActive ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'}`}
              >
                5 Minutes
              </button>
              <button
                onClick={() => handleStart(600)}
                disabled={isActive}
                className={`px-4 py-2 rounded transition ${isActive ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
              >
                10 Minutes
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="number"
                min="1"
                value={customTime}
                onChange={(e) => setCustomTime(parseInt(e.target.value) || 0)}
                className="flex-1 px-3 py-2 border rounded"
                placeholder="Seconds"
              />
              <button
                onClick={handleCustomStart}
                disabled={isActive}
                className={`px-4 py-2 rounded transition ${isActive ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}
              >
                Start
              </button>
            </div>
          </div>
          <button
            onClick={resetTimer}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
          >
            Reset Timer
          </button>

          {remaining === 0 && !isActive && (
            <div className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded text-center">
              Timer completed!
            </div>
          )}
        </>
      )}
    </div>
  );
}