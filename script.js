// Write your JavaScript code here!


//Update shuttle requirements
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(showPlanet) {
      showPlanet.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
         `;
      });
   }) 
         launchForm.addEventListener("submit", function() {
         updateAndValidate();
      });
      function updateAndValidate() {
         // update shuttle requirements with user input
            let updateShuttleRequirements = function() {
               const launchStatus = document.getElementById("launchStatus");
               const faultyItems = document.getElementById("faultyItems");
               const pilotStatus = document.getElementById("pilotStatus");
               const copilotStatus = document.getElementById("copilotStatus");
               const fuelStatus = document.getElementById("fuelStatus");
               const cargoStatus = document.getElementById("cargoStatus");
               
               pilotStatus.innerHTML = `${pilotName.value} Ready`;
               copilotStatus.innerHTML = `${copilotName.value} Ready`;
            
               if (parseInt(fuelLevel.value, 10) < 10000) {
                  faultyItems.style.visibility = "visible";
                  fuelStatus.innerHTML = 'Not enough fuel for the journey.';
                  launchStatus.innerHTML = 'Shuttle not ready for launch.';
                  launchStatus.style.color = "red";
                  event.preventDefault();
               } else if (parseInt(cargoMass.value, 10) > 10000) {
                  faultyItems.style.visibility = "visible";
                  cargoStatus.innerHTML = 'Too much cargo... please remove items.';
                  launchStatus.innerHTML = 'Shuttle not ready for launch.';
                  launchStatus.style.color = "red";
                  event.preventDefault();
               } else {
                  faultyItems.style.visibility = "visible";
                  launchStatus.innerHTML = "Shuttle is ready for launch.";
                  launchStatus.style.color = "green";
                  event.preventDefault();
               }
            }}

//Validation
if(inputs.pilotNameInput==="" || inputs.copilotNameInput==="" || inputs.fuelLevelInput===""
      || inputs.cargoMassInput===""){
            fieldsVerify();
      }
      else if(!isNaN(Number(inputs.pilotNameInput)) 
      || !isNaN(Number(inputs.copilotNameInput)) 
      || isNaN(Number(inputs.fuelLevelInput))
      || isNaN(Number(inputs.cargoMassInput))){
         alert("Please enter valid input.");
         event.preventDefault();
}
