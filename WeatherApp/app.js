
const storage = new Storage();
//get stored location data
const weatherLocation = storage.getLocationData();
// create weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();
// get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);
    //set location
    storage.setLocationData(city, country);
    // get and display weather
    getWeather();

    $('#locModal').modal('hide');
});




function getWeather() {
  // return promise
  weather
    .getWeather()
    .then((results) => {
        ui.paint(results);
    })
    .catch((err) => console.log(err));
}
