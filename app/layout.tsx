import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Inter } from "@next/font/google";
import "../styles/globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

interface LayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<html>
			<head />
			<body
				className={`${inter.variable} font-sans h-screen relative flex flex-col justify-between`}
			>
				<Header />
				<main className="flex grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
