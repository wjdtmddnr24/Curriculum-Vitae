import { ToggleDarkmodeButton } from "./toggle-darkmode-button/ToggleDarkmodeButton";

export const FloatingActionButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-3">
      <div>
        <ToggleDarkmodeButton />
      </div>
    </div>
  );
};
