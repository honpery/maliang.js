/**
 * draw
 */
import { Color, Ctx, IPoint } from './metadata';

export interface IRectStyle {
	borderRadius?: number;
	background?: Color;
}

export interface ILineStyle {
	width?: number;
	color?: Color;
}

export interface ICircleStyle {
	background?: Color;
}

export class Draw {

	public static create(ctx: Ctx, _startPoint: IPoint) {
		if (!Draw._instance) {
			Draw._instance = new Draw(ctx, _startPoint);
		}
		return Draw._instance;
	}

	private static _instance: Draw;

	private _ctx: Ctx;

	private _startPoint: IPoint;

	constructor(ctx: Ctx, startPoint: IPoint) {
		this._ctx = ctx;
		this._startPoint = startPoint;
	}

	// draw line
	public line(endPoint: IPoint, style?: ILineStyle) {
		//
	}

	// draw rect
	public rect(width: number, height: number, style?: IRectStyle) {
		//
	}

	// draw circle
	public circle(xR: number, yR?: number, style?: ICircleStyle) {
		//
	}
}
