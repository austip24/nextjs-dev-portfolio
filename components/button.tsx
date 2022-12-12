interface ButtonProps {
	children: React.ReactNode;
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className }) => {
	return (
		<button
			className={`bg-gradient-to-b from-primary-purple to-primary-blue text-transparent bg-clip-text ${
				className ?? ""
			}`}
		>
			{children}
		</button>
	);
};
