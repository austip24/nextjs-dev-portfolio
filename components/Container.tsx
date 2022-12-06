interface ContainerProps {
	children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className="px-4 sm:px-8 lg:px-[160px]">{children}</div>;
};
