// components/Timer.jsx
import { getTime, timerapiUrl } from '@/services/timer';
import { useState, useEffect } from 'react';

export default function Timer() {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    const fetchTimer = async () => {
      setRemaining(data.remaining);
    };
    // Initial fetch
    fetchTimer();
    
    // Poll every second
    const interval = setInterval(fetchTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div>
      {remaining !== null ? formatTime(remaining) : 'Loading...'}
    </div>
  );
}