import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Search, QrCode, User, Menu, X } from 'lucide-react';
import { Magnetic } from '@/components/ui/magnetic';
import { Select } from '@/components/ui/select';
import { motion, useAnimationControls } from 'framer-motion';

// Lazy load the particles background
const ParticlesBackground = lazy(() => import('@/components/ui/particles-background').then(mod => ({ default: mod.ParticlesBackground })));

const INDIAN_CITIES = [
  "Chennai, Tamil Nadu",
  "Mumbai, Maharashtra",
  "Delhi, NCR",
  "Bangalore, Karnataka",
  "Hyderabad, Telangana",
  "Kolkata, West Bengal",
  "Pune, Maharashtra",
  "Ahmedabad, Gujarat",
  "Jaipur, Rajasthan",
  "Kochi, Kerala"
];

const row1Prompts = [
  { text: "Headache", delay: 0.4 },
  { text: "Feeling dizzy", delay: 0.3 },
  { text: "Migraine pain", delay: 0.4 },
  { text: "Tension", delay: 0.4 },
  { text: "Sinus pressure", delay: 0.5 },
  { text: "Eye strain", delay: 0.6 },
];

const row2Prompts = [
  { text: "Feeling anxious", delay: 0.4 },
  { text: "Can't focus", delay: 0.5 },
  { text: "Panic attacks", delay: 0.6 },
  { text: "Depression", delay: 0.6 },
  { text: "Stress at work", delay: 0.7 },
  { text: "Mood swings", delay: 0.8 },
];

const row3Prompts = [
  { text: "Stomach pain", delay: 0.7 },
  { text: "Nausea feeling", delay: 0.8 },
  { text: "Digestive issues", delay: 0.9 },
  { text: "Food allergy", delay: 0.9 },
  { text: "Acid reflux", delay: 1.0 },
  { text: "Bloating", delay: 1.1 },
];

const scrollingRow1 = [...row1Prompts, ...row1Prompts, ...row1Prompts];
const scrollingRow2 = [...row2Prompts, ...row2Prompts, ...row2Prompts];
const scrollingRow3 = [...row3Prompts, ...row3Prompts, ...row3Prompts];

const LogoHeartbeat = React.memo(() => (
  <svg viewBox="0 0 100 40" className="w-full h-full">
    <path
      d="M20 20 L30 20 L35 10 L50 40 L60 0 L75 30 L80 25 L95 25"
      stroke="#00B2FF"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
));

