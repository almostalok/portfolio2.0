import { ReactNode, useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./styles/TerminalTheme.css";

interface SectionModalProps {
  isOpen: boolean;
  title: string;
  commandName?: string;
  onClose: () => void;
  children: ReactNode;
}

const SectionModal = ({
  isOpen,
  title,
  commandName = "exec",
  onClose,
  children,
}: SectionModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="terminal-window-overlay" onClick={onClose}>
      <div
        className="terminal-window-frame"
        onClick={(e) => e.stopPropagation()}
      >
        {/* UNIX Window Title Bar */}
        <div className="terminal-titlebar">
          <div className="terminal-window-dots">
            <span className="dot dot-close" onClick={onClose} title="Close window"></span>
            <span className="dot dot-min"></span>
            <span className="dot dot-max"></span>
          </div>

          <div className="terminal-title-text">
            zsh — alok@portfolio: ~/sys/{commandName.toLowerCase()} — {title}
          </div>

          <button
            className="terminal-close-action"
            onClick={onClose}
            aria-label="Close terminal window"
            data-cursor="disable"
          >
            <MdClose />
          </button>
        </div>

        {/* Command Execution Sub-Header */}
        <div className="terminal-cmd-banner">
          <div className="cmd-prompt-line">
            <span className="t-green">➜</span>{" "}
            <span className="t-cyan">~/portfolio</span>{" "}
            <span className="t-yellow">git:(main)</span>{" "}
            <span className="t-white">./run_{commandName.toLowerCase()}.sh</span>
          </div>
          <div className="cmd-status-line">
            [PROCESS: COMPLETED] // MODE: {title.toUpperCase()} // PRESS ESC TO EXIT
          </div>
        </div>

        {/* Window Body Content */}
        <div className="terminal-window-body">{children}</div>
      </div>
    </div>
  );
};

export default SectionModal;
