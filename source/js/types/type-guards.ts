import { IStateGame } from "./types.js";

export function isGameModel(model: IStateGame | Error | number): model is IStateGame{
  return (model as IStateGame).level !== undefined;
}

export function isStringArr(arr: unknown[]): arr is string[] {
  return arr.every(el => typeof el === "string");
}