import { IOption, ITypeInputName } from "../types/types.js"


const nodeGameOptions = (option: IOption) => {
  return `<div class="game__option">
          <img src="${option.src}" alt="${option.alt}" >
           ${option.inputName && nodeGameAnswer(option.inputName)}
          </div>`
}

const nodeGameAnswer = (inputName: ITypeInputName) => {
  if (inputName) {
    return `<label class="game__answer game__answer--photo">
              <input name="${inputName}" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="${inputName}" type="radio" value="paint">
              <span>Рисунок</span>
            </label>`
  }
  return ''
}

const typeQuestion = {
  singleQuestion: (options: IOption[]) => {
    return `<form class="game__content game__content--wide"">
                ${options.map((el: IOption) => nodeGameOptions(el)).join('')}
                </form>`
  },

  doubleQuestion: (options: IOption[]) => {
    return `<form class="game__content">
                ${options.map((el: IOption) => nodeGameOptions(el)).join('')}
                </form>`
  },

  tripleQuestion: (options: IOption[]) => {
    return `<form class="game__content game__content--triple">
                ${options.map((el: IOption) => nodeGameOptions(el)).join('')}
                </form>`
  },
}

export default typeQuestion;
