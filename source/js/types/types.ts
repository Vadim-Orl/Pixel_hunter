export interface IGameData {
  level: number,
  type: ITypeQuestion,
  task: string,
  options: IOption[]
}
// модель игры

export interface IStateGame {
  results: TResul[],
  level: number,
  lives: number,
  time: number,
  questions: number
}

export interface IResultGame {
  isFail: boolean,
  resultPoints: number,
  results: TResul[],
  id: number
}

export type TResul = 'wrong' | 'slow' |'fast'| 'correct' | 'unknown'

// Свойства ответов
export type TypeVarAnswer = 'paint' | 'photo'

export enum TypeInputName {
  question1 = 'question1',
  question2 = 'question2'
}

export enum TypeQuestion {
  doubleQuestion = 'doubleQuestion',
  singleQuestion = 'singleQuestion',
  tripleQuestion = 'tripleQuestion'
}

export type ITypeQuestion = `${TypeQuestion}`
export type ITypeInputName = `${TypeInputName}`


export interface IOption {
  alt: string,
  src: string,
  inputName?: ITypeInputName,
  answer: TypeVarAnswer
}
