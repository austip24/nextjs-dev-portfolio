interface DownarrowProps {
	className?: string;
}

export const Downarrow: React.FC<DownarrowProps> = ({ className }) => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20 40C8.9543 40 0 31.0456 0 20C0 8.9543 8.9543 0 20 0C31.0456 0 40 8.9543 40 20C39.9878 31.0406 31.0406 39.9878 20 40ZM20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20C35.99 11.1676 28.8324 4.00992 20 4ZM20 30L10 20L12.82 17.18L18 22.34V10H22V22.34L27.18 17.18L30 20L20 30Z"
				fill="url(#downarrowgrad)"
			/>
			<defs>
				<linearGradient
					id="downarrowgrad"
					x1="0"
					y1="0"
					x2="0"
					y2="40"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor="#AE02FF" />
					<stop offset="100%" stopColor="#11BADF" />
				</linearGradient>
			</defs>
		</svg>
	);
};
