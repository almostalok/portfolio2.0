import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import SocialIcons from "./SocialIcons";
import Work from "./Work";
import AlmostFunSection from "./AlmostFunSection";
import SectionModal from "./SectionModal";
import TerminalHUD from "./TerminalHUD";
import TerminalButton from "./TerminalButton";
import setSplitText from "./utils/splitText";
import "./styles/TerminalTheme.css";

export type ModalType = "about" | "work" | "projects" | "contact" | "almostfun" | null;

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [isMobile] = useState<boolean>(window.innerWidth <= 768);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  // Keyboard hotkey listeners for keys 1, 2, 3, 4, 5
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger hotkeys if typing inside input fields or textareas
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      switch (e.key) {
        case "1":
        case "F1":
          e.preventDefault();
          setActiveModal((prev) => (prev === "about" ? null : "about"));
          break;
        case "2":
        case "F2":
          e.preventDefault();
          setActiveModal((prev) => (prev === "work" ? null : "work"));
          break;
        case "3":
        case "F3":
          e.preventDefault();
          setActiveModal((prev) => (prev === "projects" ? null : "projects"));
          break;
        case "4":
        case "F4":
          e.preventDefault();
          setActiveModal((prev) => (prev === "contact" ? null : "contact"));
          break;
        case "5":
        case "F5":
          e.preventDefault();
          setActiveModal((prev) => (prev === "almostfun" ? null : "almostfun"));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      
      {/* Sci-Fi Scanlines Overlay */}
      <div className="terminal-scanlines"></div>

      {/* Futuristic Telemetry HUD */}
      <TerminalHUD />

      <SocialIcons />

      {/* Main Hero Viewport Focus (3D Canvas + Intro) */}
      <Landing>
        {isDesktopView && !isMobile && children}
      </Landing>

      {/* 5 Interactive Cyberpunk Terminal Buttons */}
      <div className="terminal-btn-wrapper">
        {/* Top-Left: About */}
        <TerminalButton
          positionClass="btn-top-left"
          hotkey="1"
          label="> ABOUT_SYS"
          sub="BIO & PHILOSOPHY"
          colorTheme="green"
          onClick={() => setActiveModal("about")}
        />

        {/* Top-Right: Work */}
        <TerminalButton
          positionClass="btn-top-right"
          hotkey="2"
          label="> WORK_LOGS"
          sub="TIMELINE & ROLES"
          colorTheme="cyan"
          onClick={() => setActiveModal("work")}
        />

        {/* Bottom-Left: Projects */}
        <TerminalButton
          positionClass="btn-bottom-left"
          hotkey="3"
          label="> PROJECTS_DB"
          sub="FEATURED BUILDS"
          colorTheme="amber"
          onClick={() => setActiveModal("projects")}
        />

        {/* Bottom-Right: Contact */}
        <TerminalButton
          positionClass="btn-bottom-right"
          hotkey="4"
          label="> CONNECT_NET"
          sub="EMAIL & CHANNELS"
          colorTheme="magenta"
          onClick={() => setActiveModal("contact")}
        />

        {/* Bottom-Center: Almost Fun */}
        <TerminalButton
          positionClass="btn-bottom-center"
          hotkey="5"
          label="> ALMOST_FUN.exe"
          sub="CHESS & AI PLAYGROUND"
          colorTheme="purple"
          onClick={() => setActiveModal("almostfun")}
        />
      </div>

      {/* Unix Hacker Terminal Window Overlays */}
      <SectionModal
        isOpen={activeModal === "about"}
        title="ABOUT ALOK KUMAR SINGH"
        commandName="about_sys"
        onClose={() => setActiveModal(null)}
      >
        <About />
      </SectionModal>

      <SectionModal
        isOpen={activeModal === "work"}
        title="PROFESSIONAL EXPERIENCE"
        commandName="work_logs"
        onClose={() => setActiveModal(null)}
      >
        <Career />
      </SectionModal>

      <SectionModal
        isOpen={activeModal === "projects"}
        title="FEATURED PROJECTS"
        commandName="projects_db"
        onClose={() => setActiveModal(null)}
      >
        <Work />
      </SectionModal>

      <SectionModal
        isOpen={activeModal === "contact"}
        title="GET IN TOUCH"
        commandName="connect_net"
        onClose={() => setActiveModal(null)}
      >
        <Contact />
      </SectionModal>

      <SectionModal
        isOpen={activeModal === "almostfun"}
        title="ALMOST FUN PLAYGROUND"
        commandName="almost_fun"
        onClose={() => setActiveModal(null)}
      >
        <AlmostFunSection />
      </SectionModal>
    </div>
  );
};

export default MainContainer;
