export interface Work {
	id: number;
	title: string;
	stack: string[];
	description: string;
	thumbnailImage: string;
	video?: string;
	sourceLink?: string;
}

export const works: Work[] = [
	{
		id: 0,
		title: "Weather Tracking App",
		description:
			"A React-based web application that makes use of OpenWeatherAPI's daily forecast API to provide an interface that allows users to view the future daily forecast for a chosen location.",
		stack: ["React", "TypeScript", "WeatherAPI"],
		thumbnailImage: "/works/weather-app/thumbnail.png",
	},
	{
		id: 1,
		title: "Google Docs Clone",
		description:
			"Next.js web application that allows users to create, share, and edit documents with a rich text editor through Firebase's realtime firestore. Has both dark/light mode options, is built to be responsive, and supports Google sign-in.",
		stack: ["ReactJS", "NextJS", "Firebase", "Tailwind"],
		thumbnailImage: "/works/google-docs-clone/thumbnail.png",
	},
	{
		id: 2,
		title: "Heart Rate Tracker",
		description:
			'A web application that allows users to register and view data gathered from different heart tracking devices. Full support for user authentication with a "health instructor" page that allows a user to view data gathered from other user\'s devices upon agreement.',
		stack: ["HTML", "CSS", "JQuery", "Express", "MongoDB", "Materialize"],
		thumbnailImage: "/works/heart-app/thumbnail.png",
	},
	{
		id: 3,
		title: "Actuator Testing Tool",
		description:
			"University of Arizona's cross-disciplinary capstone project. Developed hardware and firmware for the testing tool along with a desktop application that interfaced with the testing device and actuator board(s). Code that performed testing on boards was written in Python, while UI/UX was written using HTML/CSS/JavaScript/JQuery",
		stack: [
			"Electron",
			"HTML",
			"CSS",
			"JQuery",
			"Bootstrap",
			"Python",
			"MySQL",
			"C++",
		],
		thumbnailImage: "/works/actuator-testing-tool/thumbnail.PNG",
	},
	{
		id: 4,
		title: "Geocache Web Application",
		description:
			"Developed an interative google map that allows users to view areas of interest across Arizona by clicking on the map or by specifying latitude/longitude coordinates.",
		stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
		thumbnailImage: "/works/geocache-app/thumbnail.PNG",
	},
	{
		id: 5,
		title: "Kalman Filter Simulation",
		description:
			"Course project on creating and analyzing an adaptive Kalman Filter, which is commonly used in motion tracking software. Developed a simulation tool that uses the filter to track and predict mouse movement with customizable parameters (i.e., noise, history size).",
		stack: ["Python", "Pygame"],
		thumbnailImage: "/works/kalman-filter/thumbnail.PNG",
	},
];
