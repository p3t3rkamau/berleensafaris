import { useEffect } from 'react'

import type { Message } from '../ChatInterface' // Adjust the import path as needed

interface ConversationStorage {
  clearConversation: () => void
}

const useConversationStorage = (
  messages: Message[],
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
): ConversationStorage => {
  useEffect(() => {
    // Retrieve conversation from localStorage on component mount
    const storedConversation = localStorage.getItem('conversation')
    if (storedConversation) {
      setMessages(JSON.parse(storedConversation))
    }
  }, [setMessages])

  useEffect(() => {
    // Store conversation in localStorage whenever it changes
    localStorage.setItem('conversation', JSON.stringify(messages))
  }, [messages])

  const clearConversation = (): void => {
    localStorage.removeItem('conversation')
    setMessages([])
  }

  return { clearConversation }
}

export default useConversationStorage
