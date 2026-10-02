import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { TimelineBeam } from "@/components/motion/timeline-beam";
import { experience } from "@/data/experience";

export function Experience() {
	return (
		<Section id="experience" title="Experience" ghost="Work">
			<TimelineBeam>
				<ol className="space-y-8">
					{experience.map((job) => (
						<li key={job.company} className="relative pl-8 md:pl-10">
							<span
								aria-hidden="true"
								className="absolute top-6 left-0 size-[15px] rounded-full border-2 border-brand bg-background"
							/>
							<Reveal>
								<Card className="gap-4">
									<CardHeader className="gap-1">
										<p className="text-sm text-muted-foreground">
											{job.period} · {job.location}
										</p>
										<CardTitle className="text-lg md:text-xl">
											{job.role} <span className="text-muted-foreground">at</span>{" "}
											{job.company}
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-brand md:text-base">
											{job.highlights.map((highlight) => (
												<li key={highlight}>{highlight}</li>
											))}
										</ul>
										<ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
											{job.tags.map((tag) => (
												<li key={tag}>
													<Badge variant="secondary">{tag}</Badge>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</Reveal>
						</li>
					))}
				</ol>
			</TimelineBeam>
		</Section>
	);
}
