export default class Constant {
	name: string;
	value: string;
	description?: string;
	constructor(name: string, value: string, description = '') {
		this.name = name;
		this.value = value;
		this.description = description;
	}
}
