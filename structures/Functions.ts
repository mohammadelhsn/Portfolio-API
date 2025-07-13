export default class Function {
	functionName: string;
	signature: string;
	description: string;
	constructor(functionName: string, signature: string, description: string) {
		this.functionName = functionName;
		this.signature = signature;
		this.description = description;
	}
}
