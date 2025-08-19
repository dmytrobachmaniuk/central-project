// Glass по Y
const LiquidGlassFilter = () => (
  <svg style={{ display: 'none' }}>
    <filter id="displacementFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.04"
        numOctaves="1" // поміняти шум
        result="fractalNoise"
      >
        <animate
          attributeName="baseFrequency"
          dur="10s"
          values="0.02;0.05;0.02"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feDisplacementMap
        in="SourceGraphic"
        in2="fractalNoise"
        scale="12"
        xChannelSelector="G"
        yChannelSelector="R"
      />
    </filter>
  </svg>
);

export default LiquidGlassFilter;
