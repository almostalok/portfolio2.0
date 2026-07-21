import { useEffect, useState } from "react";
import "./styles/TerminalTheme.css";

const TerminalHUD = () => {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-hud-top">
      <div className="hud-left">
        <span className="prompt-user">alok@system</span>
        <span className="prompt-sep">:</span>
        <span className="prompt-path">~</span>
        <span className="prompt-char">$</span>
        <span className="prompt-cmd">sys --status active</span>
      </div>

      <div className="hud-center">
        <span className="hud-badge pulse-dot">SYS: ONLINE</span>
        <span className="hud-divider">|</span>
        <span className="hud-stat">LATENCY: 14ms</span>
        <span className="hud-divider">|</span>
        <span className="hud-time">{timeStr || "14:28:00"} IST</span>
      </div>

      <div className="hud-right">
        <span className="hud-brand">AKS_OS v2.5</span>
      </div>
    </div>
  );
};

export default TerminalHUD;
