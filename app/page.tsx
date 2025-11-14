import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
