import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useEcho } from '../lib/echo'
import axios from 'axios'
import useAccountStore from '@/stores/useAccountStore'
const ChatSection = ({ user, conversationId }) => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const{account,token}=useAccountStore();
    const messagesEndRef = useRef(null)
    const echo = useEcho(token)
    useEffect(() => {
        const fetchMessages = async () => {
          try {
            const { data } = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/api/conversations/${conversationId}/messages`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            setMessages(data)
          } catch (error) {
            console.error('Error fetching messages:', error)
          }
        }
        
        fetchMessages()
      }, [conversationId, token])
      useEffect(() => {
        if (!echo) return
        
        // Listen for new messages
        echo.private(`chat.${conversationId}`)
          .listen('.MessageSent', (message) => {
            setMessages((prev) => [...prev, message])
          })
        
        // Listen for typing events
        echo.private(`chat.${conversationId}`)
          .listenForWhisper('typing', ({ isTyping, userId }) => {
            if (userId !== user.id) {
              setIsTyping(isTyping)
            }
          })
        
        return () => {
          echo.leave(`chat.${conversationId}`)
        }
      }, [echo, conversationId, user.id])
        
      // Auto-scroll to bottom
      useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, [messages])
        
      const sendMessage = async () => {
        if (!newMessage.trim()) return
        
        try {
          await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/conversations/${conversationId}/messages`,
            { content: newMessage },
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          )
          setNewMessage('')
        } catch (error) {
          console.error('Error sending message:', error)
        }
      }
        
      const handleTyping = (isTyping) => {
        echo.private(`chat.${conversationId}`)
          .whisper('typing', {
            isTyping,
            userId: user.id,
          })
      }
      // Fetch initial messages
     // Setup WebSocket listeners
     
      return (
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender.id === user.id ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender.id === user.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {new Date(message.created_at).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                  <p>Typing...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
    
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => {
                  setNewMessage(e.target.value)
                  handleTyping(true)
                }}
                onBlur={() => handleTyping(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    sendMessage()
                    handleTyping(false)
                  }
                }}
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => {
                  sendMessage()
                  handleTyping(false)
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )
    }

export default ChatSection