import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: { default: title, template: `%s · ${site.name}` },
	description: site.summary,
	authors: [{ name: site.name, url: site.url }],
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		url: "/",
		siteName: site.name,
		title,
		description: site.tagline,
	},
	twitter: {
		card: "summary_large_image",
		title,
		description: site.tagline,
	},
};

export const viewport: Viewport = {
	themeColor: "#09090b",
	colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`dark ${inter.variable}`}>
			<body className="flex min-h-svh flex-col font-sans">
				<a
					href="#main"
					className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
				>
					Skip to content
				</a>
				<Providers>
					<SiteHeader />
					<main id="main" className="grow overflow-x-clip">
						{children}
					</main>
					<SiteFooter />
				</Providers>
				<Analytics />
			</body>
		</html>
	);
}
