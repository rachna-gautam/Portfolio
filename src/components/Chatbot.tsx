import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

// Personal context for Gemini AI
const PERSONAL_CONTEXT = `
You are Rachna Gautam's Portfolio Assistant. ONLY answer questions based on the information below. NEVER invent or skip details. Your tone should be friendly, professional, and conversational. Reword facts naturally instead of just listing them.

Skills:
- Rachna is skilled in frontend technologies like HTML5, CSS3, JavaScript, TypeScript, React, Next.js, TailwindCSS, and TanStack Query 🚀.
- On the backend, she works with Node.js, Express.js, and builds REST APIs 💻.
- She uses databases such as MongoDB and MySQL 🗄️.
- She also has experience with Blockchain / Web3: Solidity, Web3.js, Ethers.js, and Wallet Integration 🔗.
- DevOps & Cloud: AWS, Docker, and CI/CD ☁️.
- AI/ML & Tools: Python, OpenAI API 🧠, plus Git/GitHub and VS Code 🛠️.

Experience:
- Currently, she is a Senior Full Stack Developer (2022-Present), where she builds responsive apps, integrates APIs, optimizes databases, leads scalable projects, manages AWS cloud infrastructure, and mentors developers 👨‍💼.
- She started as a Junior Developer (2020-2021), developing React components, collaborating with design teams, and following agile processes 🌱.

Projects:
- She has delivered amazing projects such as:
  - 🛒 Digital Arms Marketplace: an e-commerce platform for digital assets. (Tech: React, Node.js, MongoDB, Stripe)
  - 🏢 AIA Consortium Portal: a professional portal. (Tech: React, TypeScript, PostgreSQL, AWS)
  - 📋 Plan A - Project Management: a real-time collaboration tool. (Tech: React, Node.js, Socket.io, MongoDB)
- Additionally, Rachna has worked on many other projects, both major and smaller ones, including minting websites, presale platforms, and web2 websites like FTA Flinn Taekwondo Academy 💡.

Contact:
- You can reach her at 📧 [rachnagautam695@gmail.com](mailto:rachnagautam695@gmail.com), connect on 💼 [LinkedIn](https://linkedin.com/in/rachna-gautam), or see her work on 💻 [GitHub](https://github.com/rachna-gautam).

RULES:
1. Always answer ONLY from this information.
2. If asked a question not related to Rachna Gautam, reply: "I'm here to answer questions only about Rachna Gautam."
3. If asked for contact info, give exactly what is listed above.
4. Make your answers friendly, professional, and easy to read. Include emojis, bullets, and links when appropriate.
5. Rewrite the facts into full sentences; do not just list them.
6. Keep answers concise and informative.
`;

const getGeminiResponse = async (userInput: string): Promise<string> => {
  const prompt = `${PERSONAL_CONTEXT}\n\nUser: ${userInput}\nAssistant:`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    // Extract the string properly
    if (typeof response.text === "string") return response.text;

    if (
      response.candidates?.length &&
      typeof response.candidates[0].content === "string"
    ) {
      return response.candidates[0].content;
    }

    return "Sorry, I couldn't process your question.";
  } catch (error) {
    console.error(error);
    return "Sorry, I couldn't process your question.";
  }
};

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedQuestions = [
  "What are Rachna's technical skills?",
  "Show me her projects",
  "Tell me about her work experience",
  "How can I contact her?",
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "Hi! I'm Rachna's Portfolio Assistant. You can select a question below or type your own."
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    const userQuery = inputValue;
    setInputValue("");
    setIsTyping(true);

    setTimeout(async () => {
      const response = await getGeminiResponse(userQuery);
      addBotMessage(response);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handlePredefinedQuestion = async (question: string) => {
    addUserMessage(question);
    setIsTyping(true);
    const response = await getGeminiResponse(question);
    addBotMessage(response);
    setIsTyping(false);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#52357B] to-[#648DB3] hover:from-[#5459AC] hover:to-[#648DB3] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
          isOpen ? "hidden" : "block"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#52357B] to-[#648DB3] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-semibold">Portfolio Assistant</h3>
                <p className="text-xs text-white/70">Ask me about Rachna</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Predefined Questions */}
          <div className="p-3 border-b border-gray-200 flex flex-wrap gap-2 bg-gray-50">
            {predefinedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handlePredefinedQuestion(q)}
                className="bg-gradient-to-r from-[#52357B] to-[#648DB3] text-white px-3 py-1 rounded-full text-xs hover:opacity-90 transition-opacity duration-200"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl break-words whitespace-pre-line ${
                    message.isBot
                      ? "bg-gray-100 text-gray-800"
                      : "bg-gradient-to-r from-[#52357B] to-[#648DB3] text-white"
                  }`}
                  style={{
                    display: "inline-block", // ensures background wraps the content
                    wordBreak: "break-word", // break long words to fit bubble
                    overflowWrap: "anywhere",
                  }}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && (
                      <Bot
                        size={16}
                        className="text-[#52357B] mt-0.5 flex-shrink-0"
                      />
                    )}
                    {!message.isBot && (
                      <User
                        size={16}
                        className="text-white mt-0.5 flex-shrink-0"
                      />
                    )}
                    <div className="text-sm leading-relaxed">
                      {message.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <Bot size={16} className="text-[#52357B]" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skills, projects, or experience..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#648DB3] focus:border-transparent transition-all duration-200 text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-[#52357B] to-[#648DB3] hover:from-[#5459AC] hover:to-[#648DB3] text-white p-2 rounded-xl transition-all duration-200 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
