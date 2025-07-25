import { isObject } from './isObject';

export function isPlain(o: any) {
	var ctor, prot;

	if (isObject(o) === false) return false;

	// If has modified constructor
	ctor = o.constructor;
	if (ctor === undefined) return true;

	// If has modified prototype
	prot = ctor.prototype;
	if (isObject(prot) === false) return false;

	// If constructor does not have an Object-specific method
	if (prot.hasOwnProperty('isPrototypeOf') === false) {
		return false;
	}

	// Most likely a plain Object
	return true;
}
