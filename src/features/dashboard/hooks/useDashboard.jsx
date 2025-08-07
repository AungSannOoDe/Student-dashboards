"use client"
import { dashboardapiUrl } from "@/services/dashboard";
import   useAccountStore  from "@/stores/useAccountStore";
import { useState,useEffect } from "react";
const useDashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('disconnected'); // 'connecting', 'connected', 'error'
   console.log(useAccountStore.getState().token);
    useEffect(() => {
      let isMounted = true;
      const controller = new AbortController();
  
      const connect = async () => {
        try {
          setStatus('connecting');
          setError(null);
  
          const response = await fetch(`${dashboardapiUrl}`, {
            headers: {
              'Authorization': `Bearer ${useAccountStore.getState().token}`,
              'Accept': 'text/event-stream'
            },
            signal: controller.signal
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          if (!response.body) {
            throw new Error('ReadableStream not supported in this browser');
          }
  
          setStatus('connected');
  
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
  
          while (isMounted) {
            const { done, value } = await reader.read();
            
            if (done) {
              if (isMounted) setStatus('disconnected');
              break;
            }
  
            const chunk = decoder.decode(value);
            const events = chunk.split('\n\n').filter(Boolean);
  
            for (const event of events) {
              if (event.startsWith('data:')) {
                try {
                  const data = JSON.parse(event.replace('data:', '').trim());
                  if (isMounted) setDashboardData(data);
                } catch (parseErr) {
                  console.error('Error parsing SSE data:', parseErr);
                  if (isMounted) setError(parseErr);
                }
              }
            }
          }
        } catch (err) {
          if (isMounted && err.name !== 'AbortError') {
            setError(err);
            setStatus('error');
          }
        }
      };
  
      connect();
  
      return () => {
        isMounted = false;
        controller.abort();
      };
    }, [useAccountStore.getState().token]);
  
    return { dashboardData, error, status };
  };
  export default useDashboard;