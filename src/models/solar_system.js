// const Planets = require('../data/planets.js')
const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish("Planets:all-planets-ready", this.planets);

  // console.log("Publishe from solar sytsem", this.planets);

  PubSub.subscribe("PlanetSelected:click", (event) => {
    const selectedIndex = event.detail;
    this.publishPlanetDetail(selectedIndex);
  });
};

SolarSystem.prototype.publishPlanetDetail = function (planetIndex) {
  const selectedPlanet = this.planets[planetIndex];
  PubSub.publish("Planets:Selected-planet-ready", selectedPlanet);
};

module.exports = SolarSystem;
