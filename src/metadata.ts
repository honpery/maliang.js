
// canvas ctx type.
export type Ctx = CanvasRenderingContext2D | WebGLRenderingContext | null;

export type CtxType = '2d' | 'webgl' | 'experimental-webgl' | string;

// canvas element.
export type Canvas = HTMLCanvasElement | null;

// color type.
export type Color = string;

// point type.
export interface IPoint {
	x: number;
	y: number;
}
