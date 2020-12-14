// Write your JavaScript code here!
window.addEventListener("load", function () {

//Update shuttle requirements
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         const mission = document.getElementById("missionTarget");

         let index = Math.floor(Math.random() * json.length)
         let div = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}"></img>
         `
         mission.innerHTML = div
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      const pilotInput = document.querySelector("input[name=pilotName]");
      const copilotInput = document.querySelector("input[name=copilotName]");
      const fuelInput = document.querySelector("input[name=fuelLevel]");
      const cargoInput = document.querySelector("input[name=cargoMass]");
      const faultList = document.getElementById("faultyItems");
      let pilot = document.getElementById("pilotStatus");
      let copilot = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launch = document.getElementById("launchStatus");

      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!");
      } else if (isNaN(fuelInput.value) == true) {
         alert("Please enter number for fuel.")
         event.preventDefault();
      } else if (isNaN(cargoInput.value) == true) {
         alert("Please enter number for cargo.")
         event.preventDefault();

       } else if (!isNaN(pilotInput.value)) {
         alert("The names of the pilot and copilot must use the alphabet.")
         event.preventDefault();
      
       } else if (!isNaN(copilotInput.value)) {

            alert("The names of the pilot and copilot must use the alphabet.")
            event.preventDefault();
   
      } else {
         if (fuelInput.value < 10000) {
            faultList.style.visibility = "visible";
            launch.innerHTML = "Shuttle not ready for launch.";
            launch.style.color = "RED";
            pilot.innerHTML = `Pilot ${pilotInput.value} Ready`;
            copilot.innerHTML = `Co-pilot ${copilotInput.value} Ready`;
            fuelStatus.innerHTML = `There is not enough fuel for this journey.`
            event.preventDefault();
         } if (cargoInput.value > 10000) {
            faultList.style.visibility = "visible";
            launch.innerHTML = "Shuttle not ready for launch";
            launch.style.color = "RED";
            pilot.innerHTML = `Pilot ${pilotInput.value} Ready`;
            copilot.innerHTML = `Co-pilot ${copilotInput.value} Ready`;
            cargoStatus.innerHTML = `There is too much mass for the shuttle to take off`
            event.preventDefault();
         } if (fuelInput.value > 10000 && cargoInput.value < 10000) {
            faultList.style.visibility = "visible";
            launch.innerHTML = "Shuttle is ready for launch.";
            launch.style.color = "GREEN";
            pilot.innerHTML = `Pilot ${pilotInput.value} is ready for launch.`;
            copilot.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch.`;
            fuelStatus.innerHTML = `Fuel level high enough for launch.`
            cargoStatus.innerHTML = `Cargo mass low enough for launch.`
            event.preventDefault();
         }
      }

   });
});

//Final finished :)
