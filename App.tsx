
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import DashboardPreview from './components/DashboardPreview';
import FeaturesGrid from './components/FeaturesGrid';
import AIAgentDemo from './components/AIAgentDemo';
import TargetAudience from './components/TargetAudience';
import ResaleSection from './components/ResaleSection';
import WhiteLabelSimulator from './components/WhiteLabelSimulator';
import AppAccess from './components/AppAccess';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <section id="features" className="scroll-mt-24">
          <DashboardPreview />
          <FeaturesGrid />
        </section>
        <section id="ai-agent" className="bg-gray-100 py-20 scroll-mt-24">
          <AIAgentDemo />
        </section>
        <TargetAudience />
        <ResaleSection />
        <WhiteLabelSimulator />
        <AppAccess />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
