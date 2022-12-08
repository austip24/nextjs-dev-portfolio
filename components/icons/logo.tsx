interface LogoProps {
	className?: string;
	label: string;
}

export const Logo: React.FC<LogoProps> = ({ className, label }) => {
	return (
		<>
			<svg
				width="41"
				height="41"
				viewBox="0 0 41 41"
				className={`w-8 h-8 ${className ?? ""} fill-none`}
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_12_2)">
					<mask
						id="mask0_12_2"
						style={{ maskType: "alpha" }}
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="41"
						height="41"
					>
						<path
							d="M1.03217 39.7308L19.5722 1.90904C19.8537 1.33484 20.6722 1.33484 20.9536 1.90904L39.4937 39.7308"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<path
							d="M39.4937 39.7308L10.9486 21.5332C10.3 21.1198 10.5929 20.1154 11.3621 20.1154H28.6829"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<path
							d="M28.7245 20.1154H29.4937"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<path
							d="M1.03217 39.7308L29.5773 21.5332C30.2259 21.1198 29.933 20.1154 29.1638 20.1154H11.843"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</mask>
					<g mask="url(#mask0_12_2)">
						<path
							d="M40.2629 0.5H0.262939V40.5H40.2629V0.5Z"
							fill="url(#paint0_linear_12_2)"
						/>
					</g>
				</g>
				<rect
					x="1.26294"
					y="1.5"
					width="38"
					height="38"
					rx="4"
					stroke="url(#paint1_linear_12_2)"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_12_2"
						x1="10.2629"
						y1="20.5"
						x2="30.2629"
						y2="20.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#11BADF" />
						<stop offset="1" stopColor="#AE02FF" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_12_2"
						x1="-0.121676"
						y1="20.1154"
						x2="40.2629"
						y2="20.1154"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#11BADF" />
						<stop offset="1" stopColor="#AE02FF" />
					</linearGradient>
					<clipPath id="clip0_12_2">
						<rect
							x="0.262939"
							y="0.5"
							width="40"
							height="40"
							rx="5"
							fill="white"
						/>
					</clipPath>
				</defs>
			</svg>
			<span className="sr-only">{label}</span>
		</>
	);
};
