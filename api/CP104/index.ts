import type { VercelRequest, VercelResponse } from '@vercel/node';
import BaseObj from '../../structures/BaseObj';

export default function handler(req: VercelRequest, res: VercelResponse) {
	return res.status(200).json(
		new BaseObj({
			status: 200,
			statusMessage: 'OK',
			success: true,
			data: [
				'CP104/                                   	- This one',
				'CP104/assignment                         	- Get all the assignment data',
				'CP104/assignment?assgnNum=01             	- Gets assignment 1 data',
				'CP104/assignment?assgnNum=01&taskNum=01  	- Gets assignment 1, Task 1',
				'CP104/lab/                               	- Get all the lab data',
				'CP104/lab?labNum=01/                     	- Gets Lab 1 data',
				'CP104/lab?labNum=01&taskNum=01/          	- Gets Lab 1, Task 1',
				'CP104/techdata/                          	- Gets the TechData',
				'CP104/topicsdata/                        	- Gets the TopicsData',
			],
		})
	);
}
