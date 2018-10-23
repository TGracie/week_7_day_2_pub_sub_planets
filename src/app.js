const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');
const ShowView = require('./views/show_view.js');

document.addEventListener('DOMContentLoaded', () => {

  // Display Binding
  const infoDiv = document.querySelector('.planet-details');
  const planetInfoDisplay = new ShowView(infoDiv);
  planetInfoDisplay.bindEvents();

  // Select Binding
  const selectElement = document.querySelector('.planets-menu');
// console.log(selectElement)
  const createMenu = new SelectView(selectElement);
  // console.log("select from menu", selectElement);
  createMenu.bindEvents();

  // Soure Data IN
  const planetsDataModel = new SolarSystem(planetsData);
  // console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

});
