import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Services from '@/components/sections/Services';
import TerminalCTA from '@/components/ui/TerminalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <div className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <TerminalCTA />
        </div>
      </div>
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
