interface HeroProps {
	children: React.ReactNode;
}

interface HeroElementProps {
	children: React.ReactNode;
}

export const HeroTitle: React.FC<HeroElementProps> = ({ children }) => {
	return (
		<h1 className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent font-extrabold text-2xl md:text-4xl xl:text-5xl uppercase tracking-[0.15em] leading-7 w-max-content text-center">
			{children}
		</h1>
	);
};

export const HeroSubtitle: React.FC<HeroElementProps> = ({ children }) => {
	return (
		<p className="text-lg xl:text-xl font-semibold text-center sm:text-left">
			{children}
		</p>
	);
};

export const HeroLinks: React.FC<HeroElementProps> = ({ children }) => {
	return <div className="flex gap-4 mt-2">{children}</div>;
};

export const Hero: React.FC<HeroProps> = ({ children }) => {
	return (
		<section className="mt-2 flex flex-col items-center lg:items-start gap-2">
			{children}
		</section>
	);
};
