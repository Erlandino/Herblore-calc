# Herblore calc

Fun hobby project connected to game

Current features

- Provides calculations on profit when making "Extended anti-venom+" and "Super Antifire"

- Uses api from osrs wiki for pricing (https://prices.runescape.wiki/api/v1/osrs/latest)

- Gives profit calculations based on various circumstances feks: buying reagents cheaply while selling product expensively

Planned features

- Images next to reagents and product in table

- Search feature to look up pricing for recipe

- Editing of price value with new calculations

- Improved outlook of site

table notes:

<!--
<table>
    <thead>
        <tr>
			<td class="hidden-cell"></td>
            <th colspan="4">Herblore calc</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="hidden-cell"></td>
            <th>High</th>
            <th>Low</th>
            <th>High</th>
            <th>Low</th>
        </tr>
      	<tr class="right">
            <th>High</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
         <tr class="right">
            <th>Low</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td class="hidden-cell"></td>
            <th>Low</th>
            <th>High</th>
            <th>High</th>
            <th>Low</th>
        </tr>
    </tbody>
</table>
-->

// loops trough profit array
// for (let i = 0; i < priceLevel.length; i++) {
// // container element
// const calcContainer = document.createElement("div");

// // name element
// const calcText = document.createElement("p");
// calcText.innerText = `Profit (${priceLevel[i]})`;

// // price element
// const calcPrice = document.createElement("p");
// calcPrice.innerText = `${profit[i]}`;
// calcText.classList.add("goodsName");
// calcPrice.classList.add("goodsPrice");

// // adds all elements to their positions
// calcContainer.appendChild(calcText);
// calcContainer.appendChild(calcPrice);
// calcContainer.classList.add("container");
// document.getElementById("recipeProfit-container").appendChild(calcContainer);
// }
