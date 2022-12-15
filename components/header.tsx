"use client";

import { Menu } from "@headlessui/react";
import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { HamburgerIcon } from "./icons/hamburger";
import { LinkedinIcon } from "./icons/linkedin";
import { Logo } from "./icons/logo";
import { links } from "../data/links";

interface NavLink {
	href: string;
	label: string;
}

const navLinks: NavLink[] = [
	{
		href: "/about",
		label: "About",
	},
	{
		href: "/skills",
		label: "Skills",
	},
	{
		href: "/works",
		label: "Works",
	},
	{
		href: "/contact",
		label: "Contact",
	},
];

const NavMenu: React.FC = () => {
	return (
		<Menu>
			<div className="flex">
				<Menu.Button className="relative w-6 md:w-7 aspect-square -mr-4">
					<HamburgerIcon />
				</Menu.Button>
			</div>
		</Menu>
	);
};

export const Header: React.FC = () => {
	return (
		<header className="w-full fixed top-0 left-0 z-10 border-b border-white/20 backdrop-blur-md">
			<Container className="h-navigation-height flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="-ml-4 sm:m-0 relative">
					<Logo
						className="hover:opacity-80 transition-opacity"
						label="link to home"
					/>
				</Link>

				{/* Navigation */}
				<nav className="hidden sm:grid sm:grow sm:place-items-center text-sm lg:text-base">
					<ul className="max-w-2xl w-full flex justify-between">
						{navLinks.map((link) => (
							<li key={link.label} className="grow text-center">
								<Link
									href={link.href}
									className="text-neutral hover:text-white transition-colors duration-250"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Menu Icon on small */}
				<div className="sm:hidden">
					<NavMenu />
				</div>

				{/* External Links */}
				<div className="hidden sm:flex gap-2 lg:gap-4">
					<Link href={links.github}>
						<GithubIcon
							className="w-5 aspect-square hover:fill-white transition-colors"
							label="link to github"
						/>
					</Link>
					<Link href={links.linkedin}>
						<LinkedinIcon
							className="w-5 aspect-square hover:fill-white transition-colors"
							label="link to linkedin"
						/>
					</Link>
				</div>
			</Container>
		</header>
	);
};
