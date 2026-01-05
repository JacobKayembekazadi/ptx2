import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AGGeologyExplainer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [lerpedScroll, setLerpedScroll] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setLerpedScroll((prev) => prev + (latest - prev) * 0.1);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const { ref: viewRef, inView } = useInView({
    threshold: 0.1,
  });

  const scale = useTransform(lerpedScroll, [0, 1], [1, 1.5]);
  const overburdenOpacity = useTransform(lerpedScroll, [0.1, 0.2], [1, 0]);
  const bedrockOpacity = useTransform(lerpedScroll, [0.3, 0.4], [1, 0]);
  const copperOpacity = useTransform(lerpedScroll, [0.5, 0.6], [0, 1]);
  const goldOpacity = useTransform(lerpedScroll, [0.7, 0.8], [0, 1]);

  const text1Opacity = useTransform(lerpedScroll, [0.05, 0.15, 0.25, 0.35], [0, 1, 1, 0]);
  const text2Opacity = useTransform(lerpedScroll, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const text3Opacity = useTransform(lerpedScroll, [0.75, 0.85], [0, 1]);

  return (
    <div ref={viewRef}>
      {inView && (
        <div ref={containerRef} className="relative h-[300vh] bg-gray-900 text-white">
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div style={{ scale }}>
                <svg
                  width="500"
                  height="500"
                  viewBox="0 0 500 500"
                  className="transition-transform duration-500 ease-in-out"
                >
                  {/* Surface */}
                  <path d="M0 100 H500" stroke="#4A5568" strokeWidth="2" />
                  <text x="250" y="90" textAnchor="middle" fill="white">
                    The Surface
                  </text>

                  {/* Overburden */}
                  <motion.rect
                    x="0"
                    y="100"
                    width="500"
                    height="100"
                    fill="#795548"
                    style={{ opacity: overburdenOpacity }}
                  />

                  {/* Bedrock */}
                  <motion.rect
                    x="0"
                    y="200"
                    width="500"
                    height="200"
                    fill="#A9A9A9"
                    style={{ opacity: bedrockOpacity }}
                  />

                  {/* Copper-Nickel */}
                  <motion.path
                    d="M100 250 Q150 200 200 250 T300 250"
                    stroke="#FF8C00"
                    strokeWidth="5"
                    fill="none"
                    style={{ opacity: copperOpacity }}
                  />

                  {/* Gold */}
                  <motion.circle
                    cx="350"
                    cy="350"
                    r="20"
                    fill="#FFD700"
                    style={{ opacity: goldOpacity }}
                  />
                </svg>
              </motion.div>
            </div>

            <div className="absolute right-10 w-1/4 space-y-8">
              <motion.div style={{ opacity: text1Opacity }}>
                <h3 className="text-2xl font-bold">The Green Revolution Starts Here</h3>
                <p>Everything we need for the green energy revolution starts here, deep within the earth.</p>
              </motion.div>
              <motion.div style={{ opacity: text2Opacity }}>
                <h3 className="text-2xl font-bold">Copper: The Nervous System of EVs</h3>
                <p>Copper is the nervous system of EVs, essential for wiring and power transmission.</p>
              </motion.div>
              <motion.div style={{ opacity: text3Opacity }}>
                <h3 className="text-2xl font-bold">Nickel: The Heartbeat of Modern Batteries</h3>
                <p>Nickel is the heartbeat of modern batteries, providing the energy density we need.</p>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AGGeologyExplainer;
