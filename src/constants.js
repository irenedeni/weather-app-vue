const apiKey = '6e57108ce81309656d621d26dcc45136';
let city = "amsterdam" || this.selectedCity;
let currentWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&?units=metric&appid=${apiKey}`

export { currentWeather, city };
