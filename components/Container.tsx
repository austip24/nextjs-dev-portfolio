interface ContainerProps {
	children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className="mx-4 sm:mx-8 lg:mx-[160px]">{children}</div>;
};
