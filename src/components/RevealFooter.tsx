import { useState } from 'react';
import { Github, Twitter, Sparkles, Copy, Check } from 'lucide-react';

// Custom Discord icon (official logo with fill)
const DiscordIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 -28.5 256 256"
        fill="currentColor"
        className={className}
    >
        <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
    </svg>
);

export default function RevealFooter() {
    const [copied, setCopied] = useState(false);

    const handleCopyDiscord = () => {
        navigator.clipboard.writeText('memestavedas');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer
            className="fixed bottom-0 left-0 right-0 h-screen flex flex-col items-center justify-center"
            style={{
                zIndex: 1,
                background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.7) 100%)'
            }}
        >
            {/* Main centered text */}
            <div className="text-center px-8">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                    Crafted for fellow otakus by
                </p>
                <h2
                    className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight leading-none"
                    style={{
                        background: 'linear-gradient(135deg, var(--accent-glow-1), var(--accent-glow-2), var(--accent-glow-3))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    MemestaVedas
                </h2>

                {/* Name with decorative line and quote */}
                <div className="mt-8 flex items-center justify-center gap-4 w-full max-w-4xl mx-auto">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-gray-600" />
                    <p className="text-gray-500 text-sm italic whitespace-nowrap">
                        "May all the beauty be blessed"
                    </p>
                </div>
            </div>

            {/* Bottom bar with social links left and creative section right */}
            <div
                className="absolute bottom-8 left-0 right-0 px-8 flex justify-between items-end"
                style={{ pointerEvents: 'auto' }}
            >
                {/* Left: Stacked social links with reveal effect */}
                <div className="flex flex-col gap-4">
                    <a
                        href="https://github.com/MemestaVedas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-gray-500 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                        <Github
                            size={28}
                            strokeWidth={1.5}
                            className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                        />
                        <span className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                            GitHub
                        </span>
                    </a>
                    <button
                        onClick={handleCopyDiscord}
                        className="group flex items-center gap-3 text-gray-500 hover:text-[#5865F2] transition-all duration-300 cursor-pointer"
                    >
                        <DiscordIcon
                            size={28}
                            className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(88,101,242,0.8)]"
                        />
                        <span className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 flex items-center gap-2">
                            {copied ? (
                                <>
                                    <Check size={14} className="text-green-400" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Copy size={14} />
                                    memestavedas
                                </>
                            )}
                        </span>
                    </button>
                    <a
                        href="https://twitter.com/memestavedas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-gray-500 hover:text-[#1DA1F2] transition-all duration-300 cursor-pointer"
                    >
                        <Twitter
                            size={28}
                            strokeWidth={1.5}
                            className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(29,161,242,0.8)]"
                        />
                        <span className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                            Twitter
                        </span>
                    </a>
                </div>

                {/* Right: Creative placeholder - "Support the project" */}
                <div className="text-right">
                    <a
                        href="https://github.com/MemestaVedas/PLAY-ON"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer block"
                    >
                        <div className="flex items-center gap-2 justify-end text-gray-500 group-hover:text-[var(--accent-glow-2)] transition-colors duration-300">
                            <Sparkles size={16} className="animate-pulse" />
                            <span className="text-xs uppercase tracking-widest">Please star on GitHub</span>
                        </div>
                    </a>
                    <p className="mt-4 text-gray-700 text-[10px]">
                        v0.3.0 • Made with Tauri + React
                    </p>
                </div>
            </div>
        </footer>
    );
}
