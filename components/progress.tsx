"use client";

import { motion } from "framer-motion";

interface ProgressCircleProps {
	size: number;
	progress: number;
	title: string;
	strokeWidth?: number;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
	size,
	progress,
	title,
	strokeWidth = 8,
}) => {
	const center = 50;
	const radius = 50 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;
	const fillProgress = Math.abs(
		Math.ceil((circumference / 100) * (progress - 100))
	);

	const transition = {
		duration: 1.5,
		ease: "easeInOut",
	};

	const variants = {
		hidden: {
			strokeDashoffset: circumference,
			transition,
		},
		show: {
			strokeDashoffset: fillProgress,
			transition,
		},
	};

	return (
		<div className="grid place-items-center">
			<div className="relative">
				<svg
					viewBox="0 0 100 100"
					width={size}
					height={size}
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						transform: "rotate(-90deg) scale(1, -1)",
						overflow: "visible",
					}}
					className="fill-none"
				>
					<defs>
						<linearGradient
							id="progressGradient"
							x1="0%"
							y1="0%"
							x2="0%"
							y2="100%"
						>
							<stop offset="0%" stopColor="#AE02FF" />
							<stop offset="100%" stopColor="#11BADF" />
						</linearGradient>
					</defs>
					<motion.circle
						stroke="url('#progressGradient')"
						cx={center}
						cy={center}
						r={radius}
						strokeWidth={strokeWidth}
						strokeDashoffset={fillProgress}
						strokeDasharray={circumference}
						variants={variants}
						initial="hidden"
						animate="show"
					></motion.circle>
				</svg>
				<svg
					viewBox="0 0 100 100"
					width={size}
					height={size}
					className="fill-none"
				>
					<circle
						className="stroke-gray-50/90"
						cx={center}
						cy={center}
						r={radius}
						strokeWidth={strokeWidth}
					></circle>
				</svg>
				<div className="absolute inset-0 grid place-items-center text-sm font-semibold">
					{progress}%
				</div>
			</div>
			<p className="mt-1">{title}</p>
		</div>
	);
};
