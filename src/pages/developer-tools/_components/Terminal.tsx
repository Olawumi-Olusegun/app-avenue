import React, { useEffect, useRef } from "react";
import { Terminal as XTerminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

interface TerminalProps {
  logs?: string[];
}

const Terminal: React.FC<TerminalProps> = ({ logs = [] }) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const term = useRef<XTerminal | null>(null);
  const fitAddon = useRef<FitAddon | null>(null);

  useEffect(() => {
    term.current = new XTerminal({
      convertEol: true,
      theme: {
        background: "#131719",
        foreground: "#FFFFFF",
      },
      fontSize: 14,
      rows: 20,
    });

    fitAddon.current = new FitAddon();
    term.current.loadAddon(fitAddon.current);
    if (terminalRef.current) {
      term.current.open(terminalRef.current);
      fitAddon.current.fit();
    }

    // Write initial logs if provided
    logs.forEach((log) => term.current?.writeln(log));

    return () => {
      term.current?.dispose();
    };
  }, []);

  useEffect(() => {
  if (logs.length && term.current) {
    term.current.clear();
    logs
      .filter((log): log is string => typeof log === "string")
      .forEach((log) => term.current?.writeln(log));
  }
}, [logs]);

  return <div ref={terminalRef} />;
};

export default Terminal;
