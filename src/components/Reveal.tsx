import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

export function Reveal({ children, className = "", delay = "", style }: { children: ReactNode; className?: string; delay?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${delay} ${className}`} style={style}>{children}</div>;
}
