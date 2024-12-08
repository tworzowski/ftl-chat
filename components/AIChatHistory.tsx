import { supabase } from '@/lib/supabase'

function AIChatHistory() {
  const saveConversation = async (messages: Message[]) => {
    try {
      const { data, error } = await supabase
        .from('conversations')
        .insert([
          {
            user_id: 'anonymous', // Replace with actual user ID if you implement auth
            messages: messages
          }
        ])
      
      if (error) throw error
      console.log('Conversation saved:', data)
    } catch (error) {
      console.error('Error saving conversation:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // ... existing submit code ...

    // After the conversation is updated, save it
    await saveConversation([...messages, newMessage, aiMessage])
  }

  // ... rest of the component
} 