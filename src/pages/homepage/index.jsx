import React from "react";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import SeasonalHighlights from "./components/SeasonalHighlights";
import StoryPreview from "./components/StoryPreview";
import ReservationWidget from "./components/ReservationWidget";
import CommunityGallery from "./components/CommunityGallery";
import PressQuotes from "./components/PressQuotes";
import Footer from "./components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <SeasonalHighlights />
        <StoryPreview />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
