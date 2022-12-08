"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { LinkedinIcon } from "./icons/linkedin";
import { Logo } from "./icons/logo";

interface NavLink {
	href: string;
	label: string;
}

const links: NavLink[] = [
	{
		href: "/about",
		label: "About",
	},
	{
		href: "/skills",
		label: "Skills",
	},
	{
		href: "/projects",
		label: "Projects",
	},
	{
		href: "/contact",
		label: "Contact",
	},
];

const NavMenu: React.FC = () => {
	return (
		<Menu>
			<Menu.Button className="relative w-8 aspect-square -mr-4">
				<Image
					className="fill-neutral"
					src="/menu.svg"
					alt="toggle menu"
					fill
				/>
			</Menu.Button>
		</Menu>
	);
};

export const Header: React.FC = () => {
	return (
		<header className="z-10 border-b border-white/20 backdrop-blur-md">
			<Container className="h-navigation-height flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="-ml-4 sm:m-0 relative w-8 aspect-square">
					<Logo
						className="hover:opacity-80 transition-opacity"
						label="link to home"
					/>
				</Link>

				{/* Navigation */}
				<nav className="hidden sm:grid sm:grow sm:place-items-center text-sm lg:text-base">
					<ul className="max-w-2xl w-full flex justify-between">
						{links.map((link) => (
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
					<Link href="/">
						<GithubIcon
							className="w-4 aspect-square hover:fill-white transition-colors"
							label="link to github"
						/>
					</Link>
					<Link href="/">
						<LinkedinIcon
							className="w-4 aspect-square hover:fill-white transition-colors"
							label="link to linkedin"
						/>
					</Link>
				</div>
			</Container>
		</header>
	);
};
