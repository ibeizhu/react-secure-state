export function isObject(val: any) {
	try {
		return Object.prototype.toString.call(val) === '[object Object]';
	} catch (error) {
		return val != null && typeof val === 'object' && Array.isArray(val) === false;
	}
}
