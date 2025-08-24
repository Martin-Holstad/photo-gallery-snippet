import { type RefObject, useEffect } from "react";

type Events = MouseEvent | TouchEvent;

type UseOnClickOutsideArgs = {
  ref: RefObject<HTMLElement | null>;
  handler: (event: Events) => void;
};

export default function useOnClickOutside({ ref, handler }: UseOnClickOutsideArgs): void {
  useEffect(() => {
    const listener = (event: Events) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