export function HealthPilot() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [age, setAge] = useState('26');
  const [selectedCity, setSelectedCity] = useState(INDIAN_CITIES[0]);
  const springOptions = { bounce: 0.1 };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) > 0 && parseInt(value) <= 120)) {
      setAge(value);
    }
  };

  const handlePromptClick = (prompt: string) => {
    setSearchQuery(prompt);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const controls3 = useAnimationControls();

  useEffect(() => {
    const animate = async () => {
      const startRowAnimation = async (controls: any, duration: number, delay: number = 0) => {
        await controls.start({
          x: ["0%", "-50%"],
          transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
            delay,
          },
        });
      };

      await Promise.all([
        startRowAnimation(controls1, 45),
        startRowAnimation(controls2, 50, 0.5),
        startRowAnimation(controls3, 55, 1)
      ]);
    };

    animate();
  }, [controls1, controls2, controls3]);

  return (
    <div className="bg-white min-h-screen font-display">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative z-20">
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden lg:flex gap-8 items-center">
          <Magnetic intensity={0.2} springOptions={springOptions} range={100}>
            <a href="#" className="text-lg font-medium tracking-tight hover:text-gray-600 transition-colors">
              How it works
            </a>
          </Magnetic>
          <Magnetic intensity={0.2} springOptions={springOptions} range={100}>
            <button 
              onClick={() => scrollToSection('subscriptions')}
              className="text-lg font-medium tracking-tight hover:text-gray-600 transition-colors"
            >
              Subscriptions
            </button>
          </Magnetic>
          <Magnetic intensity={0.2} springOptions={springOptions} range={100}>
            <a href="#" className="text-lg font-medium tracking-tight hover:text-gray-600 transition-colors">
              FAQs
            </a>
          </Magnetic>
        </div>

        <div className="hidden lg:flex gap-4">
          <Magnetic intensity={0.2} springOptions={springOptions} range={100}>
            <button className="px-6 py-2 text-lg font-medium tracking-tight border-2 border-black rounded-full hover:bg-gray-100 transition-colors">
              Log in
            </button>
          </Magnetic>
          <Magnetic intensity={0.2} springOptions={springOptions} range={100}>
            <button className="px-6 py-2 text-lg font-medium tracking-tight bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Get started
            </button>
          </Magnetic>
        </div>

        <div className="lg:hidden flex gap-2">
          <button className="px-4 py-1.5 text-sm font-medium border-2 border-black rounded-full">
            Log in
          </button>
          <button className="px-4 py-1.5 text-sm font-medium bg-black text-white rounded-full">
            Get started
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-10 pt-20">
          <div className="flex flex-col items-center gap-6 p-4">
            <a href="#" className="text-xl font-medium">How it works</a>
            <button 
              onClick={() => scrollToSection('subscriptions')}
              className="text-xl font-medium"
            >
              Subscriptions
            </button>
            <a href="#" className="text-xl font-medium">FAQs</a>
          </div>
        </div>
      )}

      <div className="relative">
        <Suspense fallback={null}>
          <ParticlesBackground />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 text-center relative z-10">
          <div className="flex flex-col items-center gap-6">
            <div className="w-32 h-16 md:w-40 md:h-20">
              <LogoHeartbeat />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2D1810] tracking-widest">
                HEALTH PILOT
              </h1>
              <p className="text-lg md:text-xl text-[#FF5757] tracking-[0.2em] uppercase font-light">
                Your Health Co-Pilot
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-6 relative z-10">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="relative">
            <label className="absolute -top-6 left-0 text-gray-600">Age</label>
            <div className="relative w-full sm:w-32">
              <input
                type="text"
                value={age}
                onChange={handleAgeChange}
                placeholder="Age"
                className="w-full bg-white border rounded-lg p-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={3}
              />
              <User className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>
          <div className="relative w-full sm:w-64">
            <Select
              options={INDIAN_CITIES}
              value={selectedCity}
              onChange={setSelectedCity}
            />
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="How are you feeling today?"
            className="w-full p-3 pl-12 border rounded-lg"
          />
          <Menu className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <div className="py-4 space-y-4 overflow-hidden">
          <div className="relative h-10">
            <motion.div 
              className="flex gap-4 absolute"
              animate={controls1}
              style={{ width: "300%" }}
            >
              {scrollingRow1.map((prompt, index) => (
                <motion.button
                  key={index}
                  onClick={() => handlePromptClick(prompt.text)}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 178, 255, 0.1)" }}
                  className="whitespace-nowrap px-4 py-2 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 text-sm min-w-[140px]"
                >
                  {prompt.text}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <div className="relative h-10">
            <motion.div 
              className="flex gap-4 absolute"
              animate={controls2}
              style={{ width: "300%" }}
            >
              {scrollingRow2.map((prompt, index) => (
                <motion.button
                  key={index}
                  onClick={() => handlePromptClick(prompt.text)}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 178, 255, 0.1)" }}
                  className="whitespace-nowrap px-4 py-2 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 text-sm min-w-[140px]"
                >
                  {prompt.text}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <div className="relative h-10">
            <motion.div 
              className="flex gap-4 absolute"
              animate={controls3}
              style={{ width: "300%" }}
            >
              {scrollingRow3.map((prompt, index) => (
                <motion.button
                  key={index}
                  onClick={() => handlePromptClick(prompt.text)}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 178, 255, 0.1)" }}
                  className="whitespace-nowrap px-4 py-2 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 text-sm min-w-[140px]"
                >
                  {prompt.text}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Enter code"
              className="w-full p-3 pl-12 border rounded-lg"
            />
            <QrCode className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Patient code or Call sign"
              className="w-full p-3 pl-12 border rounded-lg"
            />
            <QrCode className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}