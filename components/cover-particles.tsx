"use client"

import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const CoverParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    init && (
      <div className="fixed inset-0 z-0">
        <Particles
          id="tsparticles"
          options={{
            background: { color: "#0a0a0a" },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
              },
              modes: {
                push: { quantity: 5 },
                repulse: { distance: 200, duration: 0.6 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                outModes: { default: "out" },
              },
              number: { value: 100, density: { enable: true } },
              opacity: {
                value: { min: 0.3, max: 0.8 },
                animation: { enable: true, speed: 0.5, sync: false },
              },
              shape: { type: "star" },
              size: {
                value: { min: 1, max: 3 },
                animation: { enable: true, speed: 2, sync: false },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};
