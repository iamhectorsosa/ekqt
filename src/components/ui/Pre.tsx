import {
  ComponentPropsWithoutRef,
  forwardRef,
  useCallback,
  useState,
} from "react";
import { useClipboard } from "@/lib/hooks";
import { twMerge } from "tailwind-merge";

export default function Pre({
  children,
  className: languageClass,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const [code, setCode] = useState<string>("");

  return (
    <div className="pre relative mt-6">
      <FileTag
        fileExtension={languageClass.replace("language-", "")}
        className="absolute -top-2 left-6 bg-neutral-100 font-mono text-slate-700 shadow-inner dark:bg-neutral-900 dark:text-slate-400 dark:shadow-none"
      />
      <CopyButton
        code={code}
        className="absolute right-4 top-4 z-10 border-slate-400 bg-neutral-100 text-slate-700 dark:border-slate-400 dark:bg-neutral-900 dark:text-slate-400"
      />
      <CustomPre
        ref={useCallback((node: HTMLPreElement) => {
          node?.textContent && setCode(node.textContent);
        }, [])}
        className={`bg-neutral-100 font-mono text-slate-700 shadow-inner dark:bg-neutral-900   dark:text-slate-100 dark:shadow-none ${languageClass}`}
      >
        {children}
      </CustomPre>
    </div>
  );
}

// SUPPORTING COMPONENTS

const CustomPre = forwardRef<HTMLPreElement, ComponentPropsWithoutRef<"pre">>(
  (props, ref) => {
    const { children, className, ...otherProps } = props;
    return (
      <pre
        className={`${twMerge(
          "overflow-scroll rounded-md px-4 pt-5 pb-3 text-sm md:px-5 md:pt-6 md:pb-4 md:text-base",
          className
        )}`}
        ref={ref}
        {...otherProps}
      >
        {children}
      </pre>
    );
  }
);

CustomPre.displayName = "CustomPre";

const FileTag = ({
  fileExtension,
  className,
}: {
  fileExtension: string;
  className?: string;
}) => {
  return (
    <span
      className={`${twMerge(
        "rounded border border-transparent px-1 text-sm font-semibold tracking-tighter",
        className
      )}`}
    >
      .{fileExtension}
    </span>
  );
};

const CopyButton = ({
  code,
  className,
}: {
  code: string;
  className?: string;
}) => {
  const clipboard = useClipboard();

  return (
    <button
      onClick={() => clipboard.copy(code)}
      className={`${twMerge(
        "rounded border p-2 transition-transform hover:scale-105 active:scale-95",
        className
      )}`}
    >
      {clipboard.copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="green"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
      )}
    </button>
  );
};
