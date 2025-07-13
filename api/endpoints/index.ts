import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
	return res.json({
		endpoints: [
			'api',
			'api/endpoints',
			'api/CP104',
			'api/CP164',
			'api/CP213',
			'api/CP216',
			'api/CP264',
		],
	});
}
