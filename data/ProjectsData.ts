/**
 * @description My name
 */
export const NAME = 'Mohammad El-Hassan';

/**
 * @description My username
 */
export const USERNAME = 'mohammadelhsn';

/**
 * @description My GitHub handle
 */
export const GITHUB_HANDLE = `@${USERNAME}`;

/**
 *
 */
export const LINKEDIN = 'https://www.linkedin.com/in/mohammadelhsn';

/**
 * @description My GitHub URL
 */
export const GITHUB = `https://github.com/${USERNAME}`;

/**
 * @description My YouTube URL
 */
export const YOUTUBE = `https://youtube.com/@${USERNAME}`;

/**
 * @description My Email
 */
export const EMAIL = `${USERNAME}@gmail.com`;

/**
 * @description My Base URL for my website
 */
export const baseURL = `https://${USERNAME}.github.io`;

/**
 * @description Type definition for each project and its fields
 *
 * @field {string} name - The projects name
 * @field {string} desc - The description of the project
 * @field {string} url - Link to the project
 */
export interface Projects {
	name: string;
	desc: string;
	url: string;
}

export const PROJECTS: Projects[] = [
	{
		name: 'Personal Portfolio Website',
		desc: 'A fully responsive portfolio website showcasing my skills, projects, and contact information. Built with HTML, CSS, and JavaScript.',
		url: baseURL,
	},
	{
		name: 'CP104 - Introduction to Programming with Python',
		desc: 'Coursework, assignments, and projects from CP104 at Wilfrid Laurier University. The course covers foundational programming concepts using Python, including variables, control structures, functions, object-oriented programming, and basic algorithms.',
		url: `${baseURL}/CP104`,
	},
	{
		name: 'CP164 - Data Structures I with Python',
		desc: 'Fundamental data structures in Python including lists, stacks, queues, and trees, with a focus on algorithm design and efficiency.',
		url: `${baseURL}/CP164`,
	},
	{
		name: 'CP213 - Object-Oriented Programming with Java',
		desc: 'Java-based projects exploring object-oriented principles such as inheritance, polymorphism, interfaces, and GUI development.',
		url: `${baseURL}/CP213`,
	},
	{
		name: 'CP216 - Introduction to Microprocessors',
		desc: 'Coursework and projects focused on microprocessor systems using ARMv7, covering assembly programming, memory, and embedded systems.',
		url: `${baseURL}/CP216`,
	},
	{
		name: 'CP264 - Data Structures II with C',
		desc: 'Advanced data structures and algorithms in C, including trees, hashing, recursion, graphs, and algorithm analysis.',
		url: `${baseURL}/CP264`,
	},
	{
		name: 'API-TS',
		desc: 'A very simple API using Express and Typescript',
		url: `${GITHUB}/API-TS`,
	},
	{
		name: 'Portfolio API',
		desc: 'Backend API powering this portfolio site — handles project, contact, and metadata endpoints.',
		url: 'https://portfolio-api-fawn-two.vercel.app/api',
	},
	{
		name: 'MindCore',
		desc: 'A work-in-progress journaling app designed to help users reflect, track mood, and organize thoughts securely.',
		url: 'https://mindcore-dev.web.app/#/',
	},
	{
		name: 'DevTask-Planner',
		desc: 'A productivity-focused task manager built for developers. Supports task creation with tagging, lifecycles (alpha/beta/stable), priorities, types (feature/bug), and category sorting (short/medium/long term, doing, done).',
		url: 'https://devtask-planner.web.app/',
	},
];
