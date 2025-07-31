import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="bg-background w-full min-h-screen pb-48">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
