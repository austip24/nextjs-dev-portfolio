import { Container } from "../components/Container";
import { Downarrow } from "../components/icons/downarrow";
import { Hero, HeroLinks, HeroSubtitle, HeroTitle } from "../components/Hero";
import Link from "next/link";
import { links } from "../data/links";
import { GithubIcon } from "../components/icons/github";
import { LinkedinIcon } from "../components/icons/linkedin";
import { Button } from "../components/Button";
import { PageTitle } from "../components/PageTitle";

const Homepage: React.FC = () => {
	return (
		<div className="h-full w-screen max-w-screen overflow-hidden flex flex-col justify-center">
			<Container className="grow flex justify-center items-center lg:flex-col lg:items-start lg:justify-start w-full lg:gap-6">
				{/* Page Title */}
				<PageTitle>Home</PageTitle>

				{/* Hero Content */}
				<Hero>
					<HeroTitle>Austin Pierson</HeroTitle>
					<HeroSubtitle>Software Engineer / Web Developer</HeroSubtitle>
					<HeroLinks>
						<Link href={links.github}>
							<GithubIcon
								className="w-6 md:w-7 aspect-square hover:fill-white transition-colors"
								label="link to github"
							/>
						</Link>
						<Link href={links.linkedin}>
							<LinkedinIcon
								className="w-6 md:w-7 aspect-square hover:fill-white transition-colors"
								label="link to linkedin"
							/>
						</Link>
					</HeroLinks>
				</Hero>
			</Container>

			{/* Hero BG */}
			<div className="bg-hero lg:bg-hero-lg h-56 lg:h-[600px] lg:bg-contain xl:bg-auto bg-center bg-no-repeat -z-50 lg:absolute lg:left-0 lg:right-0"></div>

			<Container className="grow w-full flex flex-col justify-center items-center lg:justify-start lg:items-start mb-2 xl:pt-4">
				<section className="text-center lg:text-start flex flex-col gap-2 tracking-wider">
					{/* Quote */}
					<p className="text-sm lg:text-xl font-semibold">
						Steve Jobs, co-founder of Apple, Inc.
					</p>
					<q className="text-neutral text-xs lg:text-base italic max-w-md xl:max-w-2xl">
						Be a yardstick of quality. Some people aren&apos;t used to an
						environment where excellence is expected.
					</q>
				</section>
			</Container>

			<Container>
				<Button>
					<Link
						href="/about"
						className="inline-flex items-center justify-center gap-2 font-bold"
					>
						<Downarrow className="w-6 md:w-8" />
						<span>Click me!</span>
					</Link>
				</Button>
			</Container>
		</div>
	);
};

export default Homepage;
