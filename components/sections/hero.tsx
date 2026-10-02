import { ArrowRight, FileDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { Reveal } from "@/components/motion/reveal";
import { experience } from "@/data/experience";
import { site } from "@/data/site";

const current = experience[0];

export function Hero() {
	return (
		<section
			aria-labelledby="hero-heading"
			className="relative isolate overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24"
		>
			<HeroBackground />

			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<Reveal immediate>
					<p className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur sm:text-sm">
						<span className="relative flex size-2">
							<span className="absolute inline-flex size-full rounded-full bg-brand opacity-75 motion-safe:animate-ping" />
							<span className="relative inline-flex size-2 rounded-full bg-brand" />
						</span>
						{current.role} at {current.company}
						<span aria-hidden="true">·</span>
						<MapPin className="size-3.5" aria-hidden="true" />
						{site.location}
					</p>
				</Reveal>

				<Reveal immediate delay={0.1}>
					<h1
						id="hero-heading"
						className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
					>
						{site.name}
					</h1>
				</Reveal>

				<Reveal immediate delay={0.2}>
					<p className="mt-4 text-xl font-semibold sm:text-2xl">{site.role}</p>
					<p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
						{site.tagline}
					</p>
				</Reveal>

				<Reveal immediate delay={0.3} className="mt-8 flex flex-wrap items-center gap-3">
					<Button asChild size="lg">
						<a href={site.resume} download="Austin_Pierson_Resume.pdf">
							<FileDown /> Download resume
						</a>
					</Button>
					<Button asChild size="lg" variant="outline">
						<a href="#contact">
							Get in touch <ArrowRight />
						</a>
					</Button>
					<div className="flex items-center gap-1 sm:ml-2">
						<Button asChild variant="ghost" size="icon-lg" aria-label="GitHub profile">
							<a href={site.links.github} target="_blank" rel="noreferrer">
								<GithubIcon className="size-5" />
							</a>
						</Button>
						<Button asChild variant="ghost" size="icon-lg" aria-label="LinkedIn profile">
							<a href={site.links.linkedin} target="_blank" rel="noreferrer">
								<LinkedinIcon className="size-5" />
							</a>
						</Button>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

/** Decorative spotlight + fading grid, inspired by Aceternity's Spotlight. */
function HeroBackground() {
	return (
		<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
			<div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
			<svg
				className="absolute -top-40 left-0 h-[169%] w-[138%] opacity-0 motion-safe:animate-spotlight motion-reduce:-translate-x-1/2 motion-reduce:-translate-y-2/5 motion-reduce:opacity-100 md:-top-20 md:left-60 lg:w-[84%]"
				viewBox="0 0 3787 2842"
				fill="none"
			>
				<g filter="url(#spotlight-blur)">
					<ellipse
						cx="1924.71"
						cy="273.501"
						rx="1924.71"
						ry="273.501"
						transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
						fill="white"
						fillOpacity="0.08"
					/>
				</g>
				<defs>
					<filter
						id="spotlight-blur"
						x="0.860352"
						y="0.838989"
						width="3785.16"
						height="2840.26"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feGaussianBlur stdDeviation="151" />
					</filter>
				</defs>
			</svg>
		</div>
	);
}
