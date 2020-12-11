// Write your JavaScript code here!
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


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
