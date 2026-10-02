export interface Project {
	title: string;
	description: string;
	tags: string[];
	image: string;
	sourceLink?: string;
	paperLink?: string;
}

export const projects: Project[] = [
	{
		title: "Google Docs Clone",
		description:
			"Next.js app for creating, sharing, and editing documents in a rich text editor backed by Firebase's realtime Firestore. Responsive, with dark/light modes and Google sign-in.",
		tags: ["React", "Next.js", "Firebase", "Tailwind"],
		image: "/works/google-docs-clone/thumbnail.png",
		sourceLink: "https://github.com/austip24/google-docs-clone",
	},
	{
		title: "Weather Tracking App",
		description:
			"React app built on OpenWeather's daily forecast API that lets users browse the upcoming daily forecast for any chosen location.",
		tags: ["React", "TypeScript", "OpenWeather API"],
		image: "/works/weather-app/thumbnail.png",
		sourceLink: "https://github.com/austip24/react-weather-forecast",
	},
	{
		title: "Kalman Filter Simulation",
		description:
			"Course project building and analyzing an adaptive Kalman filter. Includes a simulation tool that tracks and predicts mouse movement with tunable noise and history size.",
		tags: ["Python", "Pygame"],
		image: "/works/kalman-filter/thumbnail.PNG",
		sourceLink: "https://github.com/austip24/kalman-simulation",
		paperLink: "/works/kalman-filter/Final_529_Paper.pdf",
	},
	{
		title: "Actuator Testing Tool",
		description:
			"University of Arizona cross-disciplinary capstone. Built hardware and firmware for the tester, plus an Electron desktop app that drove the device and actuator boards. Test logic in Python; UI in HTML, CSS, and jQuery.",
		tags: ["Electron", "Python", "C++", "MySQL", "jQuery"],
		image: "/works/actuator-testing-tool/thumbnail.PNG",
	},
	{
		title: "Heart Rate Tracker",
		description:
			"Web app for registering heart-tracking devices and viewing their data, with full authentication and a health-instructor view of other users' data, shared by consent.",
		tags: ["Express", "MongoDB", "jQuery", "Materialize"],
		image: "/works/heart-app/thumbnail.png",
		sourceLink: "https://github.com/austip24/heart-track-app",
	},
	{
		title: "Geocache Web Application",
		description:
			"Interactive Google Map for exploring points of interest across Arizona by clicking the map or entering latitude/longitude coordinates.",
		tags: ["JavaScript", "PHP", "MySQL"],
		image: "/works/geocache-app/thumbnail.PNG",
		sourceLink: "https://github.com/austip24/geocache-web-app",
	},
];
