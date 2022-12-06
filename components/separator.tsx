"use client";

import { motion } from "framer-motion";

const variants = {
	hidden: {
		pathLength: 0,
	},
	visible: {
		pathLength: 1,
	},
};

export const VerticalSeparator: React.FC = () => {
	return <div>vertical separator</div>;
};

export const HorizontalSeparator: React.FC = () => {
	return (
		<svg
			width="1920"
			height="268"
			viewBox="0 0 1920 268"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="w-screen stroke-[8] md:stroke-[4]"
		>
			<motion.path
				d="M-2 2H1091.86C1103.8 2 1115.24 6.74106 1123.68 15.1802L1361.18 252.68C1378.75 270.254 1407.25 270.254 1424.82 252.68L1662.32 15.1802C1670.76 6.74105 1682.2 2 1694.14 2H1922"
				stroke="url(#paint0_linear_37_22)"
				variants={variants}
				initial="hidden"
				animate="visible"
				transition={{
					default: { duration: 1, ease: "easeInOut" },
				}}
			/>
			<defs>
				<linearGradient
					id="paint0_linear_37_22"
					x1="984.5"
					y1="2"
					x2="1878.5"
					y2="2.00001"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#11BADF" />
					<stop offset="1" stop-color="#AE02FF" />
				</linearGradient>
			</defs>
		</svg>
	);
};
