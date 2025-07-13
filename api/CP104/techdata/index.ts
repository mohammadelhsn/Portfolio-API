import type { VercelRequest, VercelResponse } from '@vercel/node';
import BaseObj from '../../../structures/BaseObj';
import { TechData } from '../../../data/cp104Data';

export default function handler(req: VercelRequest, res: VercelResponse) {
	return res
		.status(200)
		.json(
			new BaseObj({
				status: 200,
				statusMessage: 'OK',
				success: true,
				data: TechData,
			})
		);
}
