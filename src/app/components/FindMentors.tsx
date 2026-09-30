import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mentorPhoto from '../../imports/ca05a728-d6e9-41da-8c3a-96697daf0418.jpg';
import {
  Code, Server, Layers, Palette, GitBranch, Shield,
  Star, ArrowRight, Users, Clock, Award, Database,
  Cloud, Briefcase, Trophy, CheckCircle, MapPin, GraduationCap
} from 'lucide-react';

const techStack = [
  { category: "Languages", items: ["C#", "TypeScript", "JavaScript", "SQL", "C++"], color: "from-cyan-500 to-blue-500", icon: <Code className="w-5 h-5" /> },
  { category: "Backend", items: ["ASP.NET Core", "RESTful APIs", "Microservices", "RabbitMQ", "JWT Auth", "Ocelot Gateway"], color: "from-purple-500 to-pink-500", icon: <Server className="w-5 h-5" /> },
  { category: "Frontend", items: ["React", "Angular", "Blazor", "HTML5", "CSS3", "Bootstrap"], color: "from-green-500 to-teal-500", icon: <Layers className="w-5 h-5" /> },
  { category: "Database", items: ["MS SQL Server", "MySQL", "Redis Caching", "Query Optimization"], color: "from-orange-500 to-red-500", icon: <Database className="w-5 h-5" /> },
  { category: "DevOps & Cloud", items: ["Azure DevOps", "CI/CD Pipelines", "GitHub Actions", "Railway", "Docker", "IIS"], color: "from-yellow-500 to-orange-500", icon: <Cloud className="w-5 h-5" /> },
  { category: "Tools & Practices", items: ["Figma", "Postman", "Clean Code", "Agile/Scrum", "Code Reviews", "Unit Testing"], color: "from-pink-500 to-rose-500", icon: <Palette className="w-5 h-5" /> },
];

const keyProjects = [
  {
    title: "Sales Capture & Lead Management Platform",
    desc: "Developed and maintained enterprise systems for policy creation and lead allocation, supporting large-scale sales operations through scalable architecture.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Horizon Claims Modernization",
    desc: "Contributed to claims platform modernisation including XDS Integration, Audit History Tracking, Investment Intimation, and Unmet Premium Processing.",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Azure DevOps Migration Initiative",
    desc: "Led migration of 13 enterprise projects from TFS to Azure DevOps, building CI/CD pipelines across Test, UAT, and Production environments.",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Ocelot API Gateway Platform",
    desc: "Developed and maintained API gateway functionality for secure third-party integrations with enterprise-grade authentication and routing strategies.",
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "E-Commerce Microservices Platform",
    desc: "Designed scalable ASP.NET Core services with JWT auth, Redis caching, Clean Architecture patterns, and GitHub Actions automated deployments.",
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Trust & Thrive Platform",
    desc: "Designed onboarding flows, built authentication and role-based access solutions, and developed scalable APIs and backend integrations.",
    color: "from-pink-500 to-rose-500"
  },
];

const achievements = [
  "Promoted from Intern → Junior Developer → Intermediate Full Stack Software Developer",
  "Migrated 13 enterprise applications from TFS to Azure DevOps",
  "Built and maintained CI/CD pipelines across multiple deployment environments",
  "Delivered critical features across claims, sales, communications, and lead management systems",
  "Mentored interns and junior developers, supporting team growth",
  "Supported production systems used by thousands of internal and external users",
];

const stats = [
  { icon: <Clock className="w-5 h-5" />, value: "6+", label: "Years Experience" },
  { icon: <Briefcase className="w-5 h-5" />, value: "13+", label: "Enterprise Projects" },
  { icon: <Users className="w-5 h-5" />, value: "50+", label: "Mentees Guided" },
  { icon: <Award className="w-5 h-5" />, value: "100%", label: "Commitment" },
];

const mentorshipBenefits = [
  { title: "Real Projects", desc: "Work on live codebases and production-grade features used by real businesses.", gradient: "from-purple-500 to-pink-500" },
  { title: "1-on-1 Guidance", desc: "Direct access to your mentor for code reviews, pair programming, and career advice.", gradient: "from-cyan-500 to-blue-500" },
  { title: "Career Ready", desc: "Mock interviews, LinkedIn optimisation, and portfolio building to land your first role.", gradient: "from-green-500 to-teal-500" },
  { title: "Flexible Pace", desc: "Learn at a pace that suits your schedule with structured milestones to keep you on track.", gradient: "from-orange-500 to-yellow-500" },
  { title: "Industry Tools", desc: "Learn the exact tools used in enterprise — Git, Azure DevOps, Docker, cloud deployments.", gradient: "from-pink-500 to-rose-500" },
  { title: "Employment Pathways", desc: "Top performers may be selected for ReignDev employment or partner referrals.", gradient: "from-violet-500 to-purple-500" },
];

