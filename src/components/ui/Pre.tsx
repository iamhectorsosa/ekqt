import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  useCallback,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { CopyIcon, ErrorIcon, SuccessIcon } from "../components/icons";
import { cn } from "@/lib/utils";
import { useClipboard } from "@/hooks";

export default function Pre({
  children,
  className: languageClass,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const [code, setCode] = useState<string>("");

  return (
    <div className="pre relative mt-9 mb-3">
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

export const FileTag = ({
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

export const CopyButton = ({
  code,
  className,
  children,
}: {
  code: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  const clipboard = useClipboard();

  return (
    <button
      onClick={() => clipboard.copy(code)}
      className={cn(
        "flex w-fit items-center justify-center gap-2 rounded border p-2 transition-transform hover:scale-105 active:scale-95",
        className
      )}
    >
      {children}
      {clipboard.state === "READY" ? (
        <CopyIcon />
      ) : clipboard.state === "SUCCESS" ? (
        <SuccessIcon className="text-green-500" />
      ) : (
        <ErrorIcon className="text-red-500" />
      )}
    </button>
  );
};
