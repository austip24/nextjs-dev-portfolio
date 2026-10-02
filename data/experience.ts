export interface Experience {
	company: string;
	role: string;
	location: string;
	period: string;
	highlights: string[];
	tags: string[];
}

export const experience: Experience[] = [
	{
		company: "Komatsu",
		role: "Software Engineer",
		location: "Tucson, AZ",
		period: "Jun 2023 – Present",
		highlights: [
			"Design, develop, and maintain data-driven analytics applications for the mining industry with Next.js, React, TypeScript, and Python.",
			"Build Python analytics on operational and historical data to improve mining operations and inform decision-making.",
			"Designed and implemented DevOps and cloud deployment workflows through GitHub and Azure DevOps on Azure App Service and Azure Container Registry.",
			"Contribute across the lifecycle: frontend architecture, backend integration, cloud infrastructure, CI/CD, and deployments.",
			"Create internal tools and workflows that boost team productivity, streamline engineering processes, and enable AI-assisted development.",
			"Upskill teammates through knowledge transfers and technical guidance on DevOps and modern AI-assisted development.",
		],
		tags: ["Next.js", "React", "TypeScript", "Python", "Azure", "CI/CD"],
	},
	{
		company: "HFE International",
		role: "Python Developer",
		location: "Tucson, AZ",
		period: "Feb 2020 – Apr 2020",
		highlights: [
			"Designed and developed Python scripts to simulate and document the performance of Arduino microcontroller-based equipment.",
			"Helped develop and test Arduino firmware for company devices.",
			"Worked with engineers to clarify project requirements and business specifications.",
		],
		tags: ["Python", "Arduino", "Firmware"],
	},
];
