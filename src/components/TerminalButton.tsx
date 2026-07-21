import "./styles/TerminalTheme.css";

interface TerminalButtonProps {
  positionClass: string;
  hotkey: string;
  label: string;
  sub: string;
  colorTheme?: "green" | "cyan" | "amber" | "magenta" | "purple";
  onClick: () => void;
}

const TerminalButton = ({
  positionClass,
  hotkey,
  label,
  sub,
  colorTheme = "green",
  onClick,
}: TerminalButtonProps) => {
  return (
    <button
      className={`terminal-btn-module ${positionClass} theme-${colorTheme}`}
      onClick={onClick}
      data-cursor="disable"
    >
      <div className="terminal-btn-header">
        <span className="terminal-btn-led"></span>
        <span className="terminal-btn-key">KEY_{hotkey}</span>
      </div>

      <div className="terminal-btn-main">
        <span className="terminal-btn-label">{label}</span>
        <span className="terminal-btn-sub">{sub}</span>
      </div>

      <div className="terminal-btn-corner-accent"></div>
    </button>
  );
};

export default TerminalButton;
