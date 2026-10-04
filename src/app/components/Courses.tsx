import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Zap, Brain, BarChart2,
  Monitor, Bot, Workflow, ChevronDown, ChevronUp,
  GraduationCap, Briefcase, Star, Users, Building2, Gift
} from 'lucide-react';

const programs = [
  {
    id: 'digital-admin',
    icon: <Monitor className="w-7 h-7" />,
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(6,182,212,0.35)',
    title: 'Digital Business Administration & Automation',
    tagline: 'Become the Professional Every Modern Business Needs',
    intro: 'Administrative professionals are no longer expected to simply manage paperwork. Today\'s organizations need digital administrators who can streamline operations, automate repetitive tasks, and support business growth.',
    learn: ['Business Administration', 'Digital Office Management', 'Workflow Automation', 'Business Process Improvement', 'Microsoft 365 Systems', 'AI Productivity Tools'],
    build: ['Automated Registration Systems', 'Document Approval Workflows', 'Meeting Scheduling Platforms', 'Business Reporting Dashboards'],
    careers: ['Digital Administrator', 'Operations Coordinator', 'Office Manager', 'Executive Assistant', 'Virtual Assistant'],
    cta: 'Perfect for professionals who want to become indispensable in modern workplaces.',
    price: 'R2,499',
    monthly: 'R625 x 4',
  },
  {
    id: 'entrepreneurship-ai',
    icon: <Brain className="w-7 h-7" />,
    color: 'from-violet-400 to-purple-600',
    glow: 'rgba(139,92,246,0.35)',
    title: 'Entrepreneurship & AI',
    tagline: 'Build Smarter Businesses with Artificial Intelligence',
    intro: 'Launching a business has never been easier. Growing one has never been more competitive. Learn how modern entrepreneurs use AI and automation to attract customers, reduce costs, and scale operations faster.',
    learn: ['Business Planning', 'Startup Development', 'AI-Powered Marketing', 'Customer Acquisition', 'Business Automation', 'Growth Strategies'],
    build: ['Lead Generation Funnels', 'AI Business Assistants', 'Automated Sales Systems', 'Customer Onboarding Workflows'],
    careers: ['Entrepreneurs', 'Side Hustlers', 'Startup Founders', 'Small Business Owners'],
    cta: 'Work smarter. Scale faster. Compete confidently.',
    careersLabel: 'Perfect For',
    price: 'R2,999',
    monthly: 'R750 x 4',
  },
  {
    id: 'project-management',
    icon: <BarChart2 className="w-7 h-7" />,
    color: 'from-emerald-400 to-teal-500',
    glow: 'rgba(52,211,153,0.35)',
    title: 'Project Management & Workflow Automation',
    tagline: 'Lead Projects with Confidence and Precision',
    intro: 'Companies don\'t just need project managers. They need project leaders who can improve efficiency, automate reporting, and keep teams aligned.',
    learn: ['Project Planning', 'Agile Fundamentals', 'Risk Management', 'Team Collaboration', 'Workflow Design', 'Automation Systems'],
    build: ['Automated Task Assignment Systems', 'Project Dashboards', 'Progress Reporting Tools', 'Risk Monitoring Solutions'],
    careers: ['Project Coordinator', 'Project Administrator', 'Project Officer', 'Operations Manager'],
    cta: 'Learn to manage projects like a modern digital leader.',
    price: 'R3,499',
    monthly: 'R875 x 4',
  },
  {
    id: 'microsoft-365',
    icon: <Zap className="w-7 h-7" />,
    color: 'from-blue-400 to-indigo-500',
    glow: 'rgba(96,165,250,0.35)',
    title: 'Microsoft 365 Productivity & Automation',
    tagline: 'Transform Everyday Tasks into Powerful Automated Workflows',
    intro: 'Most professionals only use a fraction of Microsoft 365\'s capabilities. Learn how to unlock its full potential and become a workplace productivity expert.',
    learn: ['Excel Analytics', 'Advanced Word', 'Outlook Productivity', 'Teams Collaboration', 'SharePoint', 'Power Automations'],
    build: ['Leave Approval Systems', 'Registration Platforms', 'Automated Reports', 'Team Collaboration Workflows'],
    careers: ['Office Administrator', 'Data Administrator', 'Executive Assistant', 'Productivity Specialist'],
    cta: 'Become the person every organization relies on to keep work flowing.',
    price: 'R1,999',
    monthly: 'R500 x 4',
  },
  {
    id: 'ai-business',
    icon: <Bot className="w-7 h-7" />,
    color: 'from-fuchsia-400 to-pink-500',
    glow: 'rgba(217,70,239,0.35)',
    title: 'AI for Business Professionals',
    tagline: 'Use AI to Work Faster, Think Smarter, and Deliver More',
    intro: 'AI is no longer the future. It is today\'s competitive advantage. Learn how professionals and businesses are using AI to automate work, improve customer experiences, generate content, and make better decisions.',
    learn: ['AI Fundamentals', 'Prompt Engineering', 'AI Productivity Tools', 'Content Automation', 'Business Intelligence', 'Ethical AI Practices'],
    build: ['AI Support Assistants', 'AI Research Systems', 'AI Content Workflows', 'Business Intelligence Solutions'],
    careers: ['AI Productivity Specialist', 'Business Analyst', 'Innovation Coordinator', 'Digital Transformation Specialist'],
    cta: 'Master the technology that is reshaping every industry.',
    price: 'R3,999',
    monthly: 'R1,000 x 4',
  },
  {
    id: 'automation-specialist',
    icon: <Workflow className="w-7 h-7" />,
    color: 'from-orange-400 to-rose-500',
    glow: 'rgba(251,146,60,0.35)',
    title: 'Business Automation Specialist (n8n)',
    tagline: 'The Most Powerful Automation Program at ReignDev',
    intro: 'Imagine eliminating hours of repetitive work. Imagine building systems that work 24/7. Imagine becoming the person who helps businesses save time, reduce costs, and increase productivity.',
    learn: ['n8n Workflow Development', 'API Integrations', 'Microsoft 365 Automation', 'CRM Systems', 'AI Workflows', 'Enterprise Automation Design'],
    build: ['AI Customer Support Bots', 'Sales Automation Systems', 'Inventory Monitoring Platforms', 'Employee Onboarding Solutions', 'End-to-End Business Workflows'],
    careers: ['Automation Specialist', 'Business Systems Analyst', 'Digital Transformation Consultant', 'n8n Freelancer', 'Automation Consultant'],
    cta: 'This is where business, AI, and automation come together.',
    featured: true,
    price: 'R5,999',
    monthly: 'R1,500 x 4',
    flagship: true,
  },
];

