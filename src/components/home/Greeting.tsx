import React from "react";
import Image from "next/image";

const Greeting: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 lg:px-20 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-neutral-300 font-light">
              Hi, I'm{" "}
              <span className="block mt-2 text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-emerald-400 via-lime-400 to-green-500 bg-clip-text text-transparent">
                Ikshant
              </span>
            </h2>

            <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold font-Rampart bg-gradient-to-r from-emerald-300 via-lime-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl">
              I Code.
            </h1>
          </div>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Full-stack developer passionate about building exceptional digital
            experiences. I turn ideas into elegant, functional solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/about"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-neutral-800/50 border border-neutral-700 text-neutral-200 font-semibold rounded-lg hover:bg-neutral-800 hover:border-emerald-500/50 transition-all duration-300 inline-flex items-center justify-center"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="relative lg:order-last order-first">
         <div className="relative w-full max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">

            {/* Decorative glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-lime-400/20 to-green-500/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>

            {/* Image container - seamless with transparent background */}
          <div className="relative w-full aspect-[3/4]">
              <Image
                src="https://vnxsfyddqosfhrcuzhgq.supabase.co/storage/v1/object/public/portfolio-images/final.png"
                alt="Ikshant - Developer Portfolio"
    fill
    priority
    unoptimized
    className="object-contain hover:scale-105 transition-transform duration-500"
  />
</div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-neutral-300 font-medium">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
