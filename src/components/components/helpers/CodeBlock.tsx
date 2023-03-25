import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { cn } from "@/lib/utils";
import { CopyButton, FileTag } from "@/components/ui/Pre";

export default function CodeBlock({
  children,
  language,
  className,
}: {
  children: string;
  language: string;
  className?: string;
}) {
  return (
    <div className="relative">
      <FileTag
        fileExtension={language}
        className="absolute -top-2 left-6 bg-neutral-100 font-mono text-slate-700 shadow-inner dark:bg-neutral-900 dark:text-slate-400 dark:shadow-none"
      />
      <CopyButton
        code={children}
        className="absolute right-4 top-4 z-10 border-slate-400 bg-neutral-100 text-slate-700 dark:border-slate-400 dark:bg-neutral-900 dark:text-slate-400"
      />
      <CodeWrapper
        language={language}
        className={cn(
          "bg-neutral-100 font-mono text-slate-700 shadow-inner dark:bg-neutral-900  dark:text-slate-100 dark:shadow-none",
          className
        )}
      >
        {children}
      </CodeWrapper>
    </div>
  );
}

// SUPPORTING COMPONENTS

const CodeWrapper = ({
  children,
  className,
  language,
}: {
  children: string;
  className: string;
  language: string;
}) => {
  return (
    <SyntaxHighlighter
      useInlineStyles={false}
      showLineNumbers
      language={language}
      style={{}}
      className={cn(
        "overflow-scroll rounded-md pl-1 pr-9 pt-6 pb-3 text-sm md:text-base",
        className
      )}
    >
      {children}
    </SyntaxHighlighter>
  );
};
