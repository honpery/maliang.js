/**
 * utils.
 */

const { toString } = Object.prototype;

/**
 * check is string.
 */
export function isString(value: any) {
	return typeof value === 'string';
}

/**
 * check is object.
 */
export function isObject(value: any) {
	return toString.call(value) === '[object Object]';
}

/**
 * throw error.
 */
export function err(message: string) {
	throw new Error(message);
}
