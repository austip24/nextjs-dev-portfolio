"use client";

import { motion } from "motion/react";

interface RevealProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	/** Animate on mount instead of when scrolled into view (above-the-fold content). */
	immediate?: boolean;
}

export function Reveal({ children, className, delay = 0, immediate }: RevealProps) {
	const visible = { opacity: 1, y: 0, filter: "blur(0px)" };

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
			{...(immediate
				? { animate: visible }
				: { whileInView: visible, viewport: { once: true, margin: "-64px" } })}
			transition={{ duration: 0.5, delay, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
}
