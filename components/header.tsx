"use client";

import React from "react";
import { Menu, Transition } from "@headlessui/react";
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
		<Menu as="div" className="relative">
			<div className="flex">
				<Menu.Button className="relative w-6 md:w-7 aspect-square -mr-4">
					<HamburgerIcon className="hover:fill-white transition-colors" />
				</Menu.Button>
			</div>
			<Transition
				as={React.Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-background border border-neutral/50">
					<div className="p-1">
						{navLinks.map((link) => (
							<Menu.Item key={link.label}>
								{({ active }) => (
									<Link
										href={link.href}
										className={`
									${active ? "bg-neutral/20" : "bg-background"}
									rounded-md flex w-full items-center p-2 text-sm transition-colors
								`}
									>
										{link.label}
									</Link>
								)}
							</Menu.Item>
						))}

						{/* Github and Linkedin Links */}
						<Menu.Item>
							<Link
								href={links.github}
								className="rounded-md flex w-full items-center p-2 text-sm transition-colors gap-2 hover:bg-neutral/20 group"
							>
								<GithubIcon
									className="w-5 aspect-square group-hover:fill-white transition-colors"
									label="link to github"
								/>{" "}
								Github
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link
								href={links.linkedin}
								className="rounded-md flex w-full items-center p-2 text-sm transition-colors gap-2 hover:bg-neutral/20 group"
							>
								<LinkedinIcon
									className="w-5 aspect-square group-hover:fill-white transition-colors"
									label="link to linkedin"
								/>{" "}
								LinkedIn
							</Link>
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
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
