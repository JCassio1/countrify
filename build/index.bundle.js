(()=>{"use strict";const n=["Africa","Americas","Asia","Europe","Oceania"],e=document.querySelector("body"),t=document.querySelector(".continents"),r=function(n,e){return` <div\n    id = "${e}"\n    class="countryCard mr-4 w-80 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"\n    >\n    <a href="#">\n      <img class="rounded-t-lg w-full h-40" src="${n.flags.png}" alt="" />\n    </a>\n    <div class="p-5">\n      <a href="#">\n        <h5\n          class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">\n          ${n.name.official}\n        </h5>\n      </a>\n      \x3c!-- List --\x3e\n      <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">\n          <li class="flex space-x-2">\n              \x3c!-- Icon --\x3e\n              <span>🗣</span>\n              <span class="font-light leading-tight">${r=n.languages,r[Object.keys(r)[0]]}</span>\n          </li>\n          <li class="flex space-x-2">\n              \x3c!-- Icon --\x3e\n              <span>👨‍👧‍👦</span>\n              <span class="font-light leading-tight">${t=n.population,parseInt(t/1e3).toFixed(1)} population</span>\n          </li>\n          <li class="flex space-x-2">\n              \x3c!-- Icon --\x3e\n              <span>🌎</span>\n              <span class="font-light leading-tight">${n.continents[0]}</span>\n          </li>\n          <li class="flex space-x-2">\n              \x3c!-- Icon --\x3e\n              <span>🏜</span>\n              <span class="font-light leading-tight">${n.landlocked?"It is":"Not"} land locked</span>\n          </li>\n      </ul>\n    </div>\n  </div>\n    `;var t,r},a=function(n){(async function(n){try{return await async function(n){try{const e=fetch(n),t=await Promise.race([e,new Promise((function(n,e){setTimeout((function(){e(new Error("Request took too long! Timeout after 100 second"))}),1e5)}))]),r=await t.json();if(!t.ok)throw new Error(`${r.message} (${t.status})`);return r}catch(n){throw n}}(`https://restcountries.com/v3.1/region/${n}`)}catch(n){throw console.error(`${n} error`),n}})(`${n}`).then((n=>{!function(n){for(let e=0;e<5;e++){const t=document.getElementById(n[0].region),a=r(n[e],e);t.insertAdjacentHTML("beforeend",a)}}(n)})).catch((n=>{console.error(`An error has occured. ${n}`),function(n){const t=`\n    <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">\n        <span class="font-medium">Something wrong happened!</span> ${n}\n    </div>\n    `;e.insertAdjacentHTML("afterbegin",t)}(n)}))};e.insertAdjacentHTML("afterbegin",'\n    <nav\n    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">\n    <div\n      class="container flex flex-wrap justify-between items-center mx-auto">\n      <a href="#" class="flex items-center">\n        <img\n          src="/assets/logo/png-background.png"\n          class="h-10"\n          alt="countrify Logo" />\n      </a>\n      <div class="hidden w-full md:block md:w-auto" id="navbar-default">\n        <ul\n          class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">\n          <li>\n            <a\n              href="#"\n              class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"\n              aria-current="page"\n              >Home</a\n            >\n          </li>\n          <li>\n            <a\n              href="#"\n              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"\n              >Search by country</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n    '),n.forEach((n=>{const e=`\n  <span\n  ><h1 class="pl-7 pt-14 text-5xl font-extrabold dark:text-white ">${r=n}</h1></span\n>\n    <div class="continent pb-11 pl-5 pt-10 wrapper" id="${r}">\n  </div>\n    `;var r;t.insertAdjacentHTML("beforeend",e)}));for(let e=0;e<n.length;e++)a(n[e])})();