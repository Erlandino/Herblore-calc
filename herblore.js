async function apiCallPrices() {
  try {
    // Api call
    const res = await fetch("https://prices.runescape.wiki/api/v1/osrs/latest");

    // Handles the data received from api call
    const data = await res.json();

    return data.data;

    // Gives error message in console when there is an error
  } catch (error) {
    console.error(`Could not retrieve data: ${error}`);
  }
}

async function update() {
  const apiCallPriceData = await apiCallPrices();
  recipeChecker(null, apiCallPriceData);
}

// recipe checker
async function recipeChecker(recipe, recipedData) {
  document.getElementById("recipe-container").innerHTML = "";
  document.getElementById("recipeProfit-container").innerHTML = "";

  if (recipe == "superAntifire") {
    superAntifireCrafting(recipedData);
  } else if (recipe == "extendedAntiVenom") {
    extendedAntiVenomCrafting(recipedData);
  } else {
    superAntifireCrafting(recipedData);
  }
}

// recipe for superAntifireCrafting
function superAntifireCrafting(apiCallData) {
  // changes title to Super Antifire Recipe calc
  document.getElementById("recipe-title").innerHTML = "Super Antifire Recipe calc";

  //   Object made of goods in api call
  const superAntifireRecipe = {
    antifire: {
      high: apiCallData ? apiCallData[2452].high : 1184,
      low: apiCallData ? apiCallData[2452].low : 1169,
      id: "2452",
    },
    superiorDragonBones: {
      high: apiCallData ? apiCallData[22124].high : 20456,
      low: apiCallData ? apiCallData[22124].low : 20456,
      id: "22124",
    },
    superAntifire: {
      high: apiCallData ? apiCallData[21978].high : 22161,
      low: apiCallData ? apiCallData[21978].low : 21084,
      id: "21978",
    },
  };

  // object destructuring for superAntifireRecipe
  const { antifire, superiorDragonBones, superAntifire } = superAntifireRecipe;

  const lowLowHigh = 0.99 * superAntifire.high - (antifire.low + superiorDragonBones.low + 50);
  const highHighHigh = 0.99 * superAntifire.high - (antifire.high + superiorDragonBones.high + 50);
  const highHighLow = 0.99 * superAntifire.low - (antifire.high + superiorDragonBones.high + 50);
  const lowLowlow = 0.99 * superAntifire.low - (antifire.low + superiorDragonBones.low + 50);

  elementCreator(
    [lowLowHigh, highHighHigh, highHighLow, lowLowlow],
    ["low, low, high", "high, high, high", "high, high, low", "low, low, low"],
    superAntifireRecipe
  );
}

// recipe for extendedAntiVenomCrafting
function extendedAntiVenomCrafting(apiCallData) {
  // changes title to Extended anti-venom+ calc
  document.getElementById("recipe-title").innerHTML = "Extended anti-venom+ calc";

  //   Object made of goods in api call
  const extendedAntiVenomRecipe = {
    AntiVenom: {
      high: apiCallData ? apiCallData[12913].high : 13450,
      low: apiCallData ? apiCallData[12913].low : 13350,
      id: "2452",
    },
    AraxyteVenomSack: {
      high: apiCallData ? apiCallData[29784].high : 1735,
      low: apiCallData ? apiCallData[29784].low : 1622,
      id: "22124",
    },
    extendedAntiVenom: {
      high: apiCallData ? apiCallData[29824].high : 21290,
      low: apiCallData ? apiCallData[29824].low : 20602,
      id: "21978",
    },
  };

  // object destructuring for extendedAntiVenomRecipe
  const { AntiVenom, AraxyteVenomSack, extendedAntiVenom } = extendedAntiVenomRecipe;

  const lowLowHigh = 0.99 * extendedAntiVenom.high - (AntiVenom.low + AraxyteVenomSack.low * 4);
  const highHighHigh = 0.99 * extendedAntiVenom.high - (AntiVenom.high + AraxyteVenomSack.high * 4);
  const highHighLow = 0.99 * extendedAntiVenom.low - (AntiVenom.high + AraxyteVenomSack.high * 4);
  const lowLowlow = 0.99 * extendedAntiVenom.low - (AntiVenom.low + AraxyteVenomSack.low * 4);

  elementCreator(
    [lowLowHigh, highHighHigh, highHighLow, lowLowlow],
    ["low, low, high", "high, high, high", "high, high, low", "low, low, low"],
    extendedAntiVenomRecipe
  );
}

// creates elements for recipes
function elementCreator(profit, priceLevel, recipeData) {
  // loops trough recipeData object
  for (const [key, value] of Object.entries(recipeData)) {
    // key = name, value = high price, low price and id for name in api

    // capitalizes first letter for name
    let str = key;
    str = str.charAt(0).toUpperCase() + str.slice(1);

    // container element
    const container = document.createElement("div");

    //   name element
    const nameElenent = document.createElement("p");
    nameElenent.innerText = `${str}`;

    // price element
    const priceElement = document.createElement("p");
    priceElement.innerText = `${value.high}`;

    //  adds elements to their positions
    nameElenent.classList.add("goodsName");
    priceElement.classList.add("goodsPrice");
    container.appendChild(nameElenent);
    container.appendChild(priceElement);
    container.classList.add("container");
    document.getElementById("recipe-container").appendChild(container);
  }

  // loops trough profit array
  for (let i = 0; i < profit.length; i++) {
    // container element
    const calcContainer = document.createElement("div");

    // name element
    const calcText = document.createElement("p");
    calcText.innerText = `Profit (${priceLevel[i]})`;

    // price element
    const calcPrice = document.createElement("p");
    calcPrice.innerText = `${profit[i]}`;
    calcText.classList.add("goodsName");
    calcPrice.classList.add("goodsPrice");

    // adds all elements to their positions
    calcContainer.appendChild(calcText);
    calcContainer.appendChild(calcPrice);
    calcContainer.classList.add("container");
    document.getElementById("recipeProfit-container").appendChild(calcContainer);
  }
}

// updates the calc every hour
setInterval(update, 3600000);

// initial call
update();
