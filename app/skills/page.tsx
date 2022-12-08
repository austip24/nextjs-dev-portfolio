import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { Hero, HeroTitle } from "../../components/hero";
import { PageTitle } from "../../components/pageTitle";
import { ProgressCircle } from "../../components/progress";
import { skills } from "../../data/skills";
import Link from "next/link";
import { Downarrow } from "../../components/icons/downarrow";

const SkillsPage = () => {
	return (
		<div className="h-full w-screen max-w-screen overflow-hidden">
			<Container className="w-full lg:flex lg:flex-col lg:items-end lg:justify-center">
				<div className="text-center">
					<PageTitle>Skills</PageTitle>

					<div className="flex flex-col gap-4 lg:gap-8 items-center">
						<Hero>
							<HeroTitle>What I Know...</HeroTitle>
						</Hero>

						<section className="max-w-lg flex justify-center items-center">
							<p className="w-full text-center">
								I enjoy programming whether it be creating websites, desktop
								applications, or anything in between.
							</p>
						</section>
						<section className="mb-footer-height w-full flex flex-col max-h-[600px] gap-2 md:flex-row justify-center items-center flex-wrap content-evenly">
							{skills.map((skill) => (
								<div key={skill.name} className="grow md:grow-0 md:basis-[21%]">
									<ProgressCircle
										size={100}
										progress={skill.proficiency}
										title={skill.name}
									/>
								</div>
							))}
						</section>
					</div>
				</div>
			</Container>
			<Container className="w-full flex items-center justify-center">
				<Button className="absolute bottom-12">
					<Link
						href="/projects"
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

export default SkillsPage;
