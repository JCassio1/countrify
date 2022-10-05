import { TIMEOUT_TIME } from "./configuration/config.js"
import errorHandler from "./errors.js"

const timeout = function (time) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${time} second`))
    }, time * 1000)
  })
}

export const fetchJsonData = async function (url) {
  try {
    const fetchData = fetch(url)
    const res = await Promise.race([fetchData, timeout(TIMEOUT_TIME)])
    const data = await res.json()

    if (!res.ok) throw new Error(errorHandler(res.status))

    return data
  } catch (err) {
    throw err
  }
}
