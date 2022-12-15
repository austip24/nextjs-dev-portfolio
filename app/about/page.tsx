import Link from "next/link";
import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { Hero, HeroTitle } from "../../components/hero";
import { Downarrow } from "../../components/icons/downarrow";
import { PageTitle } from "../../components/pagetitle";

const AboutPage = () => {
	return (
		<div className="h-full w-screen max-w-screen overflow-hidden">
			<Container>
				<section className="w-full max-w-4xl">
					<PageTitle>About</PageTitle>

					<div className="flex flex-col gap-4">
						<Hero>
							<HeroTitle>A bit about me...</HeroTitle>
						</Hero>

						<p className="md:text-lg lg:text-xl tracking-tighter md:tracking-normal xl:max-w-xl 2xl:max-w-2xl">
							I am a computer engineer turned full-stack web developer based in
							Arizona. I have a passion for building web applications that are
							user-friendly, performant, and accessible. If you are looking for
							someone to turn an idea or concept you have into a digital
							masterpiece on the web, I am the guy you are looking for!
						</p>
						<p className="md:text-lg lg:text-xl tracking-tighter md:tracking-normal xl:max-w-xl 2xl:max-w-2xl">
							Need a developer?{" "}
							<Link
								href="/contact"
								className="hover:opacity-80 transition-opacity font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent"
							>
								Contact me.
							</Link>
						</p>
					</div>
				</section>
			</Container>
			{/* Background */}
			<div className="hidden xl:block absolute right-0 top-0 bg-about bg-cover w-[650px] h-full bg-right -z-50"></div>

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
		</div>
	);
};

export default AboutPage;
