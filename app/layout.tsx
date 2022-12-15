import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Inter } from "@next/font/google";
import "../styles/globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<html>
			<head />
			<body
				className={`${inter.variable} font-sans min-h-screen max-w-screen relative flex flex-col justify-between`}
			>
				<Header />
				<main className="flex grow mt-navigation-height mb-footer-height overflow-hidden">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
