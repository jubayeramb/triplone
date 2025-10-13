import { ChatBot } from "@triplone/ui/components/chatbot"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <ChatBot 
          agentName="Triplone AI"
          agentDescription="AI Voice Assistant for Trip Planning"
          className="h-[600px]"
        />
      </div>
    </div>
  )
}
