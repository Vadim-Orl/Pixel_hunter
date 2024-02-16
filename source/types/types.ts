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
  answer: 'paint' | 'photo'
}

export interface IGameData {
  level: number,
  type: ITypeQuestion,
  task: string,
  options: IOption[]
}
