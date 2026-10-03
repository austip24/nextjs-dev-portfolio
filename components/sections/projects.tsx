import Image from "next/image";
import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { GithubIcon } from "@/components/icons/github";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { projects, type Project } from "@/data/projects";

export function Projects() {
	return (
		<Section id="projects" title="Projects" ghost="Works">
			<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<li key={project.title}>
						<Reveal delay={(index % 3) * 0.08} className="h-full">
							<ProjectCard project={project} />
						</Reveal>
					</li>
				))}
			</ul>
		</Section>
	);
}

function ProjectCard({ project }: { project: Project }) {
	return (
		<article className="group h-full transition-transform duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0">
			<Card className="h-full gap-0 overflow-hidden py-0 transition-colors duration-300 group-hover:border-brand/40">
				<div className="relative aspect-video overflow-hidden bg-muted">
					<Image
						src={project.image}
						alt={`Screenshot of ${project.title}`}
						fill
						sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
						className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
					/>
				</div>
				<CardHeader className="gap-3 pt-5">
					<CardTitle className="text-lg">
						<h3>{project.title}</h3>
					</CardTitle>
					<ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
						{project.tags.map((tag) => (
							<li key={tag}>
								<Badge variant="secondary">{tag}</Badge>
							</li>
						))}
					</ul>
				</CardHeader>
				<CardContent className="grow pt-3 pb-5">
					<CardDescription className="text-sm leading-relaxed">
						{project.description}
					</CardDescription>
				</CardContent>
				{(project.liveLink || project.sourceLink || project.paperLink) && (
					<CardFooter className="gap-2 pb-5">
						{project.liveLink && (
							<Button asChild variant="outline" size="sm">
								<a href={project.liveLink} target="_blank" rel="noreferrer">
									<ExternalLink />
									Live<span className="sr-only"> site for {project.title}</span>
								</a>
							</Button>
						)}
						{project.sourceLink && (
							<Button asChild variant="outline" size="sm">
								<a href={project.sourceLink} target="_blank" rel="noreferrer">
									<GithubIcon />
									Source<span className="sr-only"> code for {project.title}</span>
								</a>
							</Button>
						)}
						{project.paperLink && (
							<Button asChild variant="outline" size="sm">
								<a href={project.paperLink} target="_blank" rel="noopener">
									<FileText />
									Paper<span className="sr-only"> for {project.title} (PDF)</span>
								</a>
							</Button>
						)}
					</CardFooter>
				)}
			</Card>
		</article>
	);
}
