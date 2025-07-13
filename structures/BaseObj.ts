import Types from '../interfaces/BaseObj';

export default class BaseObj {
	success: boolean;
	status: number | null;
	statusMessage: string | null;
	data: object | null;
	constructor(opts: Types.Opts) {
		this.success = opts.success;
		this.status = opts.status;
		this.statusMessage = opts.statusMessage;
		this.data = opts.data ? opts.data : null;
	}
}
