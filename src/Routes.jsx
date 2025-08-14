import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ReservationsBookingHub from "./pages/reservations-booking-hub";
import ContactLocationHub from "./pages/contact-location-hub";
import CulinaryStoryAbout from "./pages/culinary-story-about";
import InteractiveMenuExperience from "./pages/interactive-menu-experience";
import DiningExperienceGallery from "./pages/dining-experience-gallery";
import Homepage from "./pages/homepage";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<ContactLocationHub />} />

          <Route
            path="/contact-location-hub"
            element={<ContactLocationHub />}
          />
          <Route
            path="/culinary-story-about"
            element={<CulinaryStoryAbout />}
          />
          <Route
            path="/interactive-menu-experience"
            element={<InteractiveMenuExperience />}
          />
          <Route
            path="/dining-experience-gallery"
            element={<DiningExperienceGallery />}
          />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
