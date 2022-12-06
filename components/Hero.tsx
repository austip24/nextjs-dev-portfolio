import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";

interface HeroProps {
	children?: React.ReactNode;
}

interface HeroElementProps {
	children: React.ReactNode;
}

export const HeroSectionTitle: React.FC<HeroProps> = ({ children }) => {
	return (
		<h1 className="-ml-2 tracking-widest font-semibold text-9xl bg-gradient-to-b from-white/30 to-transparent bg-clip-text text-transparent leading-normal">
			{children}
		</h1>
	);
};

export const HeroTitle: React.FC<HeroElementProps> = ({ children }) => {
	return (
		<h1 className="w-max tracking-wider font-extrabold text-5xl bg-gradient-to-r from-primary-blue to-primary-purple  text-transparent bg-clip-text uppercase">
			{children}
		</h1>
	);
};

export const HeroSubtitle: React.FC<HeroElementProps> = ({ children }) => {
	return <p className="capitalize font-semibold text-3xl">{children}</p>;
};

export const Hero: React.FC<HeroProps> = ({ children }) => {
	return (
		<Container>
			<div className="flex flex-col gap-4">{children}</div>
		</Container>
	);
};
