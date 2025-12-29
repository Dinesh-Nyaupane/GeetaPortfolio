import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Certifications from "./pages/Certifications";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    let alertCooldown = false;

    const showBlockedAlert = (message) => {
      if (alertCooldown) return;
      alertCooldown = true;

      Swal.fire({
        icon: "warning",
        title: "Action Restricted",
        text: message,
        timer: 2200,
        showConfirmButton: false,
        toast: true,
        position: "bottom-end",
      });

      setTimeout(() => {
        alertCooldown = false;
      }, 2500);
    };

    // Disable right click
    const disableContextMenu = (e) => {
      e.preventDefault();
      showBlockedAlert("Right-click is disabled to protect content.");
    };

    // Disable inspect shortcuts
    const disableShortcuts = (e) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        showBlockedAlert("Developer tools are disabled.");
      }

      // Ctrl + Shift + I / C / J
      if (
        e.ctrlKey &&
        e.shiftKey &&
        ["I", "C", "J"].includes(e.key.toUpperCase())
      ) {
        e.preventDefault();
        showBlockedAlert("Inspect tools are disabled.");
      }

      // Ctrl + U (View Source)
      if (e.ctrlKey && e.key.toUpperCase() === "U") {
        e.preventDefault();
        showBlockedAlert("Viewing source is disabled.");
      }
    };

    // Block PrintScreen (deterrent)
    const blockPrintScreen = (e) => {
      if (e.key === "PrintScreen") {
        navigator.clipboard.writeText("");
        showBlockedAlert("Screenshots are disabled on this website.");
      }
    };

    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("keydown", disableShortcuts);
    document.addEventListener("keyup", blockPrintScreen);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableShortcuts);
      document.removeEventListener("keyup", blockPrintScreen);
    };
  }, []);

  return (
    <Router>
      <div className="App relative min-h-screen flex flex-col bg-white text-gray-900 font-poppins">
        {/* Navbar */}
        <Navbar />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />

        {/* Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Scroll to top on route change */}
      <LocationLogger />
    </Router>
  );
}

function LocationLogger() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export default App;
