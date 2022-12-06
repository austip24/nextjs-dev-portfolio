"use client";

import { useWindowSize } from "../hooks/useWindowSize";
import Image from "next/image";

interface ClientImageProps {
	src: string;
	alt: string;
	width: number;
	height: number;
}

export const ClientImage: React.FC<ClientImageProps> = ({
	src,
	alt,
	width,
	height,
}) => {
	const { width: currentWidth, height: currentHeight } = useWindowSize();

	return (
		<Image
			src={src}
			alt={alt}
			width={currentWidth * 0.303125}
			height={currentHeight * 0.60463}
			className="absolute bottom-16 hidden md:block"
			style={{ right: currentWidth * 0.12291667 }}
		/>
	);
};
