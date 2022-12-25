import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Inter } from "@next/font/google";
import "../styles/globals.css";
import { AnalyticsWrapper } from "../components/analytics";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			<head />
			<body
				className={`${inter.variable} font-sans min-h-screen max-w-screen relative flex flex-col justify-between`}
			>
				<AnalyticsWrapper />
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
