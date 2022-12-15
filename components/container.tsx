interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export const Container: React.FC<ContainerProps> = ({
	children,
	className,
}) => {
	return (
		<div className={`mx-auto max-w-7xl px-8 ${className}`}>{children}</div>
	);
};
