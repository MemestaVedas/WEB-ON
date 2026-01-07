import { Play, BookOpen, MessageSquare, Layout, RefreshCw, Cast } from 'lucide-react';
import AnimatedCard from './reactbits/AnimatedCard';
import FadeIn from './reactbits/FadeIn';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Automatic Anime Tracking',
    description: 'Smart detection recognizes anime titles and episode numbers from your media player. Updates your AniList status automatically.',
    icon: <Play className="w-8 h-8 text-[var(--accent-glow-1)]" />,
  },
  {
    title: 'Integrated Manga Reader',
    description: 'Browse, search, and read manga directly within the app. Webtoon and page modes with vertical or single-page view.',
    icon: <BookOpen className="w-8 h-8 text-[var(--accent-glow-2)]" />,
  },
  {
    title: 'Discord Rich Presence',
    description: 'Show your friends what you\'re watching or reading in real-time with cover art and episode/chapter numbers.',
    icon: <MessageSquare className="w-8 h-8 text-[var(--accent-glow-3)]" />,
  },
  {
    title: 'Modern Experience',
    description: 'Organize your local anime folders in a sleek sidebar interface with dark mode support.',
    icon: <Layout className="w-8 h-8 text-[var(--accent-glow-4)]" />,
  },
  {
    title: 'Background Sync',
    description: 'Updates your AniList status and increments episode counts seamlessly in the background.',
    icon: <RefreshCw className="w-8 h-8 text-[var(--accent-glow-2)]" />,
  },
  {
    title: 'Multi-Player Support',
    description: 'Works with VLC Media Player, MPV, and MPC-HC out of the box.',
    icon: <Cast className="w-8 h-8 text-[var(--accent-glow-1)]" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0}>
          <div className="mb-16">
            {/* Section heading with decorative line */}
            <div className="flex items-center gap-6 mb-4">
              <h2 className="text-4xl md:text-5xl font-berrie bg-gradient-to-r from-[var(--accent-glow-1)] via-[var(--accent-glow-2)] to-[var(--accent-glow-3)] bg-clip-text text-transparent whitespace-nowrap">
                Features
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-600 via-gray-600 to-transparent" />
            </div>
            <p className="text-lg text-gray-400">
              Everything you need to manage your anime and manga collection
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <AnimatedCard glow>
                <div className="flex flex-col items-start h-full">
                  <div className="mb-4 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
