import FadeIn from './reactbits/FadeIn';
import ShimmerButton from './reactbits/ShimmerButton';
import RotatingText from './reactbits/RotatingText';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-8 pt-20 overflow-hidden">
      {/* Content - Flex layout with left content and right logo */}
      <div className="max-w-6xl mx-auto w-full relative z-10 flex items-center justify-between gap-8">
        {/* Left side - Text content */}
        <div className="max-w-3xl">
          <FadeIn delay={200}>
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] leading-[0.8] mb-8 bg-gradient-to-r from-[var(--accent-glow-1)] via-[var(--accent-glow-2)] to-[var(--accent-glow-3)] bg-clip-text text-transparent pl-2 flex flex-col">
              <span className="font-berrie">PLAY</span>
              <span className="font-berrie -mt-4 md:-mt-8 lg:-mt-12">ON</span>
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="text-2xl md:text-3xl mb-4 text-gray-200 font-semibold flex items-center flex-wrap gap-2">
              <span>Your</span>
              <RotatingText
                texts={['Anime', 'Manga', 'Tracking', 'Show Off']}
                mainClassName="px-3 md:px-4 bg-gradient-to-r from-[var(--accent-glow-1)] via-[var(--accent-glow-2)] to-[var(--accent-glow-3)] text-black overflow-hidden py-1 md:py-2 justify-center rounded-lg"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
              <span>apps all in one place</span>
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <p className="text-lg mb-12 text-gray-400 max-w-xl">
              Seamlessly track local anime playback, sync with AniList, and read manga—all in one beautifully crafted app.
            </p>
          </FadeIn>

          <FadeIn delay={800}>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 flex-wrap items-center">
                <a
                  href="https://github.com/MemestaVedas/PLAY-ON/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-glow-1)] via-[var(--accent-glow-2)] to-[var(--accent-glow-3)] text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(216,180,254,0.5)]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Now
                </a>
                <a
                  href="https://github.com/MemestaVedas/PLAY-ON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
              {/* Platform availability */}
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span>Available for:</span>
                <div className="flex items-center gap-3">
                  {/* Windows */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                    </svg>
                    <span>Windows</span>
                  </div>
                  {/* macOS */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span>macOS</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right side - Logo */}
        <FadeIn delay={600} direction="right">
          <div className="hidden lg:block">
            <img
              src="/app-icon.png"
              alt="PLAY-ON! Logo"
              className="w-120 h-120 xl:w-120 xl:h-120 object-contain"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(216, 180, 254, 0.4)) drop-shadow(0 0 80px rgba(129, 140, 248, 0.3))'
              }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
