import React from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <main className="bg-black text-white font-sans">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}