import AnimatedCard from './reactbits/AnimatedCard';
import FadeIn from './reactbits/FadeIn';

// Tauri uses inline SVG since it has custom colors
const TauriIcon = () => (
  <svg viewBox="0 0 128 128" className="w-12 h-12">
    <path fill="#ffc131" d="M86.242 46.547a12.19 12.19 0 0 1-24.379 0c0-6.734 5.457-12.191 12.191-12.191a12.19 12.19 0 0 1 12.188 12.191zm0 0" />
    <path fill="#24c8db" d="M41.359 81.453a12.19 12.19 0 1 1 24.383 0c0 6.734-5.457 12.191-12.191 12.191S41.36 88.187 41.36 81.453zm0 0" />
    <path fill="#ffc131" d="M99.316 85.637a46.5 46.5 0 0 1-16.059 6.535 32.675 32.675 0 0 0 1.797-10.719 33.3 33.3 0 0 0-.242-4.02 32.69 32.69 0 0 0 6.996-3.418 32.7 32.7 0 0 0 12.066-14.035 32.71 32.71 0 0 0-21.011-44.934 32.72 32.72 0 0 0-33.91 10.527 32.85 32.85 0 0 0-1.48 1.91 54.32 54.32 0 0 0-17.848 5.184A46.536 46.536 0 0 1 60.25 2.094a46.53 46.53 0 0 1 26.34-.375c8.633 2.418 16.387 7.273 22.324 13.984s9.813 15 11.16 23.863a46.537 46.537 0 0 1-20.758 46.071zM30.18 41.156l11.41 1.402a32.44 32.44 0 0 1 1.473-6.469 46.44 46.44 0 0 0-12.883 5.066zm0 0" />
    <path fill="#24c8db" d="M28.207 42.363a46.49 46.49 0 0 1 16.188-6.559 32.603 32.603 0 0 0-2.004 11.297 32.56 32.56 0 0 0 .188 3.512 32.738 32.738 0 0 0-6.859 3.371A32.7 32.7 0 0 0 23.652 68.02c-2.59 5.742-3.461 12.113-2.52 18.34s3.668 12.051 7.844 16.77 9.617 8.129 15.684 9.824 12.496 1.605 18.512-.262a32.72 32.72 0 0 0 15.402-10.266 34.9 34.9 0 0 0 1.484-1.918 54.283 54.283 0 0 0 17.855-5.223 46.528 46.528 0 0 1-8.723 16.012 46.511 46.511 0 0 1-21.918 14.609 46.53 46.53 0 0 1-26.34.375 46.6 46.6 0 0 1-22.324-13.984A46.56 46.56 0 0 1 7.453 88.434a46.53 46.53 0 0 1 3.582-26.098 46.533 46.533 0 0 1 17.172-19.973zm69.074 44.473c-.059.035-.121.066-.18.102.059-.035.121-.066.18-.102zm0 0" />
  </svg>
);

interface Tech {
  name: string;
  description: string;
  icon: string | React.ReactNode;
  color: string;
  isComponent?: boolean;
}

const techStack: Tech[] = [
  {
    name: 'React 19',
    description: 'Latest features for seamless, responsive UI',
    icon: '/logos/react-svgrepo-com.svg',
    color: '#61DAFB',
  },
  {
    name: 'Tauri 2.0',
    description: 'Lightweight, secure desktop framework',
    icon: <TauriIcon />,
    color: '#FFC131',
    isComponent: true,
  },
  {
    name: 'Rust',
    description: 'High-performance backend',
    icon: '/logos/rust-svgrepo-com.svg',
    color: '#CE412B',
  },
  {
    name: 'Vite',
    description: 'Lightning-fast build tool',
    icon: '/logos/vite.svg',
    color: '#646CFF',
  },
  {
    name: 'TypeScript',
    description: 'Fully typed for reliability',
    icon: '/logos/typescript-svgrepo-com.svg',
    color: '#3178C6',
  },
  {
    name: 'TailwindCSS',
    description: 'Utility-first styling',
    icon: '/logos/tailwind-svgrepo-com.svg',
    color: '#38B2AC',
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section heading with decorative line */}
        <FadeIn delay={0}>
          <div className="mb-16">
            <div className="flex items-center gap-6 mb-4">
              <h2 className="text-4xl md:text-5xl font-berrie bg-gradient-to-r from-[var(--accent-glow-1)] via-[var(--accent-glow-2)] to-[var(--accent-glow-3)] bg-clip-text text-transparent whitespace-nowrap">
                Tech Stack
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-600 via-gray-600 to-transparent" />
            </div>
            <p className="text-lg text-gray-400">
              Built with cutting-edge technologies
            </p>
          </div>
        </FadeIn>

        {/* Grid of tech cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <AnimatedCard glow className="h-full">
                <div className="flex flex-col items-center text-center p-6">
                  <div
                    className="mb-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                    style={{
                      borderColor: `${tech.color}30`,
                      boxShadow: `0 0 20px ${tech.color}15`
                    }}
                  >
                    {tech.isComponent ? (
                      tech.icon
                    ) : (
                      <img
                        src={tech.icon as string}
                        alt={tech.name}
                        className="w-12 h-12 object-contain"
                      />
                    )}
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {tech.description}
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
