export type IconName =
  | "arrow-up-right"
  | "arrow-right"
  | "arrow-up"
  | "mail"
  | "github"
  | "linkedin"
  | "copy"
  | "check"
  | "menu"
  | "close";

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "arrow-up-right": return <svg {...common}><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>;
    case "arrow-right": return <svg {...common}><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></svg>;
    case "arrow-up": return <svg {...common}><path d="M12 20V5" /><path d="m6 11 6-6 6 6" /></svg>;
    case "mail": return <svg {...common}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.6 5.5a2.6 2.6 0 0 1-2.8 0L2 7" /></svg>;
    case "github": return <svg {...common}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.1S18 0 15 2a13.4 13.4 0 0 0-6 0C6 0 4.8.1 4.8.1A5 5 0 0 0 4.7 4 5.4 5.4 0 0 0 3.3 7.5c0 5.4 3.4 6.6 6.7 7a4.8 4.8 0 0 0-1 3.5v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></svg>;
    case "linkedin": return <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect width="4" height="12" x="2" y="9" rx="1" /><path d="M4 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg>;
    case "copy": return <svg {...common}><rect width="13" height="13" x="8" y="8" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg>;
    case "check": return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
    case "menu": return <svg {...common}><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
    case "close": return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
    default: return null;
  }
}
