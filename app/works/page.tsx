import Link from "next/link";
import { Container } from "../../components/container";
import {
	CardDescription,
	CardImage,
	CardTitle,
	CardStack,
	WorksCard,
	CardLink,
} from "../../components/workscard";
import { works } from "../../data/works";
import { PageTitle } from "../../components/pagetitle";
import { Hero, HeroTitle } from "../../components/hero";
import { Button } from "../../components/button";
import { Downarrow } from "../../components/icons/downarrow";

const WorksPage = () => {
	return (
		<div className="h-full w-screen max-w-screen overflow-hidden">
			<Container className="flex flex-col gap-4 md:gap-12">
				<div className="text-center">
					<PageTitle>Works</PageTitle>
					<Hero>
						<HeroTitle>What I have developed in the past...</HeroTitle>
					</Hero>
				</div>
				<section className="flex gap-8 flex-wrap justify-center items-stretch">
					{works.map((work) => (
						<WorksCard key={work.id}>
							<CardImage
								src={work.thumbnailImage}
								alt={`image for ${work.title}`}
							/>
							<div className="p-4 flex flex-col gap-2 grow">
								<CardTitle>{work.title}</CardTitle>
								<CardStack stack={work.stack} />
								<CardDescription>{work.description}</CardDescription>
								<CardLink
									href={work?.sourceLink}
									label={`Source code link for ${work.title}`}
								/>
							</div>
						</WorksCard>
					))}
				</section>
			</Container>
			<Container className="w-full flex items-center justify-center">
				<Button className="absolute bottom-12">
					<Link
						href="/contact"
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

export default WorksPage;
