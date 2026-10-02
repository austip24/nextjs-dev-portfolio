import { GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { education } from "@/data/education";
import { site } from "@/data/site";
import { skills } from "@/data/skills";

export function About() {
	return (
		<Section id="about" title="About me" ghost="About">
			<div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
				<Reveal className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
					<p className="text-foreground">{site.summary}</p>
					<p>
						I studied computer engineering at the University of Arizona, and I
						like work that crosses the stack: hardware and firmware, analytics
						pipelines, cloud infrastructure, and the interfaces people actually
						use.
					</p>
					<p className="flex items-center gap-2 text-sm">
						<MapPin className="size-4 text-brand" aria-hidden="true" />
						Based in {site.location}
					</p>
				</Reveal>

				<Reveal delay={0.1}>
					<Card className="gap-4">
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<GraduationCap className="size-5 text-brand" aria-hidden="true" />
								Education
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="space-y-4">
								{education.map((item) => (
									<li key={item.degree} className="border-l-2 border-brand/50 pl-4">
										<p className="font-medium">
											{item.degree} {item.field}
										</p>
										<p className="text-sm text-muted-foreground">
											{item.school} · {item.graduated}
										</p>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</Reveal>
			</div>

			<Reveal delay={0.15} className="mt-10 border-t pt-8">
				<h3 className="sr-only">Tools and technologies</h3>
				<dl className="grid gap-4 text-sm md:text-base">
					{skills.map((group) => (
						<div key={group.category} className="grid gap-1 sm:grid-cols-[13rem_1fr] sm:gap-6">
							<dt className="text-xs font-medium tracking-wider text-muted-foreground uppercase sm:pt-1">
								{group.category}
							</dt>
							<dd>{group.items.join(" · ")}</dd>
						</div>
					))}
				</dl>
			</Reveal>
		</Section>
	);
}
