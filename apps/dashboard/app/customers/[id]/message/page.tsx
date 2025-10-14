"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@triplone/ui/components/card";
import { Input } from "@triplone/ui/components/input";
import { Label } from "@triplone/ui/components/label";
import { Textarea } from "@triplone/ui/components/textarea";
import { Button } from "@triplone/ui/components/button";
import { Badge } from "@triplone/ui/components/badge";
import {
  ChevronLeft,
  Mail,
  MessageSquare,
  MessageCircle,
  Send,
  CheckCheck,
  Check,
} from "lucide-react";

type CommunicationChannel = "email" | "sms" | "whatsapp";
type MessageStatus = "delivered" | "read" | "sent";

interface Message {
  id: string;
  channel: CommunicationChannel;
  subject?: string;
  content: string;
  timestamp: string;
  status: MessageStatus;
}

export default function CustomerMessagePage() {
  const params = useParams();
  const router = useRouter();
  const [activeView, setActiveView] = useState<"compose" | "history">("compose");
  const [selectedChannel, setSelectedChannel] = useState<CommunicationChannel>("email");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);

  // Mock data
  const customerName = "Fatima Khan";
  const customerEmail = "fatima.khan@email.com";
  const customerPhone = "+880 1712-345678";

  const messageHistory: Message[] = [
    {
      id: "1",
      channel: "email",
      subject: "Thank you for choosing our services...",
      content: "Thank you for choosing our services...",
      timestamp: "2024-02-10 10:30 AM",
      status: "delivered",
    },
    {
      id: "2",
      channel: "sms",
      content: "Your booking confirmation for Cox's Bazar tour...",
      timestamp: "2024-02-10 10:30 AM",
      status: "delivered",
    },
    {
      id: "3",
      channel: "whatsapp",
      content: "Hi Fatima! Hope you enjoyed your recent trip...",
      timestamp: "2024-02-10 10:30 AM",
      status: "read",
    },
  ];

  const handleChannelChange = (channel: CommunicationChannel) => {
    setSelectedChannel(channel);
    setSubject("");
    setMessage("");
    setCharCount(0);
  };

  const handleMessageChange = (value: string) => {
    if (selectedChannel === "sms" && value.length > 160) {
      return;
    }
    setMessage(value);
    setCharCount(value.length);
  };

  const getChannelIcon = (channel: CommunicationChannel) => {
    switch (channel) {
      case "email":
        return <Mail className="h-5 w-5 text-blue-600" />;
      case "sms":
        return <MessageSquare className="h-5 w-5 text-green-600" />;
      case "whatsapp":
        return <MessageCircle className="h-5 w-5 text-green-600" />;
    }
  };

  const getChannelLabel = (channel: CommunicationChannel) => {
    switch (channel) {
      case "email":
        return "Email";
      case "sms":
        return "SMS";
      case "whatsapp":
        return "WhatsApp";
    }
  };

  const getChannelDescription = (channel: CommunicationChannel) => {
    switch (channel) {
      case "email":
        return "Professional Communication";
      case "sms":
        return "Quick updates";
      case "whatsapp":
        return "Instant messaging";
    }
  };

  const getRecipient = () => {
    switch (selectedChannel) {
      case "email":
        return customerEmail;
      case "sms":
      case "whatsapp":
        return customerPhone;
    }
  };

  const getStatusIcon = (status: MessageStatus) => {
    switch (status) {
      case "delivered":
        return <CheckCheck className="h-4 w-4 text-green-600" />;
      case "read":
        return <CheckCheck className="h-4 w-4 text-blue-600" />;
      case "sent":
        return <Check className="h-4 w-4 text-gray-400" />;
    }
  };

  const renderComposeView = () => (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-6">New Message</h2>

        {/* Communication Channel Selection */}
        <div className="mb-6">
          <Label className="text-base font-semibold mb-3 block">
            Choose Communication Channel
          </Label>
          <div className="grid gap-4 md:grid-cols-3">
            {(["email", "sms", "whatsapp"] as CommunicationChannel[]).map((channel) => (
              <button
                key={channel}
                onClick={() => handleChannelChange(channel)}
                className={`p-4 border-2 rounded-lg transition-all ${
                  selectedChannel === channel
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      selectedChannel === channel
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-300"
                    }`}
                  />
                  {getChannelIcon(channel)}
                  <div className="text-left">
                    <p className="font-semibold">{getChannelLabel(channel)}</p>
                    <p className="text-xs text-muted-foreground">
                      {getChannelDescription(channel)}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recipient Info */}
        <div className="mb-6 p-4 bg-muted rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            {selectedChannel === "email" ? (
              <Mail className="h-4 w-4" />
            ) : (
              <MessageCircle className="h-4 w-4" />
            )}
            <span className="text-muted-foreground">Sending To:</span>
            <span className="font-semibold">{getRecipient()}</span>
          </div>
        </div>

        {/* Email Subject (only for email) */}
        {selectedChannel === "email" && (
          <div className="mb-4">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Enter email subject..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2"
            />
          </div>
        )}

        {/* Message Content */}
        <div className="mb-4">
          <Label htmlFor="message">
            Message
            {selectedChannel === "sms" && " (160 characters max)"}
          </Label>
          <Textarea
            id="message"
            placeholder={`Type your ${getChannelLabel(selectedChannel)} message here...`}
            value={message}
            onChange={(e) => handleMessageChange(e.target.value)}
            rows={selectedChannel === "email" ? 8 : 4}
            className="mt-2"
          />
          {selectedChannel === "sms" && (
            <p className="text-xs text-muted-foreground mt-1">
              {charCount}/160 characters
            </p>
          )}
        </div>

        {/* Send Button */}
        <div className="flex justify-end">
          <Button className="bg-green-600 hover:bg-green-700">
            <Send className="h-4 w-4 mr-2" />
            Send Email
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderHistoryView = () => (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-6">Message History</h2>

        <div className="space-y-4">
          {messageHistory.map((msg) => (
            <div
              key={msg.id}
              className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    {getChannelIcon(msg.channel)}
                  </div>
                  <div>
                    <p className="font-semibold">{getChannelLabel(msg.channel)}</p>
                    {msg.subject && (
                      <p className="text-sm text-muted-foreground">{msg.subject}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(msg.status)}
                  <Badge
                    className={
                      msg.status === "delivered"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : msg.status === "read"
                        ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    {msg.status}
                  </Badge>
                </div>
              </div>

              {!msg.subject && (
                <p className="text-sm text-muted-foreground mb-2">{msg.content}</p>
              )}

              <p className="text-xs text-muted-foreground">{msg.timestamp}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/customers")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Back To Customer</span>
          </button>
          <div className="border-l h-6"></div>
          <div>
            <h1 className="text-3xl font-bold text-blue-600">Send Message</h1>
            <p className="text-muted-foreground mt-1">
              Communicate with {customerName}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="text-green-600 border-green-600 hover:bg-green-50"
          >
            Message
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            View Bookings
          </Button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex gap-4">
        <Button
          onClick={() => setActiveView("compose")}
          className={
            activeView === "compose"
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }
        >
          Compose Message
        </Button>
        <Button
          onClick={() => setActiveView("history")}
          className={
            activeView === "history"
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }
        >
          Message History
        </Button>
      </div>

      {/* Content */}
      {activeView === "compose" ? renderComposeView() : renderHistoryView()}
    </div>
  );
}
