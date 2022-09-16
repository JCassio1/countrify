"use strict"

const bodyContainer = document.querySelector("body")
const continentsContainer = document.querySelector(".continents")

const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

const errorCodes = {
  notFound: 404,
}

const maxCountriesPerContinent = 5 // change the number to display more countries per continent

const navBarTemplate = function (logoUrl) {
  return `
    <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div
      class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex items-center">
        <img
          src="${logoUrl}"
          class="h-10"
          alt="countrify Logo" />
      </a>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Search by country</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `
}

const continentDivTemplate = function (continentName) {
  return `
  <span
  ><h1 class="pl-7 pt-14 text-5xl font-extrabold dark:text-white ">${continentName}</h1></span
>
    <div class="continent pb-11 pl-5 pt-10 wrapper" id="${continentName}">
  </div>
    `
}

const getFirstObjEntry = function (obj) {
  return obj[Object.keys(obj)[0]]
}

const calculatePopulation = function (population) {
  return parseInt(population / 1000).toFixed(1)
}

const countryCardTemplate = function (countryData, index) {
  return ` <div
    id = "${index}"
    class="countryCard mr-4 w-80 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
    <a href="#">
      <img class="rounded-t-lg w-full h-40" src="${
        countryData.flags.png
      }" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5
          class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ${countryData.name.official}
        </h5>
      </a>
      <!-- List -->
      <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
          <li class="flex space-x-2">
              <!-- Icon -->
              <span>🗣</span>
              <span class="font-light leading-tight">${getFirstObjEntry(
                countryData.languages
              )}</span>
          </li>
          <li class="flex space-x-2">
              <!-- Icon -->
              <span>👨‍👧‍👦</span>
              <span class="font-light leading-tight">${calculatePopulation(
                countryData.population
              )} population</span>
          </li>
          <li class="flex space-x-2">
              <!-- Icon -->
              <span>🌎</span>
              <span class="font-light leading-tight">${
                countryData.continents[0]
              }</span>
          </li>
          <li class="flex space-x-2">
              <!-- Icon -->
              <span>🏜</span>
              <span class="font-light leading-tight">${
                countryData.landlocked ? "It is" : "Not"
              } land locked</span>
          </li>
      </ul>
    </div>
  </div>
    `
}

const errorHandler = function (errorCode) {
  let errorMessage = "Something went wrong. "

  switch (errorCode) {
    case errorCodes.notFound:
      errorMessage = "Country not found"
      break

    default:
      break
  }
  return errorMessage
}

const renderError = function (errorText) {
  const errorBanner = `
    <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
        <span class="font-medium">Something wrong happened!</span> ${errorText}
    </div>
    `
  bodyContainer.insertAdjacentHTML("afterbegin", errorBanner)
}

const renderCountryTemplate = function (continentData) {
  for (let index = 0; index < maxCountriesPerContinent; index++) {
    const nameOfContinent = document.getElementById(continentData[0].region)
    const countryCard = countryCardTemplate(continentData[index], index)
    nameOfContinent.insertAdjacentHTML("beforeend", countryCard)
  }
}

const renderNavBar = function () {
  const navBarPartial = navBarTemplate("/assets/logo/png-background.png")
  bodyContainer.insertAdjacentHTML("afterbegin", navBarPartial)
}

const renderContinentHeader = function () {
  continents.forEach((continent) => {
    const continentDiv = continentDivTemplate(continent)
    continentsContainer.insertAdjacentHTML("beforeend", continentDiv)
  })
}

const initialiseHTMLSetup = function () {
  renderNavBar()
  renderContinentHeader()
}

// ============== API CALLS ==================
const getRegionData = function (region) {
  fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(errorHandler(response.status))
      }

      return response.json()
    })
    .then((data) => {
      renderCountryTemplate(data)
    })
    .catch((error) => {
      console.error(`An error has occured. ${error}`)
      renderError(error)
    })
}

// ============== Function CALLS ==================
initialiseHTMLSetup()
for (let index = 0; index < continents.length; index++) {
  getRegionData(continents[index])
}
