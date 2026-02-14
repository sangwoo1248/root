import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProgramsPage from "./pages/ProgramsPage";
import BookingPage from "./pages/BookingPage";
import InfoPage from "./pages/InfoPage";
import ContentsPage from "./pages/ContentsPage";
import ProjectPage from "./pages/ProjectPage";
import CustomerPage from "./pages/CustomerPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/contents" element={<ContentsPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/customer" element={<CustomerPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
