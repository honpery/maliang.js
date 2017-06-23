/**
 * maliang.js
 */
import { Draw } from './draw';
import { Canvas, Ctx, CtxType, IPoint } from './metadata';
import { err } from './utils';

export class Maliang {

	// canvas element.
	public canvas?: Canvas;

	// canvas context.
	public ctx: Ctx;

	// context type.
	public ctxType?: CtxType;

	constructor(selector: string) {
		let ctx: Ctx = null;
		let elm: Canvas = null;
		if (selector) {
			elm = document.querySelector(selector) as HTMLCanvasElement;

			if (!elm) {
				err('Current canvas selector not find.');
			}

			if (!elm.getContext) {
				err('Current browser don\'t support canvas.');
			}

			ctx = elm.getContext('2d');
		}

		this.canvas = elm;
		this.ctx = ctx;
	}

	// start draw.
	public start(x: number, y: number) {
		return Draw.create(this.ctx, { x, y });
	}

}
