import { useEffect, useRef } from "react";

interface Props {
  onIntersect: () => void;
  enabled: boolean;
  root?: React.RefObject<HTMLElement>;
}
export const InfiniteScrollObserver = ({ onIntersect, enabled }: Props) => {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [enabled, onIntersect]);

  return <div ref={observerRef} style={{ height: "20px" }} />;
};
