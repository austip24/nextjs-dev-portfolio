import Link from "next/link";
import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { Hero, HeroTitle } from "../../components/hero";
import { Downarrow } from "../../components/icons/downarrow";
import { PageTitle } from "../../components/pageTitle";

const AboutPage = () => {
	return (
		<div className="h-full w-screen max-w-screen overflow-hidden">
			<Container>
				<PageTitle>About</PageTitle>

				<section className="flex flex-col gap-4">
					<Hero>
						<HeroTitle>A bit about me...</HeroTitle>
					</Hero>

					<p className="indent-8 text-xl tracking-tighter md:tracking-normal">
						I am a computer engineer turned full-stack web developer based in
						Arizona. I have a passion for building web applications that are
						user-friendly, performant, and accessible. If you are looking for
						someone to turn an idea or concept you have into a digital
						masterpiece on the web, I am the guy you are looking for!
					</p>
					<p className="text-xl tracking-tighter md:tracking-normal">
						Need a developer?{" "}
						<Link
							href="/contact"
							className="hover:opacity-80 transition-opacity font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent"
						>
							Contact me.
						</Link>
					</p>
				</section>

				<Container className="flex items-center justify-center">
					<Button className="absolute bottom-12">
						<Link
							href="/skills"
							className="inline-flex items-center justify-center gap-2 font-bold"
						>
							<Downarrow className="w-6 md:w-8" />
							<span>Click me!</span>
						</Link>
					</Button>
				</Container>
			</Container>
		</div>
	);
};

export default AboutPage;
