let searchBtn = document.getElementById("searchButton");

let apiKey = "&APPID=f78e8b7be4fa337dfd38d80684d5ea55";

function searchHandler() {
    let cityInput = document.getElementById("city").value;
    window.open(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=f78e8b7be4fa337dfd38d80684d5ea55&units=metric`)
}
searchBtn.addEventListener("click", searchHandler);