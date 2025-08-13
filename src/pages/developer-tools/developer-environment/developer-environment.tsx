import CodeEditor from "@/pages/developer-tools/_components/CodeEditor"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bug, GitFork, TabletSmartphone } from "lucide-react"
import Terminal from "../_components/Terminal";
import { useEffect, useState } from "react";

const gulpScript = `// Increase max listeners for event emitters
require('events').EventEmitter.defaultMaxListeners = 100;

const gulp = require('gulp');
const util = require('./build/lib/util');
const path = require('path');
const compilation = require('./build/lib/compilation');

// Fast compile for development time
gulp.task('clean-client', util.rimraf('out'));
gulp.task('compile-client', ['clean-client'], compilation.compileTask('out', false));
gulp.task('watch-client', ['clean-client'], compilation.watchTask('out', false));

// Full compile, including nls and inline sources in sourcemaps, for build
gulp.task('clean-client-build', util.rimraf('out-build'));
gulp.task('compile-client-build', ['clean-client-build'], compilation.compileTask('out-build', true));
gulp.task('watch-client-build', ['clean-client-build'], compilation.watchTask('out-build', true));

// Default
gulp.task('default', ['compile']);

// All
gulp.task('clean', ['clean-client', 'clean-extensions']);
gulp.task('compile', ['monaco-typecheck', 'compile-client', 'compile-extensions']);
gulp.task('watch', [/* 'monaco-typecheck-watch', */ 'watch-client', 'watch-extensions']);

// All Build
gulp.task('clean-build', ['clean-client-build', 'clean-extensions-build']);
gulp.task('compile-build', ['compile-client-build', 'compile-extensions-build']);
gulp.task('watch-build', ['watch-client-build', 'watch-extensions-build']);

var ALL_EDITOR_TASKS = [
\t// Always defined tasks
\t'clean-client',
\t'compile-client',
\t'watch-client',
\t'clean-client-build',
\t'compile-client-build',
\t'watch-client-build',

\t// Editor tasks (defined in gulpfile.editor)
\t'clean-optimized-editor',
\t'optimize-editor',
\t'clean-minified-editor',
\t'minify-editor',
\t'clean-editor-distro',
\t'editor-distro',
\t'analyze-editor-distro',

\t// hygiene tasks
\t'tslint',
\t'hygiene',
];

var runningEditorTasks = process.argv.length > 2 && process.argv.slice(2).every(function (arg) { return (ALL_EDITOR_TASKS.indexOf(arg) !== -1); });

process.on('unhandledRejection', (reason, p) => {
\tconsole.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
\tprocess.exit(1);
});

if (runningEditorTasks) {
\trequire(\`./build/gulpfile.editor\`);
\trequire(\`./build/gulpfile.hygiene\`);
} else {
\t// Load all the gulpfiles only if running tasks other than the editor tasks
\tconst build = path.join(__dirname, 'build');
\trequire('glob').sync('gulpfile.*.js', { cwd: build })
\t\t.forEach(f => require(\`./build/\${f}\`));
}
`;


const DeveloperEnvironment = () => {

const [logs, setLogs] = useState<string[]>([]);

  // Simulate installation process
  useEffect(() => {
    const steps = [
      "Installing dependencies...",
      "Fetching packages...",
      "Compiling source files...",
      "Build complete!",
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < steps.length) {
        setLogs((prev) => [...prev, steps[index] ?? ""]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);


    
    return (
        <div className="grid grid-cols-[auto_1fr_auto] h-dvh -m-4 lg:-m-6">
            <div className="hidden lg:block h-full w-[290px] bg-[#1B1F22]">
                <div className="h-10 w-full flex items-center justify-start col-span-12 border-b border-b-primary-500">
                    <span className="text-sm p-2">Project Explorer</span>
                </div>
            </div>
            <div className=" bg-[#141719] grid grid-cols-1 grid-rows-[auto_1fr_auto]">
                <div className="h-10 p-2 w-full bg-[#1B1F22]">
                    <span className="text-sm">Project Explorer</span>
                </div>
                <div className="w-full flex-1">
                    <CodeEditor value={gulpScript} />
                </div>
                <div className="bg-[#141719] h-[200px] overflow-hidden border-t border-t-primary-500 flex flex-col">
                      <Tabs defaultValue="output" className="">
                            <TabsList className="bg-transparent p-0 m-0">
                            <TabsTrigger value="output" className="data-[state=active]:bg-transparent data-[state=active]:text-white text-xs rounded-none border-b data-[state=active]:border-b-amber-600 text-primary-300">OUTPUT</TabsTrigger>
                            <TabsTrigger value="terminal" className="data-[state=active]:bg-transparent data-[state=active]:text-white text-xs rounded-none border-b data-[state=active]:border-b-amber-600 text-primary-300">TERMINAL</TabsTrigger>
                            <TabsTrigger value="debug" className="data-[state=active]:bg-transparent data-[state=active]:text-white text-xs rounded-none border-b data-[state=active]:border-b-amber-600 text-primary-300">DEBUG</TabsTrigger>
                            </TabsList>
                            <TabsContent value="output" className="px-2">
                                <Terminal logs={logs} />
                            </TabsContent>
                            <TabsContent value="terminal" className="px-2">
                             <Terminal logs={logs} />
                            </TabsContent>
                            <TabsContent value="debug" className="px-2">
                                  <Terminal logs={logs} />
                            </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className="h-full w-[48px] flex flex-col items-center border-l border-l-primary-500 bg-[#1B1F22] text-primary-500">
                <Button className="bg-transparent size-10 rounded-sm text-primary-300 mt-10 p-0 hover:bg-primary-600">
                    <Bug size={30} />
                </Button>
                <Button className="bg-transparent size-10 rounded-sm text-primary-300 p-0 hover:bg-primary-600">
                    <GitFork size={30} />
                </Button>
                <Button className="bg-transparent size-10 rounded-sm text-primary-300 p-0 hover:bg-primary-600">
                    <TabletSmartphone size={30} />
                </Button>
            </div>
        </div>
    )
}

export default DeveloperEnvironment