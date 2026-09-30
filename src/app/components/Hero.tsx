import { Link } from 'react-router-dom';
import { Terminal } from './Terminal';
import { AnimatedButton } from './AnimatedButton';

export function Hero() {
  return (
    <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-1 sm:space-y-2" style={{ fontFamily: '"Audiowide", sans-serif' }}>
              <h1 className="text-white/90 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">
                Let's
              </h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 font-bold leading-tight animate-gradient text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">
                Empower your idea
              </h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 font-bold leading-tight animate-gradient text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">
                by transforming
              </h1>
              <h1 className="text-white/90 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]">
                digitally
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 text-sm sm:text-base text-center"
              >
                Work with Us
              </Link>
              <Link
                to="/learning"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 text-sm sm:text-base text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">500+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">100+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">24/7</div>
                <div className="text-gray-400 text-xs sm:text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Terminal */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}