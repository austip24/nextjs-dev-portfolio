import { site } from "@/data/site";

export function SiteFooter() {
	return (
		<footer className="border-t">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
				<p>
					&copy; {new Date().getFullYear()} {site.name}
				</p>
				<p>Built with Next.js, Tailwind CSS &amp; shadcn/ui</p>
			</div>
		</footer>
	);
}
