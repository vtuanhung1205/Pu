import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // loads tsparticles-slim
import { loadHeartShape } from "@tsparticles/shape-heart"; // loads the heart shape

// Import the necessary types
import type { IOptions, RecursivePartial } from "@tsparticles/engine";

export default function AnimatedBackground() {
  const [init, setInit] = useState(false);

  // This effect will run only once, initializing the particle engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Here you can load the presets and shapes you want to use
      await loadSlim(engine);
      await loadHeartShape(engine);
    }).then(() => {
      // Once the engine is initialized, set the state to true
      setInit(true);
    });
  }, []);

  // Memoize the options object to prevent unnecessary re-renders
  const particleOptions: RecursivePartial<IOptions> = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        number: {
          value: 40,
        },
        color: {
          value: ['#ffb6c1', '#ffffff', '#f08080'],
        },
        shape: {
          type: 'heart',
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
        },
        size: {
          value: { min: 5, max: 15 },
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'top',
          straight: false,
          outModes: {
            default: 'out',
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
        },
      },
      background: {
        color: {
          value: '#fff0f5',
        },
      },
    }),
    [],
  );

  // Render the Particles component only after the engine is initialized
  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={particleOptions}
      />
    );
  }

  // While initializing, you can return null or a loading spinner
  return <></>;
}