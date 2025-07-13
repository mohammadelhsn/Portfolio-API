import type { VercelRequest, VercelResponse } from '@vercel/node';
import BaseObj from '../../structures/BaseObj';

const courseCode = 'CP264';

export default function handler(req: VercelRequest, res: VercelResponse) {
	return res.status(200).json(
		new BaseObj({
			status: 200,
			statusMessage: `OK`,
			success: true,
			data: [
				`${courseCode}/                                   	- This one`,
				`${courseCode}/techdata/                          	- Gets the TechData`,
				`${courseCode}/topicsdata/                        	- Gets the TopicsData`,
			],
		})
	);
}
