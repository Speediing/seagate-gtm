import type { HeroJobIcon } from "@/data/types";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

export function JobIcon({ kind }: { kind: HeroJobIcon }) {
  switch (kind) {
    case "cart":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M3.5 5h2.2l2 10.2h9.6L19.5 8H7.1" {...stroke} />
          <circle cx="9" cy="19" r="1.3" {...stroke} />
          <circle cx="16.5" cy="19" r="1.3" {...stroke} />
        </svg>
      );
    case "lake":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <ellipse cx="12" cy="6.5" rx="7" ry="2.6" {...stroke} />
          <path d="M5 6.5v11c0 1.45 3.15 2.6 7 2.6s7-1.15 7-2.6v-11" {...stroke} />
          <path d="M5 12c0 1.45 3.15 2.6 7 2.6s7-1.15 7-2.6" {...stroke} />
        </svg>
      );
    case "finops":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M4 18h16" {...stroke} />
          <path d="M6 15V10M10.5 15V6.5M15 15v-5M19.5 15V8" {...stroke} />
        </svg>
      );
    case "busywork":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M5 7h14M5 12h9M5 17h6" {...stroke} />
          <path d="m16 16 2 2 3.5-3.5" {...stroke} />
        </svg>
      );
    case "haggle":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M4 12.5 8.5 8l3 3 4-4" {...stroke} />
          <path d="M12.5 7h3v3" {...stroke} />
          <path d="M4 18h16" {...stroke} />
        </svg>
      );
    case "campaign":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="7.5" {...stroke} />
          <circle cx="12" cy="12" r="3" {...stroke} />
          <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" {...stroke} />
        </svg>
      );
    case "ads":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M4 14.5 15 6l2 3.5-11 8.5z" {...stroke} />
          <path d="m7.5 17 1.2 3.2M15 6l3-1.6 2 3.5-3 1.6" {...stroke} />
        </svg>
      );
    case "finance":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4.5" width="16" height="15" rx="1.8" {...stroke} />
          <path d="M4 9.5h16M9.5 9.5v10M4 14.5h16" {...stroke} />
        </svg>
      );
    default:
      return null;
  }
}

export function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="m14.5 6-6 6 6 6" {...stroke} strokeWidth={1.8} />
    </svg>
  );
}

export function DesktopIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="4" y="5" width="16" height="11" rx="1.8" {...stroke} />
      <path d="M9 20h6M12 16v4" {...stroke} />
    </svg>
  );
}

export function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M12 5v14M5 12h14" {...stroke} />
    </svg>
  );
}

export function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="9" y="3.5" width="6" height="11" rx="3" {...stroke} strokeWidth={1.6} />
      <path d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v3M9 20h6" {...stroke} strokeWidth={1.6} />
    </svg>
  );
}

export function BotMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 4.5c.65 4.15 2.85 6.35 7 7-.4.07-.78.15-1.14.25-3.35.92-5.02 3.1-5.86 6.75-.84-3.65-2.51-5.83-5.86-6.75-.36-.1-.74-.18-1.14-.25 4.15-.65 6.35-2.85 7-7Z"
        fill="currentColor"
      />
    </svg>
  );
}
