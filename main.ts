import { Serie } from "./Serie";
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avrgTemps: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesInTable(series);

avrgTemps.innerHTML = `${getAverageSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
      <td>${serie.id}</td>
      <td class="show-card">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);

    trElement.querySelector('.show-card')?.addEventListener('click', () => {
      showCard(serie);
    });
  });

  const average = getAverageSeasons(series);

  let promedio = document.createElement("tr");
  promedio.innerHTML = `<td colspan="3">Average Seasons: ${average}</td>`;
  seriesTbody.appendChild(promedio);
}

function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  let numberSeries: number = 0;

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

function showCard(serie: Serie): void {
  const card: HTMLElement | null = document.getElementById('details');
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
