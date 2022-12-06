"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

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
			<Menu.Button className="flex sm:hidden">
				<Image
					className="fill-neutral"
					src="/menu.svg"
					alt="toggle menu"
					width="40"
					height="40"
				/>
			</Menu.Button>
		</Menu>
	);
};

export const Navbar: React.FC = () => {
	return (
		<nav className="text-neutral flex items-center justify-between py-2 px-4 sm:px-8 lg:px-[160px]">
			<Link href="/" className="hover:opacity-90">
				<Image src="/logo.svg" alt="logo" width="40" height="40" />
			</Link>

			<NavMenu />

			<div className="hidden sm:flex sm:justify-center sm:items-center gap-12">
				{links.map((link) => (
					<Link key={link.label} href={link.href}>
						{link.label}
					</Link>
				))}
			</div>
		</nav>
	);
};
