import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}
