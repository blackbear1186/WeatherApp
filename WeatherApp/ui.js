class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-description');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humid = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');

    }
    // weathers = results
    paint(weather){
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.description.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp} \xB0F`;
        this.icon.setAttribute('src', 'partly.svg');
        this.humid.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} \xB0F`;
        this.wind.textContent = `Wind: ${weather.wind.speed} mph`;
    }
}
