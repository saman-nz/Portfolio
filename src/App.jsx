import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';

// Counter Component for the Stats
const StatCounter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, 2000 / end); // Adjust speed here
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col">
      <span className="text-4xl font-bold text-[#00f2ea]">{count}+</span>
      <span className="text-gray-500 text-xs uppercase tracking-tighter mt-1">{label}</span>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen relative">
      <div className="glow-overlay" /> {/* This adds the subtle glow */}
      
      <div className="max-w-7xl mx-auto px-8 pt-20">
        {/* Terminal Style Header */}
        <div className="font-mono text-sm mb-12 flex items-center gap-2">
           <span className="text-[#00f2ea] font-bold">&lt;dev /&gt;</span>
           <span className="text-gray-600">~/portfolio $ whoami</span>
           <motion.span 
             animate={{ opacity: [0, 1, 0] }} 
             transition={{ repeat: Infinity, duration: 1 }}
             className="w-2 h-4 bg-[#00f2ea]"
           />
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl lg:text-9xl font-black leading-[0.8] mb-8 tracking-tighter">
            FULL STACK <br />
            <span className="text-[#00f2ea]">DEVELOPER</span>
          </h1>
          
          <p className="max-w-2xl text-gray-400 text-lg mb-12 border-l-2 border-[#00f2ea]/20 pl-6">
            I craft performant, scalable web applications with modern technologies. 
            From pixel-perfect frontends to robust backend architectures.
          </p>

          {/* Counters Grid */}
          <div className="flex gap-16 mb-16">
            <StatCounter target="3" label="Years Experience" />
            <StatCounter target="20" label="Projects Built" />
            <StatCounter target="7" label="Technologies" />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#00f2ea] text-black px-10 py-4 font-bold rounded-sm hover:brightness-110 transition-all uppercase tracking-widest text-xs">
              View Projects
            </button>
            <button className="border border-white/20 px-10 py-4 font-bold rounded-sm hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}