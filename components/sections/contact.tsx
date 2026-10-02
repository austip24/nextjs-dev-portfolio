import { FileDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/copy-email-button";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/data/site";

export function Contact() {
	return (
		<Section id="contact" title="Contact" ghost="Hello">
			<Reveal>
				<div className="relative overflow-hidden rounded-2xl border bg-card px-6 py-10 md:px-12 md:py-14">
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-brand/10 blur-3xl"
					/>

					<div className="relative max-w-2xl">
						<p className="text-2xl font-bold md:text-3xl">
							Have a project or role in mind?
						</p>
						<p className="mt-3 text-muted-foreground md:text-lg">
							I&apos;m always happy to talk about analytics, cloud, and web
							engineering work. The fastest way to reach me is by email.
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-2">
							<Button asChild size="lg">
								<a href={`mailto:${site.email}`}>
									<Mail /> {site.email}
								</a>
							</Button>
							<CopyEmailButton email={site.email} />
						</div>

						<div className="mt-4 flex flex-wrap gap-2">
							<Button asChild variant="outline">
								<a href={site.links.linkedin} target="_blank" rel="noreferrer">
									<LinkedinIcon /> LinkedIn
								</a>
							</Button>
							<Button asChild variant="outline">
								<a href={site.links.github} target="_blank" rel="noreferrer">
									<GithubIcon /> GitHub
								</a>
							</Button>
							<Button asChild variant="outline">
								<a href={site.resume} target="_blank" rel="noopener">
									<FileDown /> Resume
								</a>
							</Button>
						</div>
					</div>
				</div>
			</Reveal>
		</Section>
	);
}
