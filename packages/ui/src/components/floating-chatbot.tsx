"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "./button"
import { ChatBot, type ChatBotProps } from "./chatbot"

export interface FloatingChatBotProps extends Omit<ChatBotProps, "className"> {
  buttonClassName?: string
  chatClassName?: string
  buttonLabel?: string
}

export function FloatingChatBot({
  buttonClassName,
  chatClassName,
  buttonLabel = "Chat with us",
  agentId,
  agentName,
  agentDescription,
}: FloatingChatBotProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button - Hidden when chat is open */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className={cn(
            "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all hover:scale-110",
            "bg-primary hover:bg-primary/90",
            buttonClassName
          )}
          aria-label={buttonLabel}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window - Appears in bottom right corner */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-6 right-6 z-50",
            "w-[90vw] sm:w-[400px] md:w-[450px]",
            "animate-in slide-in-from-bottom-5 duration-300",
            chatClassName
          )}
        >
          {/* ChatBot Component with close button */}
          <div className="relative">
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="absolute -right-2 -top-2 z-10 h-8 w-8 rounded-full bg-background shadow-md hover:bg-muted"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>

            <ChatBot
              agentId={agentId}
              agentName={agentName}
              agentDescription={agentDescription}
              className={cn("h-[500px] sm:h-[600px] shadow-2xl", chatClassName)}
            />
          </div>
        </div>
      )}
    </>
  )
}

