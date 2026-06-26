interface LogoMarkProps {
  className?: string;
}

/**
 * Brand logo: a stylised monitor/display showing the bold initials "NPS"
 * (Nidubrolu Pavan Sandeep), rendered with the site's accent gradient.
 */
export function LogoMark({ className = '' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 56 46"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="NPS logo"
    >
      <defs>
        <linearGradient
          id="npsGrad"
          x1="0"
          y1="0"
          x2="56"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#a78bff" />
          <stop offset="0.5" stopColor="#7c5cff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      {/* Monitor screen */}
      <rect
        x="2.25"
        y="2.25"
        width="51.5"
        height="31.5"
        rx="7"
        stroke="url(#npsGrad)"
        strokeWidth="2.5"
        fill="rgba(124,92,255,0.10)"
      />

      {/* Initials on the display */}
      <text
        x="28"
        y="24"
        textAnchor="middle"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize="15.5"
        fontWeight="700"
        letterSpacing="0.6"
        fill="url(#npsGrad)"
      >
        NPS
      </text>

      {/* Stand neck + base */}
      <path d="M24 34 H32 L34 39.5 H22 Z" fill="url(#npsGrad)" />
      <rect x="15" y="40.5" width="26" height="3" rx="1.5" fill="url(#npsGrad)" />
    </svg>
  );
}
