import { AnimatePresence, LayoutGroup, motion, Variants } from "framer-motion";
import { useFullPageStore } from "../fullpage/useFullPageStore";
import { ScrollUpButton } from "./scroll-up-button/ScrollUpButton";
import { ToggleDarkmodeButton } from "./toggle-darkmode-button/ToggleDarkmodeButton";

const variants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    display: "block",
  },
  showing: {
    display: "block",
    opacity: 1,
    scale: 1,
    pointerEvents: "all",
    transition: {
      duration: 0.2,
    },
    transitionEnd: {},
  },
  hideing: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      opacity: 0,
      scale: 0,
      display: "none",
    },
  },
  hidden: {
    display: "none",
    opacity: 0,
    scale: 0,
  },
};

export const FloatingActionButtons = () => {
  const pageIndex = useFullPageStore((state) => state.pageIndex);

  return (
    <motion.div
      className="fixed bottom-8 right-8 flex flex-col gap-3"
      layout
      initial="hidden"
      animate={pageIndex !== 0 ? "showing" : "hideing"}
    >
      <motion.div layout variants={variants}>
        <ScrollUpButton />
      </motion.div>
      <motion.div
        layout
        transition={{
          delay: 0.2,
          duration: 0.2,
          ease: "linear",
        }}
      >
        <ToggleDarkmodeButton />
      </motion.div>
    </motion.div>
  );
};
