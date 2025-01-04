async function resolveWeatherInfo() {
    let longitute = document.getElementById("longitute").value;
    let latitute = document.getElementById("latitute").value;
    let city = document.getElementById("city").value;
    let result = document.getElementById("result");

    fetch(`https://geocode.maps.co/search?q=${city}&latitute${latitute}&longitude=${longitute}&current_weather=true`, {
        method: "GET"
    }).then(response => response.json()).then(weatherInfo => {
        result.innerHTML = `
        <p> Temerature in this ${city} is: ${weatherInfo.current_weather.temperature} </p>
        `
    })

}