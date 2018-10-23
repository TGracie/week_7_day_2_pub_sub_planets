const PubSub = require('../helpers/pub_sub.js');

const ShowView = function(container){
  this.container = container;
};

ShowView.prototype.bindEvents = function () {
  PubSub.subscribe("Planets:Selected-planet-ready", (event) => {
    const planet = event.detail;
    this.render(planet);
  });
};

ShowView.prototype.render = function (planet) {
  console.log("Planet", planet);
  this.container.innerHTML = '';
  const planetInfo = document.createElement('p');
  planetInfo.textContent = `Planet name: ${ planet.name }. Day Length: ${ planet.day }. Gravity: ${ planet.gravity }   `
  this.container.appendChild(planetInfo);
};
module.exports = ShowView;
