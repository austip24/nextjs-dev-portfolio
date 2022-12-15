import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Hero, HeroTitle } from "../../components/Hero";
import { PageTitle } from "../../components/PageTitle";
import { ProgressCircle } from "../../components/Progress";
import { skills } from "../../data/skills";
import Link from "next/link";
import { Downarrow } from "../../components/icons/downarrow";

const SkillsPage = () => {
	return (
		<div className="h-full overflow-hidden w-screen">
			<Container className="w-full xl:flex xl:flex-col xl:items-end overflow-hidden">
				{/* Background */}
				<div className="hidden xl:block absolute left-0 top-0 bg-skills bg-auto w-[800px] h-full bg-left bg-no-repeat -z-50"></div>

				<div className="text-center xl:max-w-[650px]">
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
						href="/works"
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
