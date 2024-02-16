import GAME_DATA from '../tmp/game-data.js'

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
  static testData() {
    return GAME_DATA;
  }

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



//# sourceMappingURL=loader.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ1dGlscy9sb2FkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdBTUVfREFUQSBmcm9tICcuLi90bXAvZ2FtZS1kYXRhLmpzJ1xuXG5jb25zdCBTRVJWRVJfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XG5cbmNvbnN0IGNoZWNrU3RhdHVzID0gKHJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xufVxuXG5jb25zdCBhZGFwdERhdGFGb3JTZXJ2ZXIgPSAocmVzdWx0R2FtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGlzRmFpbDogcmVzdWx0R2FtZS5pc0ZhaWwsXG4gICAgcmVzdWx0UG9pbnRzOiByZXN1bHRHYW1lLnJlc3VsdFBvaW50cyxcbiAgICByZXN1bHRzOiByZXN1bHRHYW1lLnN0YXRlLnJlc3VsdHMsXG4gIH1cbn1cblxuY29uc3QgdG9KU09OID0gKHJlcykgPT4gcmVzLmpzb24oKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVyIHtcbiAgc3RhdGljIHRlc3REYXRhKCkge1xuICAgIHJldHVybiBHQU1FX0RBVEE7XG4gIH1cblxuICBzdGF0aWMgbG9hZERhdGEoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZXRjaChgJHtTRVJWRVJfVVJMfS9zZXJ2ZXJgKVxuICAgICAgLnRoZW4oY2hlY2tTdGF0dXMpXG4gICAgICAudGhlbih0b0pTT04pXG4gIH1cblxuICBzdGF0aWMgbG9hZFJlc3VsdCgpIHtcbiAgICByZXR1cm4gd2luZG93LmZldGNoKGAke1NFUlZFUl9VUkx9L3N0YXRgKVxuICAgICAgLnRoZW4oY2hlY2tTdGF0dXMpXG4gICAgICAudGhlbih0b0pTT04pXG4gIH1cblxuICBzdGF0aWMgc2F2ZVJlc3VsdHMoZGF0YSkge1xuICAgIGNvbnN0IHN0YXREYXRhID0gYWRhcHREYXRhRm9yU2VydmVyKGRhdGEpO1xuICAgIGNvbnN0IHJlcXVlc3RTZXR0aW5ncyA9IHtcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHN0YXREYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB9O1xuICAgIHJldHVybiB3aW5kb3cuZmV0Y2goYCR7U0VSVkVSX1VSTH0vc3RhdGAsIHJlcXVlc3RTZXR0aW5ncylcbiAgICAgIC50aGVuKGNoZWNrU3RhdHVzKVxuICB9XG59XG5cblxuIl0sImZpbGUiOiJsb2FkZXIuanMifQ==
