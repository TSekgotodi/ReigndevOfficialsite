import { useState, useRef, useEffect } from 'react';
import './Terminal.css';

interface Message {
  type: 'user' | 'system';
  text: string;
}

export function Terminal() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { type: 'system', text: 'Welcome to Reign Dev Terminal! Type "help" to see available commands.' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  const getResponse = (command: string): string => {
    const cmd = command.toLowerCase().trim();

    // Help command
    if (cmd === 'help' || cmd === '?') {
      return `Available commands:
• about - Learn about Reign Dev
• services - View our services
• pricing - See our pricing
• contact - Get contact information
• learning - Information about learning paths
• mentorship - About our mentorship program
• automation - AI Workflow Automation details
• skills - Our tech stack
• location - Where we're based
• help - Show this help message
• clear - Clear the terminal`;
    }

    // About
    if (cmd === 'about' || cmd.includes('who are you') || cmd.includes('what is reign')) {
      return `Reign Dev is an IT company specializing in software development, tutoring and mentorship to beginner programmers. We empower young people through education, skill-building, and hands-on experience, offering pathways to long-term career success in the tech industry.`;
    }

    // Services
    if (cmd === 'services' || cmd.includes('what do you do') || cmd.includes('what services')) {
      return `Our Services:
• Web Design - From R799/month with hosting
• Web Development - From R399/month
• Mobile Apps - iOS & Android development
• Hosting Services - From R99/month
• Photography - Professional photos
• Flyers - Business promotion
• Internet Marketing - Drive traffic to your site
• Mentorship Programme - Learn from professionals
• AI Workflow Automation - Intelligent automation with n8n & Node-RED`;
    }

    // Pricing
    if (cmd === 'pricing' || cmd.includes('price') || cmd.includes('cost') || cmd.includes('how much')) {
      return `Our Pricing:
• E-commerce Website: R799/month (hosting included)
• Web Development & Maintenance: R399/month
• Linux/Windows Hosting: R99/month
Contact us for custom quotes on other services!`;
    }

    // Contact
    if (cmd === 'contact' || cmd.includes('reach') || cmd.includes('email') || cmd.includes('phone')) {
      return `Contact Information:
📞 Phone: 068 054 0434
📧 Email: sekgotodit@outlook.com
📍 Location: South Africa
🕐 Hours: Mon-Fri 9AM-5PM, Sat 10AM-2PM

Social Media:
• LinkedIn: Thabang Sekgotodi
• Instagram: @reigndevsa
• Facebook: ReignDev
• WhatsApp: +27 68 054 0434`;
    }

    // Learning
    if (cmd === 'learning' || cmd.includes('course') || cmd.includes('training') || cmd.includes('learn')) {
      return `Learning Paths:
We offer 8 comprehensive modules:
1. Orientation & Onboarding
2. Frontend Development (React, TailwindCSS)
3. Backend Development (C# .NET, MySQL)
4. DevOps & Deployment
5. Branding & Product Identity
6. Business & Outreach
7. Capstone Project
8. Career Readiness

Top performers may be selected for employment!`;
    }

    // AI Workflow Automation
    if (cmd === 'automation' || cmd.includes('workflow') || cmd.includes('n8n') || cmd.includes('node-red') || cmd.includes('automat')) {
      return `AI Workflow Automation:
Intelligent automation powered by open-source AI tools (n8n & Node-RED):
• Automate repetitive tasks: lead capture, onboarding emails, payment triggers
• Smart integrations with CRMs, payment gateways & social platforms
• AI-driven analytics for funnel optimisation and customer engagement
• Custom automation pipelines tailored to your business processes
Contact us for a free automation audit of your business!`;
    }

    // Mentorship
    if (cmd === 'mentorship' || cmd.includes('mentor') || cmd.includes('tutor')) {
      return `Mentorship Programme:
Get a mentor and build projects like a pro! Our mentorship program includes:
• One-on-one guidance from experienced developers
• Real-world project experience
• Code reviews and feedback
• Career guidance
• Portfolio building
Type "learning" to see our full curriculum!`;
    }

    // Skills
    if (cmd === 'skills' || cmd.includes('tech stack') || cmd.includes('technologies')) {
      return `Our Tech Stack:
Frontend: Angular, React, Blazor
Backend: C#, Java, .NET Web API, Python, TypeScript
Database: MSSQL Server, MySQL
DevOps: Docker, GitHub Actions, Railway
Design: Figma, Canva
We're always learning and expanding our skills!`;
    }

    // Location
    if (cmd === 'location' || cmd.includes('where') || cmd.includes('based')) {
      return `📍 We're based in South Africa
Available for local and remote projects.
We optimize for South African latency and infrastructure.`;
    }

    // Clear
    if (cmd === 'clear' || cmd === 'cls') {
      setMessages([
        { type: 'system', text: 'Terminal cleared. Type "help" for available commands.' }
      ]);
      return '';
    }

    // Mission
    if (cmd.includes('mission') || cmd.includes('goal') || cmd.includes('why')) {
      return `Our Mission:
To empower young people through education, skill-building, and hands-on experience, offering them pathways to long-term career success in the tech industry while helping alleviate unemployment in South Africa.`;
    }

    // Default response for unknown commands
    return `Command not recognized: "${command}"
Type "help" to see available commands, or ask a question about our services!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    // Get and add system response
    const response = getResponse(input);
    if (response) {
      setTimeout(() => {
        const systemMessage: Message = { type: 'system', text: response };
        setMessages(prev => [...prev, systemMessage]);
      }, 300);
    }

    setInput('');
  };

  return (
    <div className="terminal-container">
      <div className="terminal-content">
        {/* Terminal Header */}
        <div className="bg-white/5 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
          </div>
          <div className="text-gray-300 text-sm font-mono">Tbang_007@admin: ~</div>
          <button
            onClick={() => setMessages([{ type: 'system', text: 'Welcome to Reign Dev Terminal! Type "help" to see available commands.' }])}
            className="text-gray-400 hover:text-white border border-white/20 rounded px-2 py-0.5 text-xs hover:bg-white/10 transition-all"
            title="Clear terminal"
          >
            Clear
          </button>
        </div>

        {/* Terminal Content */}
        <div ref={scrollContainerRef} className="p-4 sm:p-6 font-mono text-xs sm:text-sm h-[400px] sm:h-[500px] overflow-y-auto">
          {/* Messages */}
          <div className="space-y-3">
            {messages.map((message, index) => (
              <div key={index} className="animate-fadeIn">
                {message.type === 'user' ? (
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">guest@reigndev:</span>
                    <span className="text-cyan-400">$</span>
                    <span className="text-white">{message.text}</span>
                  </div>
                ) : (
                  <div className="text-gray-300 whitespace-pre-line ml-0 pl-4 border-l-2 border-purple-500/30">
                    {message.text}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="mt-4 border-t border-gray-700 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-green-400">guest@reigndev:</span>
              <span className="text-cyan-400">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a command or question..."
                className="bg-transparent text-white outline-none flex-1 placeholder-gray-500"
                autoFocus
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
