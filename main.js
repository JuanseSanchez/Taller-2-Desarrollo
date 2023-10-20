"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
var table = document.querySelector('.table tbody');
if (table) {
    data_js_1.series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <th scope=\"row\">".concat(serie.id, "</th>\n            <td class=\"show-card\">").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        table.appendChild(row);
    });
}
else {
    console.error("No se encontró el elemento con la clase 'table'");
}
var summary = document.querySelector('p');
if (summary) {
    var avgSeasons_1 = 0;
    data_js_1.series.forEach(function (serie) {
        avgSeasons_1 += serie.seasons / data_js_1.series.length;
    });
    summary.innerHTML = "Seasons average: ".concat(avgSeasons_1);
}
else {
    console.error("No se encontró el elemento con la etiqueta 'p'");
}
