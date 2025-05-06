import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const COLORS_TOP = ["#000000"];

export const AboutUs = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(300% 125% at 50% 100%, #020617 40%, ${color})`;

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className="relative min-h-screen overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
        >
            {/* Starfield Background */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Stars radius={100} count={2500} factor={4} fade speed={3} />
                </Canvas>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-16">

                {/* Block 1 */}
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="rounded-xl overflow-hidden w-full md:w-1/2">
                        <img
                            src="src/assets/rajagiri-about.jpg"
                            alt="Innovation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left md:w-1/2">
                        <h2 className="text-3xl font-bold mb-3">Rajagiri ACM Student Chapter</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            A passionate tech community where ideas spark, skills grow, and futures are built. Join us as we explore, create, and lead — together.
                        </p>
                    </div>
                </div>

                {/* Block 2 */}
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                    <div className="rounded-xl overflow-hidden w-full md:w-1/2">
                        <img
                            src="src/assets/team-about.jpg"
                            alt="Teamwork"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left md:w-1/2">
                        <h2 className="text-3xl font-bold mb-3">Together, We Build the Future</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Collaboration is at the heart of everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
