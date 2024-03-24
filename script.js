let allLocations = []
let allWeights = []
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
        
            let dateDescriptionWrapper = document.createElement("div"); 
            dateDescriptionWrapper.classList.add("date-description-wrapper");
            
            let date = document.createElement("div");
            date.innerText = item.date;
            date.classList.add("date");
            
            let description = document.createElement("div");
            description.innerText = item.description;
            description.setAttribute("data-weight", item.weight);
            description.setAttribute("data-location", item.location);
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

        allLocations.forEach((location, index)=>{ 
            let locationButton = document.createElement("button")
            locationButton.innerText = location
            locationButton.setAttribute("data-location", location)
            buttonContainer.append(locationButton)

            locationButton.addEventListener("click", (e)=>{
                console.log(e.target.dataset.location)
                let buttonLocation = e.target.dataset.location
                let allDescriptions = document.querySelectorAll(".description")
                let allDates = document.querySelectorAll(".date");
                allDescriptions.forEach((description, index)=>{
                    console.log(description)
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

// Function to generate random text
function generateRandomText() {
    var texts = ["January 5", "January 12", "January 19", "January 26", "February 2"]; // Array of possible texts
    return texts[Math.floor(Math.random() * texts.length)]; // Randomly select a text
}

// Function to update button text
function updateButtonText() {
    var button = document.getElementById("changeButton");
    button.innerHTML = generateRandomText();
}

// Function to handle button click
function handleClick() {
    clearInterval(interval); // Stop text change interval
    // Do something else here
}

// Attach event listener to button
document.getElementById("changeButton").addEventListener("click", handleClick);

// Start changing text at intervals
var interval = setInterval(updateButtonText, 300); // Change text every second

//weightButton.dataset.weight = weight