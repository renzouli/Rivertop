import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
    </div>
  );
}
