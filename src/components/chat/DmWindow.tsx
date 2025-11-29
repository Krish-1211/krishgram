"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, MoreVertical, Phone, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    sender: "user" | "bot";
    text: string;
    timestamp: string;
}

export function DmWindow() {
    const [messages, setMessages] = useState<Message[]>([
        { id: "1", sender: "user", text: "Hey Krish!", timestamp: "10:00 AM" },
        { id: "2", sender: "bot", text: "Hi! I'm KrishAI. Want to talk about a project or collab?", timestamp: "10:01 AM" },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            sender: "user",
            text: inputValue,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => [...prev, newMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulated AI Logic
        const lowerInput = inputValue.toLowerCase();
        let responseText = "I'm not sure about that. Try asking about my 'projects', 'skills', 'experience', or 'contact' info!";

        if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
            responseText = "Hello! I'm KrishAI. How can I help you today? Ask me about my projects or skills!";
        } else if (lowerInput.includes("project") || lowerInput.includes("work") || lowerInput.includes("build")) {
            responseText = "I've worked on some cool things! Check out 'Krishgram' (this app!), a Jewellery Store demo, and more in the Projects tab.";
        } else if (lowerInput.includes("skill") || lowerInput.includes("stack") || lowerInput.includes("tech")) {
            responseText = "My tech stack includes React, Next.js, TypeScript, Tailwind CSS, Node.js, and Python. I love building modern web apps!";
        } else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("reach")) {
            responseText = "You can reach me at krishkavathia27@gmail.com. I'm always open to new opportunities!";
        } else if (lowerInput.includes("resume") || lowerInput.includes("cv")) {
            responseText = "You can view my interactive resume by clicking the 'Resume.exe' icon on the desktop!";
        } else if (lowerInput.includes("about") || lowerInput.includes("who are you")) {
            responseText = "I'm a simulated AI assistant for Krish's portfolio. I'm here to help you navigate and learn more about his work.";
        } else if (lowerInput.includes("fibonacci") || (lowerInput.includes("python") && lowerInput.includes("code"))) {
            responseText = "Sure! Here is a Python program for the Fibonacci series:\n\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        print(a)\n        a, b = b, a + b\n\nfibonacci(10)";
        }

        // Simulate variable typing delay based on response length
        const delay = Math.min(1000 + responseText.length * 20, 3000);

        setTimeout(() => {
            setIsTyping(false);
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                sender: "bot",
                text: responseText,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prev) => [...prev, botResponse]);
        }, delay);
    };

    return (
        <div className="flex h-[calc(100vh-8rem)] md:h-[600px] w-full max-w-4xl mx-auto bg-card border rounded-xl overflow-hidden shadow-xl">
            {/* Sidebar (Conversations) - Hidden on mobile if chat is open, but for now we just show chat */}
            <div className="hidden md:flex flex-col w-80 border-r bg-muted/30">
                <div className="p-4 border-b font-bold text-lg flex justify-between items-center">
                    <span>krishcodes</span>
                    <MoreVertical className="h-5 w-5" />
                </div>
                <div className="flex-1 overflow-y-auto">
                    <div className="p-3 flex items-center gap-3 bg-accent/50 cursor-pointer">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 p-[2px]">
                            <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                                <Bot className="h-6 w-6" />
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold text-sm">KrishAI</p>
                            <p className="text-xs text-muted-foreground truncate">Active now</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-background">
                {/* Header */}
                <div className="p-4 border-b flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="flex items-center gap-3">
                        <div className="md:hidden h-10 w-10 rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 p-[2px]">
                            <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                                <Bot className="h-5 w-5" />
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold">KrishAI</p>
                            <p className="text-xs text-muted-foreground">Active now</p>
                        </div>
                    </div>
                    <div className="flex gap-4 text-primary">
                        <Phone className="h-6 w-6" />
                        <Video className="h-6 w-6" />
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={cn(
                                "flex w-full",
                                msg.sender === "user" ? "justify-end" : "justify-start"
                            )}
                        >
                            <div
                                className={cn(
                                    "max-w-[75%] px-4 py-2 rounded-2xl text-sm",
                                    msg.sender === "user"
                                        ? "bg-primary text-primary-foreground rounded-br-none"
                                        : "bg-muted text-foreground rounded-bl-none"
                                )}
                            >
                                <p className="whitespace-pre-wrap font-sans">{msg.text}</p>
                            </div>
                        </motion.div>
                    ))}
                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-start"
                        >
                            <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-none flex gap-1">
                                <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t bg-background">
                    <form onSubmit={handleSend} className="flex items-center gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Message..."
                            className="flex-1 bg-muted rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="h-6 w-6" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
