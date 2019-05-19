import axios from 'axios'

const toRestString = (v) => {
  if (typeof(v) === "object") v = JSON.stringify(v);
  return encodeURIComponent(v);
}

const ICalculator = {
  'add': (a,b) => {
    return axios({
      method: 'GET',
      url: 'http://127.0.0.1:8080/calc-api/' + "?a=" + toRestString(a) + "&b=" + toRestString(b)
    })
  },
  'subtract': (a,b) => {
    return axios({
      method: 'GET',
      url: 'http://127.0.0.1:8080/calc-api/subtract' + "?a=" + toRestString(a) + "&b=" + toRestString(b)
    })
  },
  'percent': (a) => {
    return axios({
      method: 'GET',
      url: 'http://127.0.0.1:8080/calc-api/percent' + "?a=" + toRestString(a)
    })
  },
  'divide': (a,b) => {
    return axios({
      method: 'GET',
      url: 'http://127.0.0.1:8080/calc-api/divide' + "?a=" + toRestString(a) + "&b=" + toRestString(b)
    })
  },
  'multiply': (a,b) => {
    return axios({
      method: 'GET',
      url: 'http://127.0.0.1:8080/calc-api/multiply' + "?a=" + toRestString(a) + "&b=" + toRestString(b)
    })
  }
}

export default ICalculator