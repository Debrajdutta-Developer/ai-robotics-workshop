import React from 'react';
import { HeroSection } from './components/HeroSection';
import { WorkshopDetails } from './components/WorkshopDetails';
import { LearningOutcomes } from './components/LearningOutcomes';
import { FAQ } from './components/FAQ';
import { RegistrationForm } from './components/RegistrationForm';

function App() {
  return (
    <div className="min-h-screen bg-premium-black text-white">
      <HeroSection />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm />
      
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2026 AI & Robotics Summer Workshop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;