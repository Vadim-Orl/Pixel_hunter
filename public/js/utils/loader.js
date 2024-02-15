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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ1dGlscy9sb2FkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdBTUVfREFUQSBmcm9tICcuLi90bXAvZ2FtZS1kYXRhLmpzJ1xuXG5jb25zdCBTRVJWRVJfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XG5cblxuY29uc3QgY2hlY2tTdGF0dXMgPSAocmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG59XG5cbmNvbnN0IGFkYXB0RGF0YUZvclNlcnZlciA9IChyZXN1bHRHYW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaXNGYWlsOiByZXN1bHRHYW1lLmlzRmFpbCxcbiAgICByZXN1bHRQb2ludHM6IHJlc3VsdEdhbWUucmVzdWx0UG9pbnRzLFxuICAgIHJlc3VsdHM6IHJlc3VsdEdhbWUuc3RhdGUucmVzdWx0cyxcbiAgfVxufVxuXG5jb25zdCB0b0pTT04gPSAocmVzKSA9PiByZXMuanNvbigpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXIge1xuICBzdGF0aWMgdGVzdERhdGEoKSB7XG4gICAgcmV0dXJuIEdBTUVfREFUQTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkRGF0YSgpIHtcbiAgICByZXR1cm4gd2luZG93LmZldGNoKGAke1NFUlZFUl9VUkx9L3NlcnZlcmApXG4gICAgICAudGhlbihjaGVja1N0YXR1cylcbiAgICAgIC50aGVuKHRvSlNPTilcbiAgfVxuXG4gIHN0YXRpYyBsb2FkUmVzdWx0KCkge1xuICAgIHJldHVybiB3aW5kb3cuZmV0Y2goYCR7U0VSVkVSX1VSTH0vc3RhdGApXG4gICAgICAudGhlbihjaGVja1N0YXR1cylcbiAgICAgIC50aGVuKHRvSlNPTilcbiAgfVxuXG4gIHN0YXRpYyBzYXZlUmVzdWx0cyhkYXRhKSB7XG4gICAgY29uc3Qgc3RhdERhdGEgPSBhZGFwdERhdGFGb3JTZXJ2ZXIoZGF0YSk7XG4gICAgY29uc3QgcmVxdWVzdFNldHRpbmdzID0ge1xuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc3RhdERhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIH07XG4gICAgcmV0dXJuIHdpbmRvdy5mZXRjaChgJHtTRVJWRVJfVVJMfS9zdGF0YCwgcmVxdWVzdFNldHRpbmdzKVxuICAgICAgLnRoZW4oY2hlY2tTdGF0dXMpXG4gIH1cbn1cblxuXG4iXSwiZmlsZSI6ImxvYWRlci5qcyJ9
