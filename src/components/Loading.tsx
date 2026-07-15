import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (percent >= 100) {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1600);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded]);

  return (
    <>
      <div className={`loading-header ${clicked ? "loading-out" : ""}`}>
        <a href="/#" className="loader-title" data-cursor="disable">
          AKS
        </a>
        <div className="loader-status">
          {percent < 100 ? "COMPILING SYSTEM" : "SYSTEM READY"}
        </div>
      </div>
      
      <div className={`loading-screen ${clicked ? "loading-out" : ""}`}>
        <div className="loading-marquee-container">
          <Marquee speed={80}>
            <span className="marquee-text">SENIOR FULL STACK ENGINEER &nbsp;·&nbsp; STARTUP BUILDER &nbsp;·&nbsp; OPEN SOURCE CONTRIBUTOR &nbsp;·&nbsp; PRODUCT THINKER &nbsp;·&nbsp; </span>
          </Marquee>
        </div>

        <div className="loading-center">
          <div className="loading-percentage">
            {percent}<span>%</span>
          </div>
          <div className="loading-progress-bar">
            <div className="loading-progress-fill" style={{ width: `${percent}%` }}></div>
          </div>
        </div>

        <div className="loading-footer">
          <div className="footer-item">© {new Date().getFullYear()} ALOK KUMAR SINGH</div>
          <div className="footer-item">BUILDING SERIOUS PRODUCTS</div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
