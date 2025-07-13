import type {
	FunctionsData,
	TaskData,
	ConstantsData,
} from '../interfaces/General';

export default class Assessment {
	name: string;
	id: string;
	tasks: TaskData[];
	functions?: FunctionsData[];
	constants?: ConstantsData[];
	constructor(
		name: string,
		id: string,
		tasks: TaskData[],
		functions: FunctionsData[],
		constants: ConstantsData[]
	) {
		this.name = name;
		this.id = id;
		this.tasks = tasks;
		this.functions = functions;
		this.constants = constants;
	}
}
