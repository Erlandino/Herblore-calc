let apiData; // Variable to hold the data

async function apiCallPrices() {
  try {
    // Api call
    // const res = await fetch("https://prices.runescape.wiki/api/v1/osrs/latest");

    // Handles the data received from api call
    const data = await res.json();

    apiData = data.data; // Save the data

    return data.data;

    // Gives error message in console when there is an error
  } catch (error) {
    console.error(`Could not retrieve data: ${error}`);
  }
}

async function update() {
  await apiCallPrices();
  recipeChecker();
}

let currentRecipe; // Variable for current recipe on screen

// recipe checker
async function recipeChecker(recipe) {
  recipe ? (currentRecipe = recipe) : "";

  document.querySelector(".static-prices-container").innerHTML = "";

  if (currentRecipe == "superAntifire") {
    superAntifireCrafting();
  } else if (currentRecipe == "extendedAntiVenom") {
    extendedAntiVenomCrafting();
  } else {
    superAntifireCrafting();
  }
}

// recipe for superAntifireCrafting
function superAntifireCrafting(apiCallData) {
  // changes title to Super Antifire Recipe calc
  document.getElementById("recipe-title").innerHTML = "Super Antifire Recipe calc";

  //   Object made of goods in api call
  const superAntifireRecipe = {
    antifire: {
      high: apiData ? apiData[2452].high : 1184,
      low: apiData ? apiData[2452].low : 1169,
      id: "2452",
    },
    superiorDragonBones: {
      high: apiData ? apiData[22124].high : 20456,
      low: apiData ? apiData[22124].low : 20456,
      id: "22124",
    },
    superAntifire: {
      high: apiData ? apiData[21978].high : 22161,
      low: apiData ? apiData[21978].low : 21084,
      id: "21978",
    },
  };

  // object destructuring for superAntifireRecipe
  const { antifire, superiorDragonBones, superAntifire } = superAntifireRecipe;

  const highHighLow = 0.99 * (superAntifire.low - (antifire.high + superiorDragonBones.high + 50));
  const highLowHigh = 0.99 * (superAntifire.high - (antifire.high + superiorDragonBones.low + 50));
  const highHighHigh =
    0.99 * (superAntifire.high - (antifire.high + superiorDragonBones.high + 50));
  const highLowLow = 0.99 * (superAntifire.low - (antifire.high + superiorDragonBones.low + 50));

  const lowHighLow = 0.99 * (superAntifire.low - (antifire.low + superiorDragonBones.high + 50));
  const lowLowHigh = 0.99 * (superAntifire.high - (antifire.low + superiorDragonBones.low + 50));
  const lowHighHigh = 0.99 * (superAntifire.high - (antifire.low + superiorDragonBones.high + 50));
  const lowLowlow = 0.99 * (superAntifire.low - (antifire.low + superiorDragonBones.low + 50));

  elementCreator(
    [
      { name: "highHighLow", price: highHighLow, color: "" },
      { name: "highLowHigh", price: highLowHigh, color: "" },
      { name: "highHighHigh", price: highHighHigh, color: "" },
      { name: "highLowLow", price: highLowLow, color: "" },
      { name: "lowHighLow", price: lowHighLow, color: "" },
      { name: "lowLowHigh", price: lowLowHigh, color: "" },
      { name: "lowHighHigh", price: lowHighHigh, color: "" },
      { name: "lowLowLow", price: lowLowlow, color: "" },
    ],
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
      high: apiData ? apiData[12913].high : 13450,
      low: apiData ? apiData[12913].low : 13350,
      id: "2452",
    },
    AraxyteVenomSack: {
      high: apiData ? apiData[29784].high : 1735,
      low: apiData ? apiData[29784].low : 1622,
      id: "22124",
    },
    extendedAntiVenom: {
      high: apiData ? apiData[29824].high : 21290,
      low: apiData ? apiData[29824].low : 20602,
      id: "21978",
    },
  };

  // object destructuring for extendedAntiVenomRecipe
  const { AntiVenom, AraxyteVenomSack, extendedAntiVenom } = extendedAntiVenomRecipe;

  const highHighLow = 0.99 * (extendedAntiVenom.low - (AntiVenom.high + AraxyteVenomSack.high * 4));
  const highLowHigh = 0.99 * (extendedAntiVenom.high - (AntiVenom.high + AraxyteVenomSack.low * 4));
  const highHighHigh =
    0.99 * (extendedAntiVenom.high - (AntiVenom.high + AraxyteVenomSack.high * 4));
  const highLowLow = 0.99 * (extendedAntiVenom.low - (AntiVenom.high + AraxyteVenomSack.low * 4));

  const lowHighLow = 0.99 * (extendedAntiVenom.low - (AntiVenom.low + AraxyteVenomSack.high * 4));
  const lowLowHigh = 0.99 * (extendedAntiVenom.high - (AntiVenom.low + AraxyteVenomSack.low * 4));
  const lowHighHigh = 0.99 * (extendedAntiVenom.high - (AntiVenom.low + AraxyteVenomSack.high * 4));
  const lowLowlow = 0.99 * (extendedAntiVenom.low - (AntiVenom.low + AraxyteVenomSack.low * 4));

  elementCreator(
    [
      { name: "highHighLow", price: highHighLow, color: "" },
      { name: "highLowHigh", price: highLowHigh, color: "" },
      { name: "highHighHigh", price: highHighHigh, color: "" },
      { name: "highLowLow", price: highLowLow, color: "" },
      { name: "lowHighLow", price: lowHighLow, color: "" },
      { name: "lowLowHigh", price: lowLowHigh, color: "" },
      { name: "lowHighHigh", price: lowHighHigh, color: "" },
      { name: "lowLowLow", price: lowLowlow, color: "" },
    ],
    extendedAntiVenomRecipe
  );
}

