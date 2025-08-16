"use client";
import useAccountStore from '@/stores/useAccountStore';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function useTimer() {
  const { setVoteMale, setVoteFemale } = useAccountStore();
  const [remaining, setRemaining] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const{TimeValue}=useAccountStore()
  const fetchTimer = useCallback(async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/timer`);
      const data = await res.json();
      setRemaining(data.remaining);
      setIsActive(data.is_active);
    } catch (error) {
      console.error('Error fetching timer:', error);
    } finally {
      setLoading(false);
    }
  }, [TimeValue]);

  const startTimer = useCallback(async (seconds) => {
    setLoading(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/timer/set`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ seconds }),
      });
      await fetchTimer();
    } catch (error) {
      console.error('Error starting timer:', error);
    }
  }, [fetchTimer]);

  const resetTimer = useCallback(async () => {
    setLoading(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/timer/reset`, {
        method: 'POST',
      });
      await fetchTimer();
      setVoteFemale(1);
      setVoteMale(1);
    } catch (error) {
      console.error('Error resetting timer:', error);
    }
  }, [fetchTimer, setVoteFemale, setVoteMale]);

  useEffect(() => {
    fetchTimer();
  }, [fetchTimer]);

  useEffect(() => {
    let interval;
    if (isActive && remaining > 0) {
      interval = setInterval(() => {
        setRemaining(prev => prev - 1);
      }, 1000);
    } else if (remaining <= 0 && isActive) {
      setIsActive(false);
      resetTimer();
    }
    return () => clearInterval(interval);
  }, [isActive, remaining, resetTimer]);

  return {
    remaining,
    isActive,
    loading,
    startTimer,
    resetTimer,
    fetchTimer
  };
}