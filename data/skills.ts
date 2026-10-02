export interface SkillGroup {
	category: string;
	items: string[];
}

export const skills: SkillGroup[] = [
	{
		category: "Languages & frameworks",
		items: ["TypeScript", "Python", "React", "Next.js", "Tailwind CSS"],
	},
	{
		category: "Data",
		items: ["Analytics", "Data visualization", "SQL"],
	},
	{
		category: "Cloud & DevOps",
		items: ["Azure (App Service, ACR)", "AWS", "CI/CD", "GitHub & Azure DevOps"],
	},
];
