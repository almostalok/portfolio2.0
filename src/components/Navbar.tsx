import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import { ModalType } from "./MainContainer";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

interface NavbarProps {
  onOpenModal?: (modal: ModalType) => void;
}

const Navbar = ({ onOpenModal }: NavbarProps) => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: false,
      infinite: false,
    });

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Clean up
    return () => {
      lenis?.destroy();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, modalType: ModalType) => {
    e.preventDefault();
    if (onOpenModal) {
      onOpenModal(modalType);
    }
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          AKS
        </a>
        <a
          href="mailto:almostalok@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          almostalok@gmail.com
        </a>
        <ul>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a href="#work" onClick={(e) => handleNavClick(e, "work")}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a href="#almostfun" onClick={(e) => handleNavClick(e, "almostfun")}>
              <HoverLinks text="ALMOST FUN" />
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
