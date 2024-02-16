const nodeGameOptions = (option, typeQuestion) => {
  return `<div class="game__option">
          <img src="${option.src}" alt="${option.alt}" >
           ${nodeGameAnswer(option.inputName)}
          </div>`
}

const nodeGameAnswer = (inputName) => {
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
  // return ''
}

const typeQuestion = {
  singleQuestion: (options) => {
    return `<form class="game__content game__content--wide"">
                ${options.map((el) => nodeGameOptions(el, 'singleQuestion')).join('')}
                </form>`
  },

  doubleQuestion: (options) => {
    return `<form class="game__content">
                ${options.map((el) => nodeGameOptions(el, 'singleQuestion')).join('')}
                </form>`
  },

  tripleQuestion: (options) => {
    return `<form class="game__content game__content--triple">
                ${options.map((el) => nodeGameOptions(el, 'tripleQuestion')).join('')}
                </form>`
  },
}

export default typeQuestion;
