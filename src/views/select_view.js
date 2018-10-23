const PubSub = require ('../helpers/pub_sub.js')

const SelectView = function(element){
  this.element = element;
};


SelectView.prototype.bindEvents = function(){
  // console.log("bind events");
PubSub.subscribe('Planets:all-planets-ready', (event) => {
  // console.log("does event exist", event);
 const allPlanets = event.detail;
 // console.log("All Planets", allPlanets);
this.populate(allPlanets);
});


this.element.addEventListener('click', (event) =>
{
const selectedIndex = event.target.value;
PubSub.publish("PlanetSelected:click", selectedIndex)
});

};

SelectView.prototype.populate = function (allPlanets)
{
allPlanets.forEach((planet, index)=> {
const listitem = document.createElement('li');
listitem.textContent = planet.name;
listitem.value = index;
this.element.appendChild(listitem);
});
};
//planets not populating yet.
module.exports = SelectView;
