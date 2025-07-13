import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PAGEDATA } from '../../../data/cp213Data';
import BaseObj from '../../../structures/BaseObj';

export default function handler(req: VercelRequest, res: VercelResponse) {
	return res.status(200).json(
		new BaseObj({
			status: 200,
			success: true,
			statusMessage: 'OK',
			data: PAGEDATA,
		})
	);
}
