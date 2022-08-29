let header = document.getElementById("header-container");
let emergencyDiv = document.getElementsByClassName("emergency-tasks")[0];
let noEmergencyDiv = document.querySelector("no-emergency-tasks");
let h3First = document.querySelectorAll(".emergency-tasks h3");
console.log(h3First);
let h3Second = document.querySelector(".no-emergency-tasks h3");

for (let index = 0; index < h3First.length; index += 1) {
    h3First[index].style.backgroundColor = "purple";
    
}

header.style.backgroundColor = "green";
emergencyDiv.style.backgroundColor = "pink";
// h3First.style.backgroundColor = "purple";
// h3Second.style.backgroundColor = "black";


