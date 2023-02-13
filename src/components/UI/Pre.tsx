import { useCallback, useState } from "react";

export default function Pre({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const [supportsClipboard, setSupportsClipboard] = useState(false);
  const [clipboardState, setClipboardState] = useState(false);
  const [code, setCode] = useState<string>("");

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setClipboardState(true);
      setTimeout(() => setClipboardState(false), 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      ref={useCallback(() => {
        navigator.clipboard && setSupportsClipboard(true);
      }, [])}
      className="relative"
    >
      {supportsClipboard && (
        <button
          onClick={() => copyToClipboard(code)}
          className="absolute right-4 top-4 z-10 rounded border border-gray-500 bg-[#1d1f21] p-2 text-gray-400 transition-transform hover:scale-105 active:scale-95"
        >
          {clipboardState ? (
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
      )}
      <pre
        ref={useCallback((node: HTMLPreElement) => {
          navigator.clipboard && node?.textContent && setCode(node.textContent);
        }, [])}
        className={className}
      >
        {children}
      </pre>
    </div>
  );
}