export function FindMentors() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">

        {/* ── Hero ── */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            Expert-led Mentorship Programme
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 tracking-wider">
              Grow with Guidance.
            </span>
            <br />
            <span className="text-white">Learn from Experts.</span>
          </h1>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mb-6"></div>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-[700px] mx-auto leading-relaxed mb-10">
            Connect with an industry professional who will help you sharpen your skills, build real projects, and prepare for your career.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
          >
            Apply for Mentorship
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* ── Mentor Profile Card ── */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Mentor</span>
          </h2>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 group max-w-[1100px] mx-auto">
            <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500"></div>

            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">

                {/* Photo + Stats */}
                <div className="flex-shrink-0 flex flex-col items-center gap-5">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 opacity-70 blur-sm animate-pulse"></div>
                    <div className="relative w-52 h-72 sm:w-60 sm:h-80 rounded-2xl overflow-hidden border-2 border-white/10">
                      <ImageWithFallback
                        src={mentorPhoto}
                        alt="Thabang Sekgotodi — Founder & Fullstack Developer at ReignDev"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-2 w-full">
                    {stats.map((stat, i) => (
                      <div key={i} className="flex flex-col items-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl px-3 py-3">
                        <div className="text-cyan-400 mb-1">{stat.icon}</div>
                        <div className="text-white font-bold text-lg leading-none">{stat.value}</div>
                        <div className="text-gray-400 text-xs text-center mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-col gap-1.5 text-sm text-gray-400 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      Sandton, Gauteng
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                      ND Engineering — TUT, 2019
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-yellow-400" />
                      Clientele Ltd · Sep 2020 – Present
                    </div>
                  </div>
                </div>

                {/* Bio + Details */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                    Thabang Sekgotodi
                  </h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold text-base sm:text-lg mb-4">
                    Founder &amp; Fullstack Developer · ReignDev
                  </p>
                  <p className="text-sm text-gray-400 italic mb-6">
                    Intermediate Full Stack Software Developer at Clientele Limited
                  </p>

                  {/* Synopsis */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 border-l-2 border-purple-500/40 pl-4">
                    Full Stack Software Engineer with 6+ years of experience designing, developing, and maintaining enterprise-grade web applications, APIs, and distributed systems. Proven track record of delivering scalable solutions across insurance, claims, sales, communications, and lead management platforms.
                  </p>

                  {/* Key achievements */}
                  <div className="space-y-2.5 mb-6">
                    {achievements.slice(0, 4).map((a, i) => (
                      <div key={i} className="flex items-start gap-3 justify-center lg:justify-start">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/40 transition-all hover:scale-105 text-sm sm:text-base"
                  >
                    Book a Session
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tech Stack ── */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10">
            Full <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Tech Stack</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack.map((stack, i) => (
              <div key={i} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 group">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${stack.color}`}>{stack.icon}</div>
                  <h3 className={`font-bold text-sm uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${stack.color}`}>
                    {stack.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {stack.items.map((item, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs group-hover:border-white/20 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Key Projects ── */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects &amp; Experience</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyProjects.map((project, i) => (
              <div key={i} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 group">
                <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${project.color} mb-3`}></div>
                <h3 className="text-white font-bold text-sm sm:text-base mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why Mentorship ── */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">ReignDev Mentorship?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mentorshipBenefits.map((item, i) => (
              <div key={i} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 group">
                <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${item.gradient} mb-3`}></div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Achievements Banner ── */}
        <div className="mb-16 sm:mb-20">
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-400/30 rounded-3xl p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">Key Achievements</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="text-center">
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-400/30 rounded-3xl p-8 sm:p-10 md:p-14 max-w-[800px] mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Level Up?
            </h2>
            <p className="text-gray-300 mb-8 text-base sm:text-lg max-w-[500px] mx-auto">
              Apply today and start your journey with a mentor who has walked the path you are on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 text-sm sm:text-base"
              >
                Apply for Mentorship
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/learning"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-purple-400/50 text-white font-semibold hover:bg-white/5 transition-all hover:scale-105 text-sm sm:text-base"
              >
                View Learning Paths
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] -z-10"></div>
      </div>
    </div>
  );
}
