import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface Question {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const preBuiltQuestions: Question[] = [
  {
    id: "1",
    question: "What services do you offer?",
    answer: "I offer comprehensive web development services including:\n\n• Full-Stack Web Development (React, Next.js, TypeScript)\n• Landing Pages & Business Websites\n• AI Integration & Automation\n• System Architecture & DevOps\n• E-commerce Solutions\n\nEach service includes transparent pricing and guaranteed delivery timelines.",
    category: "services"
  },
  {
    id: "2", 
    question: "How much do you charge for a landing page?",
    answer: "Landing pages start at $500 with the following:\n\n• Basic Landing Page: $500 (24-48 hours)\n• Advanced Landing Page: $800 (48-72 hours)\n• Premium Landing Page: $1,200+ (3-5 days)\n\nAll include responsive design, SEO optimization, and deployment. Get a free quote with your specific requirements!",
    category: "pricing"
  },
  {
    id: "3",
    question: "What's your typical project timeline?",
    answer: "Project timelines vary by complexity:\n\n• Landing Pages: 24-72 hours\n• Full Websites: 1-2 weeks\n• Web Applications: 2-4 weeks\n• Complex Systems: 4-8 weeks\n\nI pride myself on fast delivery without compromising quality. Most projects start within 24 hours of approval.",
    category: "timeline"
  },
  {
    id: "4",
    question: "Do you work with startups and small businesses?",
    answer: "Absolutely! I specialize in helping startups and small businesses:\n\n• Flexible pricing for early-stage companies\n• Scalable solutions that grow with your business\n• MVP development for quick market entry\n• Ongoing support and maintenance\n\nMany of my portfolio projects are for startups and SMBs.",
    category: "clients"
  },
  {
    id: "5",
    question: "What technologies do you specialize in?",
    answer: "My tech stack includes:\n\n**Frontend:** React 19, Next.js, TypeScript, Tailwind CSS\n**Backend:** Supabase, PostgreSQL, Edge Functions\n**AI Tools:** OpenAI, Claude, Gemini, ElevenLabs\n**DevOps:** Vercel, Cloudflare, Docker\n**AI Development:** Cursor, Copilot, Windsurf\n\nI stay updated with the latest tools and workflows.",
    category: "tech"
  },
  {
    id: "6",
    question: "How do I start a project with you?",
    answer: "Getting started is simple:\n\n1. **Initial Consultation** - Free 30-minute call to discuss your needs\n2. **Project Proposal** - Detailed quote and timeline within 24 hours\n3. **Deposit & Kickoff** - 50% deposit to begin work\n4. **Development & Updates** - Regular progress updates\n5. **Review & Launch** - Final revisions and deployment\n\nReady to start? Email me at marlonetroy00@gmail.com!",
    category: "process"
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! I'm here to help you learn about my services. Choose a question below or ask anything about my work!",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleQuestionClick = async (question: Question) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: question.question,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const botMessage: Message = {
      id: `bot-${Date.now()}`,
      text: question.answer,
      sender: "bot",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center relative overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulsing indicator */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-background"
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 h-[500px] bg-card border border-border rounded-sm shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary/10 border-b border-border p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-foreground">Project Assistant</h3>
                  <p className="font-mono text-xs text-muted-foreground">Always online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-sm ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <p className="font-mono text-xs leading-relaxed">
                      {formatMessage(message.text)}
                    </p>
                    <p className="font-mono text-[10px] opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {message.sender === "user" && (
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-3 h-3 text-secondary" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 justify-start"
                >
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-primary" />
                  </div>
                  <div className="bg-muted text-muted-foreground p-3 rounded-sm">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ height: [4, 12, 4] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                        className="w-1 bg-current rounded-full"
                      />
                      <motion.div
                        animate={{ height: [4, 12, 4] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                        className="w-1 bg-current rounded-full"
                      />
                      <motion.div
                        animate={{ height: [4, 12, 4] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                        className="w-1 bg-current rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Questions */}
            <div className="border-t border-border p-4">
              <p className="font-mono text-xs text-muted-foreground mb-2">Quick Questions:</p>
              <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                {preBuiltQuestions.map((q) => (
                  <motion.button
                    key={q.id}
                    onClick={() => handleQuestionClick(q)}
                    className="w-full text-left p-2 bg-muted hover:bg-muted/80 rounded text-xs font-mono text-foreground transition-colors border border-transparent hover:border-primary/30"
                    whileHover={{ scale: 1.01, x: 2 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {q.question}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
