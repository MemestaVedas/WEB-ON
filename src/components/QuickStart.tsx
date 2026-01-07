import { useState } from 'react';
import FadeIn from './reactbits/FadeIn';
import ShimmerButton from './reactbits/ShimmerButton';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  delay: number;
  step: string;
  title: string;
}

function CodeBlock({ code, delay, step, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <FadeIn delay={delay}>
      <div className="glass rounded-2xl p-6 border border-white/5">
        <h3 className="font-semibold mb-3 text-lg text-gray-200">
          {step} — {title}
        </h3>
        <div className="relative group">
          <pre className="block p-4 bg-black/40 rounded-lg text-sm text-[var(--accent-glow-4)] font-mono backdrop-blur-sm border border-white/5 overflow-x-auto" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {code}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white/10 hover:border-white/20"
            title="Copy to clipboard"
          >
            {copied ? (
              <Check size={16} className="text-green-400" />
            ) : (
              <Copy size={16} className="text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

export default function QuickStart() {
  return (
    <section id="download" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0}>
          <div className="mb-16">
            {/* Section heading with decorative line */}
            <div className="flex items-center gap-6 mb-4">
              <h2 className="text-4xl md:text-5xl font-berrie bg-gradient-to-r from-[var(--accent-glow-1)] via-[var(--accent-glow-2)] to-[var(--accent-glow-3)] bg-clip-text text-transparent whitespace-nowrap">
                Quick Start
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-600 via-gray-600 to-transparent" />
            </div>
            <p className="text-lg text-gray-400">
              Get up and running in minutes
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6 mb-12">
          <CodeBlock
            step="01"
            title="Clone the repository"
            code={`git clone https://github.com/MemestaVedas/PLAY-ON.git
cd PLAY-ON`}
            delay={200}
          />

          <CodeBlock
            step="02"
            title="Configure Environment"
            code={`VITE_ANILIST_CLIENT_ID=your_client_id
VITE_ANILIST_CLIENT_SECRET=your_client_secret
VITE_MAL_CLIENT_ID=your_client_id`}
            delay={400}
          />

          <CodeBlock
            step="03"
            title="Install & Run"
            code={`npm install
npm run tauri dev`}
            delay={600}
          />
        </div>

        <FadeIn delay={800}>
          <div className="flex gap-4 flex-wrap">
            <ShimmerButton variant="primary">
              Download Latest Release
            </ShimmerButton>
            <ShimmerButton variant="secondary">
              View Documentation
            </ShimmerButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
