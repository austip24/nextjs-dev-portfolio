import Link from "next/link";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLinks } from "@/components/layout/nav-links";
import { site } from "@/data/site";

export function SiteHeader() {
	return (
		<header className="fixed inset-x-0 top-0 z-40 border-b bg-background/70 backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
				<Link
					href="/"
					className="rounded-md text-sm font-semibold tracking-tight transition-opacity hover:opacity-80"
				>
					{site.name}
				</Link>

				<nav aria-label="Main" className="hidden md:block">
					<NavLinks />
				</nav>

				<div className="hidden items-center gap-1 md:flex">
					<Button asChild variant="ghost" size="icon" aria-label="GitHub profile">
						<a href={site.links.github} target="_blank" rel="noreferrer">
							<GithubIcon className="size-[18px]" />
						</a>
					</Button>
					<Button asChild variant="ghost" size="icon" aria-label="LinkedIn profile">
						<a href={site.links.linkedin} target="_blank" rel="noreferrer">
							<LinkedinIcon className="size-[18px]" />
						</a>
					</Button>
					<Button asChild variant="outline" size="sm" className="ml-2">
						<a href={site.resume} target="_blank" rel="noopener">
							<FileDown /> Resume
						</a>
					</Button>
				</div>

				<div className="md:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	);
}
