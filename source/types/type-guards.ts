import { IStateGame } from "../js/utils/bisnesFunction";

export function isGameModel(model: IStateGame | Error | number): model is IStateGame{
  return (model as IStateGame).level !== undefined;
}