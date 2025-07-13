export default class Task {
	name: string;
	id: string;
	description: string;
	objectives: string[]; // list of goals or objectives
	sampleOutput: string; // example output or result, as a string
	skills: string[]; // skills or tech demonstrated, e.g. ["Python", "Multiline Strings"]
	constructor(
		name: string,
		id: string,
		description: string,
		objectives: string[],
		sampleOutput: string,
		skills: string[]
	) {
		this.name = name;
		this.id = id;
		this.description = description;
		this.objectives = objectives;
		this.sampleOutput = sampleOutput;
		this.skills = skills;
	}
}
