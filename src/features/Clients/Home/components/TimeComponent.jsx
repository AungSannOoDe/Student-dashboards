"use client";
import useTimer from '@/features/events/hooks/useTimer';
import { formatTime } from '@/lib/Timer';
import React, { useEffect } from 'react'
const TimeComponent = () => {
    const { 
        remaining,
        fetchTimer
      } = useTimer();
  return (
<div className="text-5xl font-mono  text-red-500 p-4 z-10000  fixed bottom-0 right-0 ">
  {formatTime(remaining)}
</div>
  )
}

export default TimeComponent