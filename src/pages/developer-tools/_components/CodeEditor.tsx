import React from "react";
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  value: string;
  language?: string;
  onChange?: (value: string | undefined) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  value,
  language = "javascript",
  onChange,
}) => {

    function handleEditorMount(_editor: any, monaco: any) {
    monaco.editor.defineTheme("custom-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#131719",
      },
    });
    monaco.editor.setTheme("custom-dark");
  }

  return (
    <>
    <Editor
        // height="100%"
        // className="h-[calc(100%_-_200px)]"
        defaultLanguage={language}
        value={value}
        onChange={onChange}
         onMount={handleEditorMount}
        theme="vs-dark"
        options={{
          fontSize: 12,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
        }}
      />
    </>
  );
};

export default CodeEditor;
