import type { VercelRequest, VercelResponse } from '@vercel/node';
import BaseObj from '../../structures/BaseObj';

const courseCode = 'CP216';

export default function handler(req: VercelRequest, res: VercelResponse) {
	return res.status(200).json(
		new BaseObj({
			status: 200,
			statusMessage: `OK`,
			success: true,
			data: [
				`${courseCode}/                                   	- This one`,
				`${courseCode}/assignment                         	- Get all the assignment data`,
				`${courseCode}/assignment?assgnNum=01             	- Gets assignment 1 data`,
				`${courseCode}/assignment?assgnNum=01&taskNum=01  	- Gets assignment 1, Task 1`,
				`${courseCode}/lab/                               	- Get all the lab data`,
				`${courseCode}/lab?labNum=01/                     	- Gets Lab 1 data`,
				`${courseCode}/lab?labNum=01&taskNum=01/          	- Gets Lab 1, Task 1`,
				`${courseCode}/techdata/                          	- Gets the TechData`,
				`${courseCode}/topicsdata/                        	- Gets the TopicsData`,
			],
		})
	);
}
