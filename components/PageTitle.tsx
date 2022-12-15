interface PageTitleProps {
	children: React.ReactNode;
}

export const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
	return (
		<h1 className="-ml-2 hidden lg:block bg-gradient-to-b from-white/30 bg-clip-text text-transparent tracking-widest text-9xl font-semibold">
			{children}
		</h1>
	);
};
