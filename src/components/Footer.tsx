export default function Footer() {
  return (
    <footer className="py-16 px-8 mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-12 border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[var(--accent-glow-1)] to-[var(--accent-glow-3)] bg-clip-text text-transparent">
                PLAY-ON!
              </h3>
              <p className="text-gray-400 text-sm">
                The Ultimate Desktop Companion for Anime & Manga
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-sm text-gray-200">QUICK LINKS</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-[var(--accent-glow-1)] transition-colors">Features</a></li>
                <li><a href="#tech" className="hover:text-[var(--accent-glow-1)] transition-colors">Tech Stack</a></li>
                <li><a href="#download" className="hover:text-[var(--accent-glow-1)] transition-colors">Download</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-sm text-gray-200">RESOURCES</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[var(--accent-glow-1)] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[var(--accent-glow-1)] transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-[var(--accent-glow-1)] transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm">© 2024 PLAY-ON!. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
