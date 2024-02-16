import { IStateGame } from "../utils/bisnesFunction";

export function isGameModel(model: IStateGame | Error | number): model is IStateGame{
  return (model as IStateGame).level !== undefined;
}