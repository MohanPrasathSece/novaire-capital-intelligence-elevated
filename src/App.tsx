import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./components/site/AuthContext";
import { AuthModals } from "./components/site/AuthModals";
import { Toaster } from "sonner";

// Import Pages
import { LandingPage } from "./pages/LandingPage";
import { CapitalPortal } from "./pages/CapitalPortal";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";

// ScrollToTop component that forces scroll to top of window on route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      // Need a small timeout to ensure the element is in the DOM when navigating from another page
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/capital" element={<CapitalPortal />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
        <AuthModals />
        <Toaster theme="dark" position="bottom-right" closeButton />
      </Router>
    </AuthProvider>
  );
}
