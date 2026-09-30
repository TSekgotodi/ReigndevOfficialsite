export function IntroSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-10 md:p-16 shadow-2xl">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-block">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider animate-gradient" style={{ fontFamily: '"Audiowide", sans-serif' }}>
                HELLO
              </h2>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-3 sm:mt-4"></div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2">
              Are you feeling stuck with your project? Don't worry, we've got your back! Together, we can build a bright future. Please feel free to contact us to discuss how we can contribute to your success.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12">
              <div className="backdrop-blur-lg bg-white/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-purple-400/50 transition-all hover:scale-105 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto sm:mx-0">
                  <span className="text-xl sm:text-2xl">⚡</span>
                </div>
                <h3 className="text-white font-bold mb-2 text-base sm:text-lg">Fast Development</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Lightning-fast turnaround with cutting-edge technology</p>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-cyan-400/50 transition-all hover:scale-105 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto sm:mx-0">
                  <span className="text-xl sm:text-2xl">🎯</span>
                </div>
                <h3 className="text-white font-bold mb-2 text-base sm:text-lg">Precision & Quality</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Pixel-perfect execution meets robust functionality</p>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-yellow-400/50 transition-all hover:scale-105 group sm:col-span-2 md:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto sm:mx-0">
                  <span className="text-xl sm:text-2xl">🚀</span>
                </div>
                <h3 className="text-white font-bold mb-2 text-base sm:text-lg">Innovation First</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Stay ahead with future-proof solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}