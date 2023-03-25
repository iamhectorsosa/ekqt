import { useState } from "react";

/**
 * Writes the specified text string to the system clipboard
 * using `Clipboard.writeText()`
 * ref: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)
 */
export const useClipboard = ({ timeout = 2500 } = {}) => {
  const [state, setState] = useState<boolean | Error>(false);
  const [copyTimeout, setCopyTimeout] =
    useState<ReturnType<typeof setTimeout>>();

  function handleCopyResult(result: boolean | Error) {
    clearTimeout(copyTimeout);
    setCopyTimeout(setTimeout(() => setState(false), timeout));
    setState(result);
  }

  function copy(valueToCopy: string) {
    if ("clipboard" in navigator) {
      navigator.clipboard
        .writeText(valueToCopy)
        .then(() => handleCopyResult(true))
        .catch((err) => err instanceof Error && handleCopyResult(err));
    } else {
      handleCopyResult(
        new Error("`useClipboard`: Navigation Clipboard is not supported")
      );
    }
  }

  return { copy, state };
};
