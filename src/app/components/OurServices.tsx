import { Link } from 'react-router-dom';
import { Code, Smartphone, Camera, Server, FileText, TrendingUp, Users, Palette, Workflow } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  pricing?: string;
}

export function OurServices() {
  const services: Service[] = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Web Design",
      description: "The most modern and high-quality design made at a professional level. Let's design your e-commerce website and get a fully-featured e-commerce website from only R799pm with hosting included.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "High-quality development of sites at the professional level.",
      pricing: "Get ReignDev to design and maintain your website for you from only R399pm"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Professional development of applications for iOS and Android.",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Get high-quality photos of any category at a professional level.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Hosting Services",
      description: "Are you new to the hosting world! All your worries are gone because this is the best place to start hosting your website or APIs. Linux or Windows hosting from only R99.00pm.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Flyers",
      description: "Promote your business with high-quality flyers of any category at a professional level.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Internet Marketing",
      description: "Get high quality web traffic for your site. It's the only way to ensure that your company's online marketing strategy utilises the latest and most effective tools to bring in targeted traffic and generate brand or product awareness.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentorship Programme",
      description: "Get a mentor and build projects like a pro.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "AI Workflow Automation",
      description: "Intelligent automation using open-source AI tools like n8n and Node-RED. Automate repetitive tasks including lead capture, onboarding emails, and payment triggers. Smart integrations with CRMs, payment gateways, and social platforms — plus AI-driven analytics for funnel optimisation and customer engagement.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 tracking-wider">
            Our Services
          </h1>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-cyan-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300 text-center sm:text-left">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 text-center sm:text-left">
                  {service.description}
                </p>

                {/* Pricing (if available) */}
                {service.pricing && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-cyan-400 font-semibold">
                      {service.pricing}
                    </p>
                  </div>
                )}

                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-[800px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
              Let's bring your ideas to life with our professional services
            </p>
            <Link
              to="/contact"
              className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 text-sm sm:text-base text-center"
            >
              Contact Us Today
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] -z-10"></div>
      </div>
    </div>
  );
}
