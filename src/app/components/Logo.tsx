export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="purpleCyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>

        <linearGradient id="cyanOrangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="50%" stopColor="#0891B2" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>

        <linearGradient id="orangePurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8C00" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>

        <radialGradient id="glowRadial">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
        </radialGradient>

        {/* Filters */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow ring */}
      <circle cx="100" cy="100" r="90" fill="url(#glowRadial)" opacity="0.2">
        <animate attributeName="r" values="85;95;85" dur="4s" repeatCount="indefinite"/>
      </circle>

      {/* Rotating hexagon rings */}
      <g opacity="0.3" filter="url(#glow)">
        <path
          d="M 100 40 L 145 65 L 145 115 L 100 140 L 55 115 L 55 65 Z"
          stroke="url(#purpleCyanGradient)"
          strokeWidth="1.5"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Central 3D Cube Structure */}
      <g filter="url(#strongGlow)">
        {/* Front face */}
        <path
          d="M 100 70 L 130 85 L 130 115 L 100 130 L 70 115 L 70 85 Z"
          fill="url(#purpleCyanGradient)"
          opacity="0.8"
        />

        {/* Top face */}
        <path
          d="M 100 70 L 130 85 L 115 77 L 85 77 L 70 85 Z"
          fill="url(#cyanOrangeGradient)"
          opacity="0.9"
        />

        {/* Right face */}
        <path
          d="M 130 85 L 130 115 L 115 107 L 115 77 Z"
          fill="url(#orangePurpleGradient)"
          opacity="0.7"
        />

        {/* Core glow */}
        <circle cx="100" cy="100" r="15" fill="#06B6D4" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* Neural network connections - Top */}
      <g stroke="url(#purpleCyanGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.7" filter="url(#glow)">
        <line x1="100" y1="70" x2="100" y2="40">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="100" y1="70" x2="75" y2="50">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.2s" repeatCount="indefinite"/>
        </line>
        <line x1="100" y1="70" x2="125" y2="50">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite"/>
        </line>
      </g>

      {/* Neural network connections - Bottom */}
      <g stroke="url(#cyanOrangeGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.7" filter="url(#glow)">
        <line x1="100" y1="130" x2="100" y2="160">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.3s" repeatCount="indefinite"/>
        </line>
        <line x1="100" y1="130" x2="75" y2="150">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/>
        </line>
        <line x1="100" y1="130" x2="125" y2="150">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.1s" repeatCount="indefinite"/>
        </line>
      </g>

      {/* Neural network connections - Sides */}
      <g stroke="url(#orangePurpleGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.7" filter="url(#glow)">
        <line x1="70" y1="100" x2="40" y2="100">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.6s" repeatCount="indefinite"/>
        </line>
        <line x1="130" y1="100" x2="160" y2="100">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.4s" repeatCount="indefinite"/>
        </line>
      </g>

      {/* Connection nodes */}
      <g filter="url(#glow)">
        {/* Top nodes */}
        <circle cx="100" cy="40" r="4" fill="#8B5CF6">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="75" cy="50" r="4" fill="#06B6D4">
          <animate attributeName="r" values="3;5;3" dur="2.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="125" cy="50" r="4" fill="#FF8C00">
          <animate attributeName="r" values="3;5;3" dur="2.4s" repeatCount="indefinite"/>
        </circle>

        {/* Bottom nodes */}
        <circle cx="100" cy="160" r="4" fill="#06B6D4">
          <animate attributeName="r" values="3;5;3" dur="2.3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="75" cy="150" r="4" fill="#FF8C00">
          <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="125" cy="150" r="4" fill="#8B5CF6">
          <animate attributeName="r" values="3;5;3" dur="2.1s" repeatCount="indefinite"/>
        </circle>

        {/* Side nodes */}
        <circle cx="40" cy="100" r="4" fill="#8B5CF6">
          <animate attributeName="r" values="3;5;3" dur="2.6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="160" cy="100" r="4" fill="#06B6D4">
          <animate attributeName="r" values="3;5;3" dur="2.4s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* Data particles flowing */}
      <g opacity="0.8">
        <circle cx="100" cy="70" r="2" fill="#06B6D4">
          <animate attributeName="cy" values="70;40;70" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="100" cy="130" r="2" fill="#FF8C00">
          <animate attributeName="cy" values="130;160;130" dur="3.2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;0" dur="3.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="70" cy="100" r="2" fill="#8B5CF6">
          <animate attributeName="cx" values="70;40;70" dur="2.8s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;0" dur="2.8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="130" cy="100" r="2" fill="#06B6D4">
          <animate attributeName="cx" values="130;160;130" dur="3.4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;0" dur="3.4s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* Corner accent brackets */}
      <g stroke="url(#purpleCyanGradient)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5">
        {/* Top left */}
        <path d="M 45 55 L 45 45 L 55 45"/>
        {/* Top right */}
        <path d="M 145 45 L 155 45 L 155 55"/>
        {/* Bottom left */}
        <path d="M 55 155 L 45 155 L 45 145"/>
        {/* Bottom right */}
        <path d="M 155 145 L 155 155 L 145 155"/>
      </g>

      {/* Digital binary code effect (subtle) */}
      <text x="25" y="30" fill="#06B6D4" opacity="0.3" fontSize="8" fontFamily="monospace">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite"/>
        101
      </text>
      <text x="165" y="30" fill="#8B5CF6" opacity="0.3" fontSize="8" fontFamily="monospace">
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2.8s" repeatCount="indefinite"/>
        110
      </text>
      <text x="25" y="175" fill="#FF8C00" opacity="0.3" fontSize="8" fontFamily="monospace">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3.2s" repeatCount="indefinite"/>
        011
      </text>
      <text x="165" y="175" fill="#06B6D4" opacity="0.3" fontSize="8" fontFamily="monospace">
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2.9s" repeatCount="indefinite"/>
        100
      </text>
    </svg>
  );
}
