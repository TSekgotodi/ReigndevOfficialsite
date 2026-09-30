import { BookOpen, Code, Server, Cloud, Palette, Briefcase, Trophy, Target, Download, CheckCircle, Workflow } from 'lucide-react';

interface Module {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  topics: string[];
  color: string;
}

export function LearningPaths() {
  const modules: Module[] = [
    {
      icon: <Target className="w-8 h-8" />,
      number: "01",
      title: "Orientation & Onboarding",
      description: "Start your journey with ReignDev",
      topics: [
        "Introduction to ReignDev's mission, values, and products",
        "Walkthrough of the ReignDevStore ecosystem (e-commerce + small business integration)",
        "Setup guide: GitHub, Railway, MySQL, Redis, and local dev environments"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      number: "02",
      title: "Frontend Development",
      description: "Master modern web interfaces",
      topics: [
        "Fundamentals of React (components, hooks, state management)",
        "Styling with TailwindCSS and UI/UX principles",
        "Building real features: splash screens, login flows, product listings",
        "Code reviews and pair programming sessions"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      number: "03",
      title: "Backend Development",
      description: "Build robust server-side applications",
      topics: [
        "Introduction to C# .NET Web API",
        "RESTful API design, authentication (JWT), and claim mapping",
        "Database integration with MySQL and caching with Redis",
        "Debugging and deployment workflows on Railway"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      number: "04",
      title: "DevOps & Deployment",
      description: "Deploy and scale your applications",
      topics: [
        "CI/CD pipelines with GitHub Actions",
        "Docker basics: containerization and local testing",
        "Cloud deployment strategies with Railway and latency optimization for South Africa",
        "Environment variable management and secure configuration"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      number: "05",
      title: "Branding & Product Identity",
      description: "Create compelling visual experiences",
      topics: [
        "Using Figma and Canva for asset design",
        "Creating logos, splash screens, and onboarding kits",
        "Building a consistent brand identity for Trust & Thrive and ReignDevStore",
        "Storytelling for professional outreach and social media presence"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      number: "06",
      title: "Business & Outreach",
      description: "Understand the business side of tech",
      topics: [
        "Understanding e-commerce workflows and affiliate onboarding",
        "Designing influencer funnels and outreach strategies",
        "Drafting professional deployment updates and client communication"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "07",
      title: "Capstone Project",
      description: "Build something real and impactful",
      topics: [
        "Students collaborate to build a real-time feature for ReignDevStore",
        "Example: Shopping cart API with Redis caching, or seller onboarding dashboard",
        "Final presentation + code demo",
        "Top performers may be selected for ReignDev employment opportunities"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      number: "08",
      title: "AI Workflow Automation",
      description: "Introduction to AI-powered workflow automation",
      topics: [
        "Tools: n8n, Node-RED, and custom AI agents",
        "Automating repetitive tasks: lead capture, onboarding emails, and payment triggers",
        "Smart integrations with CRMs, payment gateways, and social platforms",
        "Building and deploying end-to-end automation pipelines for real business use cases"
      ],
      color: "from-emerald-500 to-cyan-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "09",
      title: "Career Readiness",
      description: "Launch your professional tech career",
      topics: [
        "Mock interviews for Full Stack Developer roles",
        "Resume and LinkedIn optimization",
        "Portfolio building with GitHub projects",
        "Networking and mentorship sessions"
      ],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 tracking-wider">
            Learning Paths
          </h1>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-[800px] mx-auto px-4">
            Embark on a comprehensive journey from beginner to professional developer. Our structured learning path guides you through every stage of modern software development.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="mb-12 sm:mb-16">
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Your Learning Journey</h3>
                <p className="text-gray-300 text-sm sm:text-base">9 comprehensive modules designed for success</p>
              </div>
              <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download PDF Guides
              </button>
            </div>
          </div>
        </div>

        {/* Learning Modules Grid */}
        <div className="space-y-6 sm:space-y-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 group"
            >
              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                  {/* Left side - Icon and Number */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0`}>
                      <div className="text-white">
                        {module.icon}
                      </div>
                    </div>
                    <div className="text-gray-500 text-4xl sm:text-5xl font-bold opacity-20">
                      {module.number}
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-1">
                    <div className="mb-4 text-center md:text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 text-base sm:text-lg">
                        {module.description}
                      </p>
                    </div>

                    {/* Topics List */}
                    <div className="space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <div
                          key={topicIndex}
                          className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                        >
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                            {topic}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Progress indicator */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <span className="text-xs sm:text-sm text-gray-400">Module {module.number}</span>
                        <button className={`w-full sm:w-auto px-4 py-2 rounded-full bg-gradient-to-r ${module.color} text-white text-sm font-medium hover:shadow-lg transition-all hover:scale-105`}>
                          Start Learning
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated gradient overlay */}
              <div className={`h-1 bg-gradient-to-r ${module.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-[800px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
              Join ReignDev's comprehensive training program and transform your career in tech
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 text-sm sm:text-base">
                Enroll Now
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-purple-400/50 text-white font-semibold hover:bg-white/5 transition-all hover:scale-105 text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] -z-10"></div>
      </div>
    </div>
  );
}
