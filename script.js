let allLocations = []
let allWeights = []
let allDays = []
let buttonContainer = document.querySelector(".button-container")
let descriptionContainer = document.querySelector(".description-container")

document.addEventListener("DOMContentLoaded", function() {
    fetch("./data.json")
    .then ((response)=> response.json())
    .then ((items)=>{
        items.forEach((item, index)=> {
            if(!allWeights.includes(item.weight) && item.weight){
                allWeights.push(item.weight)
            }
            if(!allLocations.includes(item.location) && item.location){
                allLocations.push(item.location)
            }
            if(!allDays.includes(item.day) && item.day){
                allDays.push(item.day)
            }
        
            let dateDescriptionWrapper = document.createElement("div"); 
            dateDescriptionWrapper.classList.add("date-description-wrapper");
            
            let date = document.createElement("div");
            date.innerText = item.date;
            date.classList.add("date");
            
            let description = document.createElement("div");
            description.innerText = item.description;
            description.setAttribute("data-weight", item.weight);
            description.setAttribute("data-location", item.location);
            description.setAttribute("data-day", item.day)
            description.classList.add("description");
            
            dateDescriptionWrapper.appendChild(date); 
            dateDescriptionWrapper.appendChild(description)
            
            descriptionContainer.appendChild(dateDescriptionWrapper); 
        
         
        })

        let allButton = document.createElement("button")
        allButton.innerText = "All"
        buttonContainer.append(allButton)

        function showAllDescriptions() {
            let allDescriptions = document.querySelectorAll(".description");
            let allDates = document.querySelectorAll(".date")
            allDescriptions.forEach((description) => {
                description.classList.remove("hidden");
            });
            allDates.forEach((date) => {
                date.classList.remove("hidden");
            });
        }
        allButton.addEventListener("click", showAllDescriptions);



        allWeights.forEach((weight, index)=>{ 
            let weightButton = document.createElement("button")
            weightButton.innerText = weight
            weightButton.setAttribute("data-weight", weight)
            buttonContainer.append(weightButton)

            weightButton.addEventListener("click", (e)=>{
                let buttonWeight = e.target.dataset.weight
                let allDescriptions = document.querySelectorAll(".description")
                let allDates = document.querySelectorAll(".date");
                allDescriptions.forEach((description, index)=>{
                    if (description.dataset.weight == buttonWeight){
                        description.classList.remove("hidden")
                        allDates[index].classList.remove("hidden")

                    }
                    else{
                        description.classList.add("hidden")
                        allDates[index].classList.add("hidden")
                    }
                })
            })
        })

        allDays.forEach((day, index) => {
            let dayButton = document.createElement("button");
            dayButton.innerText = day;
            dayButton.setAttribute("data-day", day);
            buttonContainer.append(dayButton);
        
            dayButton.addEventListener("click", (e) => {
                let buttonDay = e.target.dataset.day;
                let allDescriptions = document.querySelectorAll(".description");
                let allDates = document.querySelectorAll(".date");
                allDescriptions.forEach((description, index) => {
                    if (description.dataset.day == buttonDay) {
                        description.classList.remove("hidden");
                        allDates[index].classList.remove("hidden");
                     
                    } else {

                        description.classList.add("hidden");
                        allDates[index].classList.add("hidden");
                    }
                });
            });
        });
 
        allLocations.forEach((location, index)=>{ 
            let locationButton = document.createElement("button")
            locationButton.innerText = location
            locationButton.setAttribute("data-location", location)
            buttonContainer.append(locationButton)

            locationButton.addEventListener("click", (e)=>{
                let buttonLocation = e.target.dataset.location
                let allDescriptions = document.querySelectorAll(".description")
                let allDates = document.querySelectorAll(".date");
                allDescriptions.forEach((description, index)=>{
                    if (description.dataset.location == buttonLocation){
                        description.classList.remove("hidden")
                        allDates[index].classList.remove("hidden")
   
                    }
                    else{
                        description.classList.add("hidden")
                        allDates[index].classList.add("hidden")

                    }
                })
               
            })
        })

        let noneButton = document.createElement("button")
        noneButton.innerText = "None"
        buttonContainer.append(noneButton)


        function hideAllDescriptions() {
            let allDescriptions = document.querySelectorAll(".description");
            let allDates= document.querySelectorAll(".date")
           
            allDescriptions.forEach((description) => {
            description.classList.add("hidden");
            });

            allDates.forEach((date) => {
                date.classList.add("hidden");

            })
           
            
        }
        noneButton.addEventListener("click", hideAllDescriptions);


    });
    
});

function generateDate() {
    var texts = ["January 5", "January 12", "January 19", "January 26", "February 2"]; 
    return texts[Math.floor(Math.random() * texts.length)]; 
}

function changeChaosText() {
    var button = document.getElementById("chaosButton");
    button.innerHTML = generateDate();
}


var interval = setInterval(changeChaosText, 300); 

document.getElementById("chaosButton").addEventListener("click", userClick);