const outcomes = [
  'Real-world projects in your portfolio',
  'Practical AI and automation skills',
  'Business-ready experience',
  'Industry-recognized certification',
  'The confidence to solve real problems',
  'Skills that employers and clients actively seek',
];

type Program = typeof programs[number];

function ProgramCard({ program }: { program: Program }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md overflow-hidden transition-all duration-500 ${program.featured ? 'border-orange-400/40' : ''}`}
      style={{ boxShadow: open ? `0 0 48px ${program.glow}` : `0 0 20px ${program.glow}40` }}
    >
      {program.featured && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 via-rose-400 to-pink-500" />}
      {program.featured && (
        <span className="absolute top-4 right-4 text-xs font-bold tracking-widest text-orange-300 border border-orange-400/50 rounded-full px-3 py-1 bg-orange-500/10 uppercase">
          Featured
        </span>
      )}

      <div className="p-7 md:p-9">
        <div className="flex items-start gap-4 mb-5">
          <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-lg`}>
            {program.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-1" style={{ fontFamily: 'Audiowide, sans-serif' }}>
              {program.title}
            </h3>
            <p className={`text-sm font-medium bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
              {program.tagline}
            </p>
          </div>
        </div>

        <p className="text-white/70 text-sm leading-relaxed mb-6">{program.intro}</p>

        {!open && (
          <div className="flex flex-wrap gap-2 mb-5">
            {program.learn.slice(0, 4).map(item => (
              <span key={item} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">{item}</span>
            ))}
            {program.learn.length > 4 && (
              <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40">+{program.learn.length - 4} more</span>
            )}
          </div>
        )}

        {open && (
          <div className="space-y-7 mb-6 animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-3">What You&apos;ll Learn</h4>
                <ul className="space-y-2">
                  {program.learn.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-3">What You&apos;ll Build</h4>
                <ul className="space-y-2">
                  {program.build.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${program.color} flex-shrink-0`} />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-3">
                  {program.careersLabel ?? 'Career Opportunities'}
                </h4>
                <ul className="space-y-2">
                  {program.careers.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <Briefcase className="w-4 h-4 mt-0.5 text-white/30 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={`text-sm font-semibold bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
              {program.cta}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-6 pt-4 border-t border-white/8">
          <div>
            <p className="text-xs font-bold tracking-widest text-white/30 uppercase mb-1">Investment</p>
            <p className={`text-3xl font-bold bg-gradient-to-r ${program.color} bg-clip-text text-transparent`} style={{ fontFamily: 'Audiowide, sans-serif' }}>
              {program.price}
            </p>
            <p className="text-white/40 text-xs mt-1">or <span className="text-white/60 font-semibold">{program.monthly} monthly payments</span></p>
          </div>
          {program.flagship && (
            <span className="self-start sm:self-end text-xs font-bold tracking-widest text-orange-300 border border-orange-400/50 rounded-full px-3 py-1.5 bg-orange-500/10 uppercase">
              Flagship Program
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(value => !value)}
            className={`flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl bg-gradient-to-r ${program.color} text-white transition-opacity hover:opacity-90`}
            aria-expanded={open}
          >
            {open ? 'Show Less' : 'Explore Program'}
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          <Link to="/contact" className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors">
            Enroll <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Courses() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      <section className="relative px-6 text-center max-w-4xl mx-auto mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-8">
          <GraduationCap className="w-4 h-4" />ReignDev Academy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Audiowide, sans-serif' }}>
          Build the Skills That
          <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Businesses Will Pay for Tomorrow</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 mb-4 font-medium">Stop Learning Outdated Skills. Start Building the Future.</p>
        <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
          The workplace is changing. Artificial Intelligence is transforming industries. Automation is replacing repetitive tasks. Businesses are looking for professionals who can do more, achieve more, and move faster.
        </p>
      </section>

      <section className="px-6 max-w-5xl mx-auto mb-24">
        <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md p-10 md:p-14" style={{ boxShadow: '0 0 60px rgba(139,92,246,0.15)' }}>
          <p className="text-center text-white/50 text-xs tracking-widest uppercase font-bold mb-8">Our programs combine</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Business Skills', color: 'from-cyan-400 to-blue-500' },
              { label: 'Artificial Intelligence', color: 'from-violet-400 to-purple-600' },
              { label: 'Workflow Automation', color: 'from-orange-400 to-rose-500' },
              { label: 'Microsoft 365 Productivity', color: 'from-blue-400 to-indigo-500' },
              { label: 'Real-World Projects', color: 'from-emerald-400 to-teal-500' },
              { label: 'Industry Certifications', color: 'from-fuchsia-400 to-pink-500' },
            ].map(({ label, color }) => (
              <div key={label} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5">
                <CheckCircle className={`w-5 h-5 flex-shrink-0 bg-gradient-to-br ${color} rounded-full text-white`} style={{ background: 'none' }} />
                <span className={`text-sm font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-white/60 text-sm">
            So you can become <span className="text-white font-semibold">more valuable</span>, <span className="text-white font-semibold">more productive</span>, and <span className="text-white font-semibold">more employable</span>.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-5xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest text-violet-400 uppercase mb-4">Why ReignDev?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug" style={{ fontFamily: 'Audiowide, sans-serif' }}>
              We teach practical systems,<br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">not just theory</span>
            </h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              Most training providers teach theory. We teach practical systems that businesses use every day. When you graduate from ReignDev, you&apos;ll have built real things, not just a certificate.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/50">
              <Users className="w-4 h-4 text-violet-400" />Building Africa&apos;s Future Digital Workforce
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'AI Assistants', color: 'from-fuchsia-400 to-pink-500' },
              { label: 'Business Automation', color: 'from-orange-400 to-rose-400' },
              { label: 'Microsoft 365 Workflows', color: 'from-blue-400 to-indigo-500' },
              { label: 'CRM Systems', color: 'from-emerald-400 to-teal-500' },
              { label: 'Project Automation Dashboards', color: 'from-cyan-400 to-blue-500' },
              { label: 'Real Business Projects', color: 'from-violet-400 to-purple-600' },
            ].map(({ label, color }) => (
              <div key={label} className={`p-4 rounded-xl border border-white/10 bg-gradient-to-br ${color} bg-opacity-10`} style={{ background: 'rgba(255,255,255,0.04)' }}>
                <CheckCircle className="w-4 h-4 mb-2 text-emerald-400" />
                <p className={`text-xs font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 max-w-5xl mx-auto mb-24">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest text-white/30 uppercase mb-3">Our Future-of-Work Programs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Audiowide, sans-serif' }}>
            Choose Your <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Program</span>
          </h2>
        </div>
        <div className="space-y-6">{programs.map(program => <ProgramCard key={program.id} program={program} />)}</div>
      </section>

      <section className="px-6 max-w-5xl mx-auto mb-24">
        <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-10 md:p-14 text-center" style={{ boxShadow: '0 0 80px rgba(6,182,212,0.12)' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/40 bg-yellow-400/10 text-yellow-300 text-xs font-bold tracking-widest uppercase mb-6">
            <Star className="w-4 h-4" />Not Just a Certificate
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Audiowide, sans-serif' }}>A Competitive Advantage</h2>
          <p className="text-white/50 mb-10 max-w-xl mx-auto">By the time you complete a ReignDev program, you&apos;ll have:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {outcomes.map(item => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-left">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-8">
        <div className="relative rounded-2xl overflow-hidden border border-yellow-400/30 bg-black/60 backdrop-blur-md flex flex-col" style={{ boxShadow: '0 0 60px rgba(250,204,21,0.12)' }}>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-fuchsia-500" />
          <div className="p-8 md:p-10 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold tracking-widest text-yellow-300 border border-yellow-400/50 rounded-full px-3 py-1 bg-yellow-400/10 uppercase">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Audiowide, sans-serif' }}>Future of Work<br />Professional Bundle</h3>
            <p className="text-yellow-300/70 text-sm mb-6">Everything you need to become a modern digital professional.</p>
            <div className="space-y-2 mb-6">
              {[
                'Digital Business Administration & Automation',
                'Microsoft 365 Productivity & Automation',
                'AI for Business Professionals',
                'Project Management & Workflow Automation',
                'Business Automation Specialist (n8n)',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-white/70"><CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />{item}</div>
              ))}
            </div>
            <div className="mb-6 p-4 rounded-xl bg-yellow-400/5 border border-yellow-400/20">
              <p className="text-xs text-white/30 line-through mb-1">Normal R17,995</p>
              <p className="text-4xl font-bold text-yellow-300" style={{ fontFamily: 'Audiowide, sans-serif' }}>R12,999</p>
              <p className="text-emerald-400 text-sm font-bold mt-1">You save R4,996</p>
            </div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3"><Gift className="w-4 h-4 text-yellow-400" /><p className="text-xs font-bold tracking-widest text-yellow-400/70 uppercase">Bonus Benefits</p></div>
              <div className="space-y-2">
                {['Career Development Workshops', 'CV Review Session', 'LinkedIn Profile Optimization', 'Job Readiness Training', 'ReignDev Community Access'].map(benefit => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-white/60"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />{benefit}</div>
                ))}
              </div>
            </div>
            <div className="mt-auto">
              <Link to="/contact" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-black text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #facc15, #fb923c, #e879f9)' }}>
                Enroll &amp; Save Today <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-cyan-400/20 bg-black/60 backdrop-blur-md flex flex-col" style={{ boxShadow: '0 0 60px rgba(6,182,212,0.10)' }}>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500" />
          <div className="p-8 md:p-10 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-lg"><Building2 className="w-6 h-6" /></div>
              <div><h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Audiowide, sans-serif' }}>Business &amp; Team Training</h3><p className="text-cyan-300/70 text-sm">Upskill Your Workforce</p></div>
            </div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Train your employees in AI, Automation, Microsoft 365, and Digital Business Skills with programs customised to your organisation&apos;s needs.
            </p>
            <div className="space-y-2 mb-8">
              {['Custom Training Programs', 'Team Workshops', 'Business Process Reviews', 'Practical Implementation Support', 'Digital Transformation Guidance'].map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-white/70"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />{item}</div>
              ))}
            </div>
            <div className="mb-8 p-4 rounded-xl bg-cyan-400/5 border border-cyan-400/20">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Starting From</p>
              <p className="text-4xl font-bold text-cyan-300" style={{ fontFamily: 'Audiowide, sans-serif' }}>R15,000</p>
              <p className="text-white/40 text-sm mt-1">per team</p>
            </div>
            <div className="mt-auto">
              <Link to="/contact" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white text-sm border border-cyan-400/40 hover:border-cyan-400/70 hover:bg-cyan-400/10 transition-colors">
                Request Corporate Training <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto text-center">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 p-12 md:p-20" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.1) 100%)', boxShadow: '0 0 100px rgba(139,92,246,0.2)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.25) 0%, transparent 70%)' }} />
          <p className="text-xs font-bold tracking-widest text-violet-400 uppercase mb-4 relative">Ready to Future-Proof Your Career?</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative" style={{ fontFamily: 'Audiowide, sans-serif' }}>
            Join the Next Generation<br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">of Digital Professionals</span>
          </h2>
          <p className="text-white/50 mb-10 max-w-xl mx-auto relative">
            Whether you&apos;re a student, professional, entrepreneur, administrator, or business owner, ReignDev gives you the tools to thrive in a world powered by AI and automation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 relative">
            <Link to="/contact" className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)', boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}>
              Enroll Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/about" className="px-8 py-4 rounded-xl font-bold text-white/70 text-sm border border-white/20 hover:border-white/40 hover:text-white transition-colors">Learn About Us</Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40 relative">
            {['Learn Practical Skills', 'Master AI & Automation', 'Advance Your Career', 'Grow Your Business'].map(item => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>
    </main>
  );
}
