const SERVER_URL = 'http://localhost:3001';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(`${response.status}: ${response.statusText}`);
}

const adaptDataForServer = (resultGame) => {
  return {
    isFail: resultGame.isFail,
    resultPoints: resultGame.resultPoints,
    results: resultGame.state.results,
  }
}

const toJSON = (res) => res.json();

export default class Loader {
  static loadData() {
    return window.fetch(`${SERVER_URL}/server`)
      .then(checkStatus)
      .then(toJSON)
  }

  static loadResult() {
    return window.fetch(`${SERVER_URL}/stat`)
      .then(checkStatus)
      .then(toJSON)
  }

  static saveResults(data) {
    const statData = adaptDataForServer(data);
    const requestSettings = {
      body: JSON.stringify(statData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    };
    return window.fetch(`${SERVER_URL}/stat`, requestSettings)
      .then(checkStatus)
  }
}
