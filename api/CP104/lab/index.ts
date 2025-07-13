import type { VercelRequest, VercelResponse } from '@vercel/node';
import BaseObj from '../../../structures/BaseObj';
import { LabData } from '../../../data/cp104Data';

export default function handler(req: VercelRequest, res: VercelResponse) {
	const { labNum, taskNum } = req.query;
	if (labNum) {
		const lab = LabData.filter((l) => l.id === `elha7950_l${labNum}`)[0];
		if (lab) {
			if (lab && taskNum) {
				const task = lab.tasks.filter((t) => t.id === `t${taskNum}`)[0];

				if (task) {
					return res.status(200).json(
						new BaseObj({
							status: 200,
							statusMessage: 'OK',
							success: true,
							data: task,
						})
					);
				} else {
					return res.status(404).json(
						new BaseObj({
							status: 404,
							statusMessage: 'Data not found!',
							success: false,
						})
					);
				}
			} else {
				return res.status(200).json(
					new BaseObj({
						status: 200,
						statusMessage: 'OK',
						success: true,
						data: lab,
					})
				);
			}
		} else {
			return res.status(404).json(
				new BaseObj({
					status: 404,
					statusMessage: 'Lab not found',
					success: false,
				})
			);
		}
	} else {
		return res.status(200).json(
			new BaseObj({
				status: 200,
				statusMessage: 'OK',
				success: true,
				data: LabData,
			})
		);
	}
}
