import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import QuickStart from './components/QuickStart';
import RevealFooter from './components/RevealFooter';
import Aurora from './components/reactbits/Aurora';

function App() {
  return (
    <div className="min-h-screen relative bg-black text-gray-200 selection:bg-purple-500/30 selection:text-white">
      {/* Aurora background - lowest layer */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Aurora
          colorStops={["#89CFF0", "#FFB7B2", "#B5EAD7"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Fixed footer - z-index 1, will be revealed */}
      <RevealFooter />

      {/* Main scrollable content - z-index 10, masks footer until spacer */}
      <main
        className="relative bg-black"
        style={{ zIndex: 10 }}
      >
        <Navbar />
        <Hero />
        <Features />
        <TechStack />
        <QuickStart />
      </main>

      {/* Spacer div - this is what reveals the footer, pointer-events none so footer is clickable */}
      <div className="h-screen relative pointer-events-none" style={{ zIndex: 5 }} />
    </div>
  );
}

export default App;
