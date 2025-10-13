import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FloatingChatBot } from "@triplone/ui/components/floating-chatbot";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Triplone",
  description:
    "Your all-in-one solution for managing and sharing trip plans with friends and family.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <FloatingChatBot 
          agentName="Triplone AI"
          agentDescription="AI Voice Assistant for Trip Planning"
          buttonLabel="Chat with Triplone AI"
        />
      </body>
    </html>
  );
}
