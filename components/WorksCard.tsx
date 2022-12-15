"use client";

import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "../hooks/useWindowSize";
import { GithubIcon } from "./icons/github";

interface CardProps {
	children: React.ReactNode;
}

interface CardImageProps {
	src: string;
	alt: string;
}

export const CardStack: React.FC<{ stack: string[] }> = ({ stack }) => {
	const { width } = useWindowSize();

	const determineGradient = (index: number): string => {
		switch (index) {
			case 0:
				return "from-[#11BADF] to-[#2E97E5]";
			case 1:
				return "from-[#2E97E5] to-[#4B76EB]";
			case 2:
				return "from-[#4B76EB] to-[#6854F1]";
			case 3:
				return "from-[#6854F1] to-[#892DF8]";
			case 4:
				return "from-[#892DF8] to-[#AE02FF]";
			default:
				return "";
		}
	};

	return (
		<div className="grid grid-cols-3 md:grid-cols-5 gap-1">
			{stack.map((item, idx) => (
				<div key={`${idx}-${item}`} className="relative">
					<div
						className={`h-full text-[0.625rem] md:text-sm font-semibold text-center rounded-full bg-gradient-to-r ${determineGradient(
							width! >= 768 ? idx % 5 : idx % 3
						)} text-transparent bg-clip-text p-1`}
					>
						{item}
					</div>
					<div
						className={`absolute inset-0 rounded-full bg-gradient-to-r ${determineGradient(
							width! >= 768 ? idx % 5 : idx % 3
						)} opacity-10 pointer-events-none`}
					></div>
				</div>
			))}
		</div>
	);
};

export const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
	return (
		<div className="relative w-full aspect-video">
			<div className=" transition-opacity">
				{/* missing class: group-hover:opacity-30 */}
				<Image src={src} alt={alt} fill className="object-cover" />
			</div>
			{/* <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] aspect-square rounded-full bg-gradient-to-r from-primary-blue to-primary-purple flex items-center justify-center p-2 flex-wrap">
				View Project
			</div> */}
		</div>
	);
};

export const CardDescription: React.FC<CardProps> = ({ children }) => {
	return <p className="text-sm text-neutral">{children}</p>;
};

export const CardTitle: React.FC<CardProps> = ({ children }) => {
	return <h1 className="font-bold text-2xl">{children}</h1>;
};

export const CardLink: React.FC<{
	href: string | undefined;
	label: string;
}> = ({ href, label }) => {
	return (
		<Link
			href={href ?? "/"}
			className={`inline ${
				href ?? "hidden"
			} flex gap-2 items-center justify-center rounded-md border border-neutral p-1 hover:bg-neutral/5 text-sm`}
		>
			<GithubIcon label={label} className="w-6 aspect-square fill-white" />{" "}
			Source code
		</Link>
	);
};

export const WorksCard: React.FC<CardProps> = ({ children }) => {
	return (
		<div className="w-full max-w-md bg-gradient-to-br from-primary-blue to-primary-purple rounded-2xl p-[2px]">
			<section
				className="group h-full rounded-2xl flex flex-col bg-background overflow-hidden
			transition-colors"
			>
				{/* missing class: hover:bg-background/95 cursor-pointer */}
				{children}
			</section>
		</div>
	);
};
