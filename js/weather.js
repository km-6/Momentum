const API_KEY = "868fd9debeff465237c72e9be90df20c";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather .city");
            const temp = document.querySelector("#weather .temp");
            const weather = document.querySelector("#weather .weather");
            city.innerText = `${data.name}`;
            temp.innerText = `${data.main.temp}℃`;
            if(data.weather[0].main === "Clouds"){
                const weatherIcon = document.createElement("i");
                weatherIcon.setAttribute('class', 'xi-cloudy');
                weather.appendChild(weatherIcon);
            }else if(data.weather[0].main === "Snow"){
                const weatherIcon = document.createElement("i");
                weatherIcon.setAttribute('class', 'xi-snow-crystal');
                weather.appendChild(weatherIcon);
            }else if(data.weather[0].main === "Mist"){
                const weatherIcon = document.createElement("i");
                weatherIcon.setAttribute('class', 'xi-fog');
                weather.appendChild(weatherIcon);
            }else if(data.weather[0].main === "Clear"){
                const weatherIcon = document.createElement("i");
                weatherIcon.setAttribute('class', 'xi-sun-o');
                weather.appendChild(weatherIcon);
            }else if(data.weather[0].main === "Rain"){
                const weatherIcon = document.createElement("i");
                weatherIcon.setAttribute('class', 'xi-umbrella-o');
                weather.appendChild(weatherIcon);
            }else {
                weather.innerText = `${data.weather[0].main}`;
            }
        });
        console.log(url)
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) 
