import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
	return res.json({
		endpoints: [
			'api',
			'api/endpoints',
			'api/CP104',
			'api/CP104/assignment                         - Get all the assignment data',
			'api/CP104/assignment?assgnNum=01             - Gets assignment 1 data',
			'api/CP104/assignment?assgnNum=01&taskNum=01  - Gets assignment 1, Task 1',
			'api/CP104/lab/                               - Get all the lab data',
			'api/CP104/lab?labNum=01/                     - Gets Lab 1 data',
			'api/CP104/lab?labNum=01&taskNum=01/          - Gets Lab 1, Task 1',
			'api/CP104/techdata/                          - Gets the TechData',
			'api/CP104/topicsdata/                        - Gets the TopicsData',
			'api/CP164',
			'api/CP213',
			'api/CP216',
			'api/CP264',
		],
	});
}
