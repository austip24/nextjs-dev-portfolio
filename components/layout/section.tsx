import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

interface SectionProps {
	id: string;
	title: string;
	/** Large faded word behind the heading, carried over from the original design. */
	ghost?: string;
	className?: string;
	children: React.ReactNode;
}

export function Section({ id, title, ghost, className, children }: SectionProps) {
	return (
		<section
			id={id}
			aria-labelledby={`${id}-heading`}
			className={cn("mx-auto w-full max-w-6xl scroll-mt-16 px-4 py-16 sm:px-6 md:py-24", className)}
		>
			<Reveal className="relative mb-10 md:mb-14">
				{ghost && (
					<span
						aria-hidden="true"
						className="pointer-events-none absolute -top-8 -left-1 bg-linear-to-b from-white/15 to-transparent bg-clip-text text-6xl font-semibold tracking-widest text-transparent select-none md:-top-12 md:text-8xl"
					>
						{ghost}
					</span>
				)}
				<h2
					id={`${id}-heading`}
					className="relative w-fit text-2xl font-extrabold tracking-[0.15em] text-foreground uppercase md:text-4xl"
				>
					{title}
				</h2>
				<span aria-hidden="true" className="relative mt-3 block h-px w-10 bg-brand" />
			</Reveal>
			{children}
		</section>
	);
}
