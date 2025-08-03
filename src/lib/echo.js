import { useEffect } from 'react'
import Echo from 'laravel-echo'
import useAccountStore from '@/stores/useAccountStore'

let echo = null

export const initializeEcho = (token) => {
  if (!echo && typeof window !== 'undefined') {
    window.Pusher = require('pusher-js')
    
    echo = new Echo({
      broadcaster: 'pusher',
      key: process.env.NEXT_PUBLIC_REVERB_APP_KEY,
      wsHost: process.env.NEXT_PUBLIC_REVERB_HOST,
      wsPort: process.env.NEXT_PUBLIC_REVERB_PORT,
      forceTLS: false,
      encrypted: false,
      disableStats: true,
      enabledTransports: ['ws', 'wss'],
      auth: {
        headers: {
          Authorization: `Bearer ${useAccountStore.getState().token}`,
        },
      },
    })
  }
  return echo
}

export const useEcho = (token) => {
  useEffect(() => {
    const echoInstance = initializeEcho(token)
    
    return () => {
      if (echoInstance) {
        echoInstance.disconnect()
      }
    }
  }, [token])
}