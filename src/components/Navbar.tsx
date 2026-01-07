import PillNav from './reactbits/PillNav';
import { Home, Zap, Layers, Download } from 'lucide-react';
// Using the public folder logo
const logo = '/app-icon.png';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4">
      <PillNav
        logo={logo}
        logoAlt="PLAY-ON! Logo"
        items={[
          { label: 'Home', href: '#', icon: <Home size={16} /> },
          { label: 'Features', href: '#features', icon: <Zap size={16} /> },
          { label: 'Tech Stack', href: '#tech', icon: <Layers size={16} /> },
          { label: 'Download', href: '#download', icon: <Download size={16} /> }
        ]}
        activeHref="#"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="rgba(255, 255, 255, 0.05)"
        pillColor="transparent"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#ffffff"
        glass={true}
      />
    </div>
  );
}
