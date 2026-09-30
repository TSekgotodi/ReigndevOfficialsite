export function AboutUs() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 tracking-wider">
            About Us
          </h1>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
        </div>

        {/* Company Description */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center max-w-[900px] mx-auto">
              Reign Dev is an IT company specializing in software development, tutoring and mentorship to beginner programmers.
            </p>
          </div>
        </div>

        {/* Mission & Values Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Mission & Values
          </h2>

          {/* Mission Card */}
          <div className="mb-8 sm:mb-12">
            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-transparent border border-purple-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden group">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-center sm:text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Mission</h3>
                </div>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Our mission is to empower young people through education, skill-building, and hands-on experience, offering them pathways to long-term career success in the tech industry while also helping alleviate unemployment in the community. We are committed to providing quality mentorship and creating employment opportunities for young talent in South Africa.
                </p>
              </div>
            </div>
          </div>

          {/* Company Values Card */}
          <div>
            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-900/20 via-teal-900/20 to-transparent border border-cyan-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 relative overflow-hidden group">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-cyan-600/10 to-cyan-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-center sm:text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Company Values</h3>
                </div>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Reign Dev was established with the aim of bridging the digital skills gap in South Africa. As technology continues to evolve, the need for skilled software developers is rapidly increasing. Our company serves as a resource hub for aspiring programmers by offering professional tutoring, mentorship, and practical experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] -z-10"></div>
      </div>
    </div>
  );
}
