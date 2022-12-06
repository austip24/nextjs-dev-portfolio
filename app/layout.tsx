import React from "react";
import { Container } from "../components/container";
import { Navbar } from "../components/navbar";
import "../styles/globals.css";

interface LayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<html>
			<head />
			<body className="">
				<Navbar />
				<main className="mt-4">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
