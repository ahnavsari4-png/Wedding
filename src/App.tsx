/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FlowerShowerCanvas } from './components/FlowerShowerCanvas';
import { HeaderNavbar } from './components/HeaderNavbar';
import { HeroSection } from './components/HeroSection';
import { CoupleStory } from './components/CoupleStory';
import { EventsSchedule } from './components/EventsSchedule';
import { DigitalKankotriModal } from './components/DigitalKankotriModal';
import { GujaratiCustoms } from './components/GujaratiCustoms';
import { PhotoGallery } from './components/PhotoGallery';
import { BlessingsGuestbook } from './components/BlessingsGuestbook';
import { RsvpSection } from './components/RsvpSection';
import { VenueLocation } from './components/VenueLocation';
import { Footer } from './components/Footer';

export default function App() {
  const [isKankotriOpen, setIsKankotriOpen] = useState(false);
  const [showerTrigger, setShowerTrigger] = useState(0);
  const [isGujarati, setIsGujarati] = useState(true);

  const handleTriggerShower = () => {
    setShowerTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2C1810] selection:bg-[#851214] selection:text-[#FDE68A] relative">
      {/* Interactive Falling Flower Petals Canvas */}
      <FlowerShowerCanvas triggerBurst={showerTrigger} />

      {/* Main Navigation with Shehnai Audio & Quick Tools */}
      <HeaderNavbar
        onOpenKankotri={() => setIsKankotriOpen(true)}
        onTriggerShower={handleTriggerShower}
        isGujarati={isGujarati}
        setIsGujarati={setIsGujarati}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Auspicious Shlokas & Live Countdown */}
        <HeroSection
          onOpenKankotri={() => setIsKankotriOpen(true)}
          onTriggerShower={handleTriggerShower}
          isGujarati={isGujarati}
        />

        {/* Couple Profiles & Family Story */}
        <CoupleStory isGujarati={isGujarati} />

        {/* Wedding Timeline & Events Schedule */}
        <EventsSchedule isGujarati={isGujarati} />

        {/* Gujarati Wedding Customs & Saptapadi Vows */}
        <GujaratiCustoms isGujarati={isGujarati} />

        {/* Photo Gallery & Memories */}
        <PhotoGallery isGujarati={isGujarati} />

        {/* Digital Blessings & Guestbook */}
        <BlessingsGuestbook
          onTriggerShower={handleTriggerShower}
          isGujarati={isGujarati}
        />

        {/* RSVP & Digital Pass Generator */}
        <RsvpSection
          onTriggerShower={handleTriggerShower}
          isGujarati={isGujarati}
        />

        {/* Venue Location & Family Helplines */}
        <VenueLocation isGujarati={isGujarati} />
      </main>

      {/* Footer with Shlokas, WhatsApp Share & Family Regard */}
      <Footer
        onOpenKankotri={() => setIsKankotriOpen(true)}
        onTriggerShower={handleTriggerShower}
        isGujarati={isGujarati}
      />

      {/* Interactive 4-Page Digital Gujarati Kankotri Flip Card */}
      <DigitalKankotriModal
        isOpen={isKankotriOpen}
        onClose={() => setIsKankotriOpen(false)}
        isGujarati={isGujarati}
      />
    </div>
  );
}