// creates elements for recipes
function elementCreator(profit, recipeData) {
  // loops trough recipeData object
  for (const [index, [key, value]] of Object.entries(recipeData).entries()) {
    // key = name, value = high price, low price and id for name in api

    const staticTableBody = document.querySelector(".static-prices-container");

    // capitalizes first letter for name
    let str = key;
    str = str.charAt(0).toUpperCase() + str.slice(1);

    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.innerText = `${str}`;

    const tdHigh = document.createElement("td");
    tdHigh.innerText = `${value.high}`;

    const tdLow = document.createElement("td");
    tdLow.innerText = `${value.low}`;

    tr.appendChild(th);
    tr.appendChild(tdHigh);
    tr.appendChild(tdLow);
    staticTableBody.appendChild(tr);

    switch (index) {
      case 0:
        document.querySelector(".first-reagent").innerHTML = str;
        break;
      case 1:
        document.querySelector(".second-reagent").innerHTML = str;
        break;
      default:
        document.querySelector(".product").innerHTML = str;
    }

    // // container element
    // const container = document.createElement("div");

    // //   name element
    // const nameElenent = document.createElement("p");
    // nameElenent.innerText = `${str}`;

    // // price element
    // const priceElement = document.createElement("p");
    // priceElement.innerText = `${value.high}`;

    // //  adds elements to their positions
    // nameElenent.classList.add("goodsName");
    // priceElement.classList.add("goodsPrice");
    // container.appendChild(nameElenent);
    // container.appendChild(priceElement);
    // container.classList.add("container");
    // document.getElementById("recipe-container").appendChild(container);
  }

  profit.sort((a, b) => a.price - b.price);

  const minPrice = profit[0].price;
  const maxPrice = profit[profit.length - 1].price;

  profit.forEach((item) => {
    const normalizedPrice = item.price / maxPrice;

    console.log(
      "normalizedPrice: " +
        normalizedPrice +
        " item.price: " +
        item.price +
        " minPrice: " +
        minPrice +
        " maxPrice: " +
        maxPrice
    );

    const hue = Math.max(0, normalizedPrice * 120);

    console.log("hue: " + hue);

    item.color = `hsl(${hue}, 100%, 50%)`;
    document.getElementById(item.name).style.backgroundColor = item.color;
    document.getElementById(item.name).innerHTML = item.price;
  });
}

// updates the calc every hour
setInterval(update, 3600000);

// initial call
update();
