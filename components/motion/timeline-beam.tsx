"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

/**
 * Vertical timeline rail whose gradient "beam" fills as the list scrolls
 * through the viewport. Inspired by Aceternity's Timeline.
 */
export function TimelineBeam({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 75%", "end 50%"],
	});
	const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

	return (
		<div ref={ref} className="relative">
			<div aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-border">
				<motion.div
					style={{ scaleY }}
					className="h-full w-full origin-top bg-brand"
				/>
			</div>
			{children}
		</div>
	);
}
