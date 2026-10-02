"use client";

import { useEffect, useState } from "react";
import { sections } from "@/data/site";
import { cn } from "@/lib/utils";

/** Desktop section links with a scroll-spy highlight for the section in view. */
export function NavLinks() {
	const [active, setActive] = useState<string | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) setActive(entry.target.id);
				}
			},
			// A thin band across the middle of the viewport decides the active section.
			{ rootMargin: "-45% 0px -50% 0px" },
		);

		for (const { id } of sections) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}
		return () => observer.disconnect();
	}, []);

	return (
		<ul className="flex items-center gap-1">
			{sections.map(({ id, label }) => (
				<li key={id}>
					<a
						href={`/#${id}`}
						aria-current={active === id ? "location" : undefined}
						className={cn(
							"rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
							active === id && "text-foreground",
						)}
					>
						{label}
					</a>
				</li>
			))}
		</ul>
	);
}
