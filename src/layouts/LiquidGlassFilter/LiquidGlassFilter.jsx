const LiquidGlassFilter = () => (
  <svg style={{ display: 'none' }}>
    <filter id="displacementFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.08"
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
        in2="turbulence"
        scale="35"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

export default LiquidGlassFilter;

//Glass по Y
// const LiquidGlassFilter = () => (
//   <svg style={{ display: 'none' }}>
//     <filter id="displacementFilter">
//       <feTurbulence
//         type="fractalNoise"
//         baseFrequency="0.08"
//         numOctaves="1" // поміняти шум
//         result="fractalNoise"
//       >
//         <animate
//           attributeName="baseFrequency"
//           dur="10s"
//           values="0.02;0.05;0.02"
//           repeatCount="indefinite"
//         />
//       </feTurbulence>
//       <feDisplacementMap
//         in="SourceGraphic"
//         in2="fractalNoise"
//         scale="25"
//         xChannelSelector="A"
//         yChannelSelector="R"
//       />
//     </filter>
//   </svg>
// );
//
// export default LiquidGlassFilter;
