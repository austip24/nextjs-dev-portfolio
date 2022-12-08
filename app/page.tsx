import { Container } from "../components/container";
import { Downarrow } from "../components/icons/downarrow";
import { Hero, HeroLinks, HeroSubtitle, HeroTitle } from "../components/hero";
import Link from "next/link";
import { GithubIcon } from "../components/icons/github";
import { LinkedinIcon } from "../components/icons/linkedin";
import { Button } from "../components/button";

const Homepage: React.FC = () => {
	return (
		<div className="overflow-hidden h-full flex flex-col justify-center">
			<Container className="grow grid place-items-center">
				{/* Hero Content */}
				<Hero>
					<HeroTitle>Austin Pierson</HeroTitle>
					<HeroSubtitle>Software Engineer / Web Developer</HeroSubtitle>
					<HeroLinks>
						<Link href="/" className="relative w-6 aspect-square">
							<GithubIcon
								className="w-6 aspect-square hover:fill-white transition-colors"
								label="link to github"
							/>
						</Link>
						<Link href="/" className="relative w-6 aspect-square">
							<LinkedinIcon
								className="w-6 aspect-square hover:fill-white transition-colors"
								label="link to linkedin"
							/>
						</Link>
					</HeroLinks>
				</Hero>
			</Container>

			{/* Hero BG */}
			<div className="bg-hero max-w-5xl h-40 bg-cover bg-center bg-no-repeat"></div>

			<Container className="grow flex flex-col justify-center items-center gap-4 mb-2">
				<section className="text-center flex flex-col gap-2 tracking-wider">
					{/* Quote */}
					<p className="text-sm font-semibold">
						Steve Jobs, co-founder of Apple, Inc.
					</p>
					<q className="text-neutral text-xs italic">
						Be a yardstick of quality. Some people aren&apos;t used to an
						environment where excellence is expected.
					</q>
				</section>

				<Button className="flex items-center justify-center gap-2 font-bold text-base">
					<Downarrow /> Click me!
				</Button>
			</Container>
		</div>
	);
};

export default Homepage;
