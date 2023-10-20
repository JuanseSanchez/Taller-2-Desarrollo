import { series } from './data.js';
let seriesTbody = document.getElementById('series');
const avrgTemps = document.getElementById("average-seasons");
renderSeriesInTable(series);
avrgTemps.innerHTML = `${getAverageSeasons(series)}`;
function renderSeriesInTable(series) {
    series.forEach((serie) => {
        var _a;
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
      <td>${serie.id}</td>
      <td class="show-card">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        (_a = trElement.querySelector('.show-card')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            showCard(serie);
        });
    });
    const average = getAverageSeasons(series);
    let promedio = document.createElement("tr");
    promedio.innerHTML = `<td colspan="3">Average Seasons: ${average}</td>`;
    seriesTbody.appendChild(promedio);
}
function getAverageSeasons(series) {
    let totalSeasons = 0;
    let numberSeries = 0;
    series.forEach((serie) => {
        totalSeasons = totalSeasons + serie.seasons;
        numberSeries = numberSeries + 1;
    });
    if (numberSeries === 0) {
        return 0; // Avoid division by zero if there are no series
    }
    let average = totalSeasons / numberSeries;
    return average;
}
function showCard(serie) {
    const card = document.getElementById('details');
    if (card) {
        card.innerHTML = `
      <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="${serie.image}" alt="${serie.name} picture">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <a href="${serie.link}" target="_blank">${serie.link}</a>
        </div>
      </div>`;
    }
}
