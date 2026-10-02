"use client";

import { FileDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { sections, site } from "@/data/site";

export function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" aria-label="Open navigation menu">
					<Menu className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="right" className="w-72">
				<SheetHeader>
					<SheetTitle>Navigation</SheetTitle>
					<SheetDescription className="sr-only">
						Jump to a section of the page
					</SheetDescription>
				</SheetHeader>
				<nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
					{sections.map(({ id, label }) => (
						<SheetClose asChild key={id}>
							<a
								href={`/#${id}`}
								className="rounded-md px-3 py-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
							>
								{label}
							</a>
						</SheetClose>
					))}
				</nav>
				<div className="px-4">
					<Separator />
				</div>
				<div className="flex flex-col gap-2 px-4">
					<Button asChild>
						<a href={site.resume} target="_blank" rel="noopener">
							<FileDown /> Resume
						</a>
					</Button>
					<div className="flex gap-2">
						<Button asChild variant="outline" className="flex-1">
							<a href={site.links.github} target="_blank" rel="noreferrer">
								<GithubIcon /> GitHub
							</a>
						</Button>
						<Button asChild variant="outline" className="flex-1">
							<a href={site.links.linkedin} target="_blank" rel="noreferrer">
								<LinkedinIcon /> LinkedIn
							</a>
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
