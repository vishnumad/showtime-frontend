import { AnimatePresence } from "moti";
import { FullWindowOverlay } from "react-native-screens";

import { useSafeAreaInsets } from "@showtime-xyz/universal.safe-area";

import { SAFE_AREA_TOP, Toast } from "./toast";

type ToastProps = {
  show: boolean;
  render?: JSX.Element | null;
  message?: string;
  hide: () => void;
};

export const ToastContainer = ({ show, render, message, hide }: ToastProps) => {
  const { top } = useSafeAreaInsets();
  return (
    <AnimatePresence>
      {show && (
        <FullWindowOverlay
          style={{
            position: "absolute",
            width: "100%",
            top: top === 0 ? SAFE_AREA_TOP : top,
          }}
        >
          <Toast render={render} message={message} hide={hide} />
        </FullWindowOverlay>
      )}
    </AnimatePresence>
  );
};
