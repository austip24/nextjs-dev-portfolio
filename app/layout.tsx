import React from "react";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";

interface LayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<html>
			<head />
			<body>
				<Navbar />
				<main className="mt-4">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
