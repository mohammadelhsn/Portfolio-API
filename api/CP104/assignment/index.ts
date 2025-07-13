import type { VercelRequest, VercelResponse } from '@vercel/node';
import BaseObj from '../../../structures/BaseObj';
import { AssignmentData } from '../../../data/cp104Data';

export default function handler(req: VercelRequest, res: VercelResponse) {
	const { assgnNum, taskNum } = req.query;
	if (assgnNum) {
		const assignment = AssignmentData.filter(
			(assgn) => assgn.id === `elha7950_a${assgnNum}`
		)[0];
		if (assignment) {
			if (assignment && taskNum) {
				const task = assignment.tasks.filter((t) => t.id === `t${taskNum}`)[0];

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
						data: assignment,
					})
				);
			}
		} else {
			return res.status(404).json(
				new BaseObj({
					status: 404,
					statusMessage: 'Assignment not found',
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
				data: AssignmentData,
			})
		);
	}
}
