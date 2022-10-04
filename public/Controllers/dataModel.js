import { API_URL } from "./configuration/config.js"
import { fetchJsonData } from "./helpers"

export const loadContinent = async function (continent) {
  try {
    const data = await fetchJsonData(`${API_URL}${continent}`)

    return data
  } catch (err) {
    // Temp error handling
    console.error(`${err} error`)
    throw err
  }
}
