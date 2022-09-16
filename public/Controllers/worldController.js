"use strict"

const bodyContainer = document.querySelector("body")
const continentsContainer = document.querySelector(".continents")

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
    <div class="continent pl-5 pt-10" id="${continentName}">
    <span
      ><h1 class="text-5xl font-extrabold dark:text-white">${continentName}</h1></span
    >
  </div>
    `
}

const appendNavBar = function () {
  const navBarPartial = navBarTemplate("/assets/logo/png-background.png")
  bodyContainer.insertAdjacentHTML("afterbegin", navBarPartial)
}

const appendContinentHeader = function () {
  //prettier-ignore
  const continents = ['Africa', 'Europe', 'North America', 'South America', 'Australia', 'Asia', 'Antarctica']

  continents.forEach((continent) => {
    const continentDiv = continentDivTemplate(continent)
    continentsContainer.insertAdjacentHTML("beforeend", continentDiv)
  })
}

const initialiseHTMLSetup = function () {
  appendNavBar()
  appendContinentHeader()
}

// ============== Function CALLS ==================
initialiseHTMLSetup()

// ============== API CALLS ==================
const getRegionData = function (region) {
  fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      return `An error has occured. ${error}`
    })
}
