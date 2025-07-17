import { getValue, setValue, isObject, deepClone } from '../utils';

export function extractFields(data: Record<string, any> = {}, fields: string[] = []): Record<string, any> {
	if (!isObject(data) || !Array.isArray(fields)) return {};

	let values = {};
	fields.forEach((name) => {
		const val = getValue(data, name);
		setValue(values, name, deepClone(val));
	});
	return values;
}
