import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ease } from "./lib/motion";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollTop from "./components/layout/ScrollTop";
import ScrollProgress from "./components/ui/ScrollProgress";

import Home from "./pages/Home";
import Lawyers from "./pages/Lawyers";
import LawyerDetail from "./pages/LawyerDetail";
import Areas from "./pages/Areas";
import AreaDetail from "./pages/AreaDetail";
import Packages from "./pages/Packages";
import PackageDetail from "./pages/PackageDetail";
import Assistant from "./pages/Assistant";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Resources from "./pages/Resources";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const pageMotion = {
  initial: { opacity: 0, y: 18, scale: 0.995 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.22 } },
};

function Page({ children }) {
  return (
    <motion.div
      variants={pageMotion}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

// Dashboard sections and appointment ids share one key, so only real page
// changes play the transition.
function transitionKey(pathname) {
  if (pathname.startsWith("/dashboard")) return "dashboard";
  if (pathname.startsWith("/appointments")) return "appointments";
  return pathname;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={transitionKey(location.pathname)}>
        <Route path="/" element={<Page><Home /></Page>} />

        <Route path="/lawyers" element={<Page><Lawyers /></Page>} />
        <Route path="/lawyers/:id" element={<Page><LawyerDetail /></Page>} />

        <Route path="/practice-areas" element={<Page><Areas /></Page>} />
        <Route path="/practice-areas/:slug" element={<Page><AreaDetail /></Page>} />

        <Route path="/packages" element={<Page><Packages /></Page>} />
        <Route path="/packages/:slug" element={<Page><PackageDetail /></Page>} />

        <Route path="/assistant" element={<Page><Assistant /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />

        <Route path="/appointments" element={<Page><Appointment /></Page>} />
        <Route path="/appointments/:id" element={<Page><Appointment /></Page>} />

        <Route path="/contact" element={<Page><Contact /></Page>} />
        <Route path="/faq" element={<Page><Faq /></Page>} />
        <Route path="/resources" element={<Page><Resources /></Page>} />

        <Route path="/dashboard" element={<Page><Dashboard /></Page>} />
        <Route path="/dashboard/:section" element={<Page><Dashboard /></Page>} />

        <Route path="*" element={<Page><NotFound /></Page>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <ScrollTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}