// /api/courses/[courseId].ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import BaseObj from '../structures/BaseObj';

import * as CP104Data from '../data/cp104Data';
import * as CP164Data from '../data/cp164Data';
import * as CP213Data from '../data/cp213Data';
import * as CP216Data from '../data/cp216Data';
import * as CP264Data from '../data/cp264Data';

// Map courseId to its corresponding data module
const courseMap: Record<string, any> = {
	cp104: CP104Data,
	cp164: CP164Data,
	cp213: CP213Data,
	cp216: CP216Data,
	cp264: CP264Data,
};

export default function handler(req: VercelRequest, res: VercelResponse) {
	const allowedOrigins = [
		'https://mohammadelhsn.github.io',
		'http://localhost:5173',
	]; // your GitHub Pages URL
	const origin = req.headers.origin;

	if (origin && allowedOrigins.includes(origin)) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}
	// Allow HTTP methods your API supports
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
	// Allow headers your frontend will send
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	// Handle OPTIONS preflight requests
	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}
	const { course } = req.query;
	const { data, assessNum, taskNum } = req.query;

	// Validate course
	const courseData = courseMap[String(course).toLowerCase()];
	if (!courseData) {
		return res.status(404).json(
			new BaseObj({
				status: 404,
				statusMessage: 'Course not found',
				success: false,
			})
		);
	}

	const {
		LabData,
		PAGEDATA,
		TechData,
		TopicsData,
		AssignmentData,
		EXAMPLEDATA,
	} = courseData;

	switch (data) {
		case 'assignments': {
			if (assessNum) {
				const assignment = AssignmentData.find(
					(a: any) => a.id === `elha7950_a${assessNum}`
				);
				if (!assignment) {
					return res.status(404).json(
						new BaseObj({
							status: 404,
							statusMessage: 'Assignment not found',
							success: false,
						})
					);
				}
				if (taskNum) {
					const task = assignment.tasks.find(
						(t: any) => t.id === `t${taskNum}`
					);
					if (!task) {
						return res.status(404).json(
							new BaseObj({
								status: 404,
								statusMessage: 'Task not found',
								success: false,
							})
						);
					}
					return res.status(200).json(
						new BaseObj({
							status: 200,
							statusMessage: 'OK',
							success: true,
							data: task,
						})
					);
				}
				return res.status(200).json(
					new BaseObj({
						status: 200,
						statusMessage: 'OK',
						success: true,
						data: assignment,
					})
				);
			}
			// Return all assignments
			return res.status(200).json(
				new BaseObj({
					status: 200,
					statusMessage: 'OK',
					success: true,
					data: AssignmentData,
				})
			);
		}

		case 'labs': {
			if (assessNum) {
				const lab = LabData.find((l: any) => l.id === `elha7950_l${assessNum}`);
				if (!lab) {
					return res.status(404).json(
						new BaseObj({
							status: 404,
							statusMessage: 'Lab not found',
							success: false,
						})
					);
				}
				if (taskNum) {
					const task = lab.tasks.find((t: any) => t.id === `t${taskNum}`);
					if (!task) {
						return res.status(404).json(
							new BaseObj({
								status: 404,
								statusMessage: 'Task not found',
								success: false,
							})
						);
					}
					return res.status(200).json(
						new BaseObj({
							status: 200,
							statusMessage: 'OK',
							success: true,
							data: task,
						})
					);
				}
				return res.status(200).json(
					new BaseObj({
						status: 200,
						statusMessage: 'OK',
						success: true,
						data: lab,
					})
				);
			}

			// Return all labs
			return res.status(200).json(
				new BaseObj({
					status: 200,
					statusMessage: 'OK',
					success: true,
					data: LabData,
				})
			);
		}

		case 'pageData':
			return res.status(200).json(
				new BaseObj({
					status: 200,
					statusMessage: 'OK',
					success: true,
					data: PAGEDATA,
				})
			);
		case 'examples':
			return res.status(200).json(
				new BaseObj({
					status: 200,
					statusMessage: 'OK',
					success: true,
					data: EXAMPLEDATA,
				})
			);
		case 'techData':
			return res.status(200).json(
				new BaseObj({
					status: 200,
					statusMessage: 'OK',
					success: true,
					data: TechData,
				})
			);

		case 'topicsData':
			return res.status(200).json(
				new BaseObj({
					status: 200,
					statusMessage: 'OK',
					success: true,
					data: TopicsData,
				})
			);

		default:
			return res.status(400).json(
				new BaseObj({
					status: 400,
					statusMessage: 'Invalid data type requested',
					success: false,
				})
			);
	}
}
