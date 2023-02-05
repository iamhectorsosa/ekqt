import Anchor from "../UI/Anchor";

export default function Preview() {
  return (
    <div className="fixed top-0 z-10 flex w-full justify-between bg-slate-300 py-2 px-4 dark:bg-slate-700">
      <p className="text-lg font-bold">Preview Mode is enabled</p>
      <Anchor variant="nav" href="/api/exit-preview">
        Exit Preview
      </Anchor>
    </div>
  );
}
