const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "5eaa898d517499562698c87d57e0f45b";

weatherForm.addEventListener("submit", async event =>{


    event.preventDefault();

    const city = cityInput.value

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error)
            displayError(error)
        }
    }
    else{
        displayError("Please enter a city");
    }


});

async function getWeatherData(city){
    //tried to make live weather counts but the api is not working
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    const response = await fetch(apiUrl);

    console.log(response);

    if(!response.ok){
       throw new Error("could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data){

    console.log(data);
}

function getWeatherEmoji(weatherId){

}

 function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}   