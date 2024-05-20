"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/CanvasRevealEffect";
import BolderMagicBtn from "./ui/BolderMagicBtn";

export function Approach() {
    return (
        <div className="py-20" id='approach'>
            <h1 className="heading">
                My {" "}
                <span className="text-purple">Approach</span>
            </h1>
            <div className="py-20 flex flex-col lg:flex-row items-center justify-between bg-transparent w-full gap-4 mx-auto">
                <Card description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements." icon={<BolderMagicBtn title="Planning & Strategy"/>}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way." icon={<BolderMagicBtn title="Development & Progress Update"/>}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up." icon={<BolderMagicBtn title="Development & Launch"/>}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[145, 211, 122]]}
                    />
                </Card>
            </div>
        </div>
    );
}

const Card = ({
    description,
    icon,
    children,
}: {
    description: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] rounded-[2rem] bg-black-200"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 w-full">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <p className="text-center -mt-20 text-white text-sm lg:text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 font-semibold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {description}
                </p>
            </div>
        </div>
    );
};


export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
