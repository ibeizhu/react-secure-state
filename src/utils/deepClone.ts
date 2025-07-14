import { hasOwnProperty } from './hasOwnProperty';

export function deepClone(obj: any): any {
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}

	if (obj instanceof Date) {
		return new Date(obj);
	}

	if (Array.isArray(obj)) {
		const arrCopy = [];
		for (let index = 0; index < obj.length; index++) {
			arrCopy[index] = deepClone(obj[index]);
		}
		return arrCopy;
	}

	const objCopy: Record<string, any> = {};
	for (const key in obj) {
		if (hasOwnProperty(obj, key)) {
			objCopy[key] = deepClone(obj[key]);
		}
	}
	return objCopy;
}
