// // const apiUrl = `https://api.weatherapi.com/v1/current.json?key=3394f9b01f0a418da2f191903233112&q=cairo&aqi=no`;
// // http://api.weatherapi.com/v1/search.json?key=3394f9b01f0a418da2f191903233112&q=lond
// // apiKey => 3394f9b01f0a418da2f191903233112
// // AJAX async javascript and xml
const cityInput = document.getElementById("city");
const country = document.getElementById("country");
const region = document.getElementById("region");
const nameOfTheCity = document.getElementById("nameOfTheCity");
const dateOfToday = document.getElementById("dateOfToday");
const lastUpdate = document.getElementById("lastUpdate");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const cloud = document.getElementById("cloud");
const conditionText = document.getElementById("conditionText");
const conditionIcon = document.getElementById("conditionIcon");
const currentDegree = document.getElementById("currentDegree");
const currMinDay = document.getElementById("currMinDay");
const currMaxDay = document.getElementById("currMaxDay");
const dayForcastOne = document.getElementById("dayForcastOne");
const conditionTextTwo = document.getElementById("conditionTextTwo");
const conditionIconTwo = document.getElementById("conditionIconTwo");
const minTomorrow = document.getElementById("minTomorrow");
const maxTomorrow = document.getElementById("maxTomorrow");
const conditionTextThree = document.getElementById("conditionTextThree");
const conditionIconThree = document.getElementById("conditionIconThree");
const dayForcastTwo = document.getElementById("dayForcastTwo");
const maxThree = document.getElementById("maxThree");
const minThree = document.getElementById("minThree");

//============================================================//
// ================this is a way to do it=====================//
// ===========================================================//

// let allItems = {};
// // cityInput.addEventListener('change', function () {
// //     let apiLink = `https://api.weatherapi.com/v1/forecast.json?key=3394f9b01f0a418da2f191903233112&q=${cityInput.value}&days=3&aqi=no&alerts=no
// //     `;
// //     const myHttp = new XMLHttpRequest;
// //     myHttp.open('GET', apiLink);
// //     myHttp.send();
// //     myHttp.addEventListener('load', function () {
// //         if (myHttp.status === 200) {
// //             allItems = Array(JSON.parse(myHttp.response))
// //             console.log(allItems);
// //             displayData()
// //         } else {
// //             console.log('error fetching data:', myHttp.statusText);
// //         }
// //     })
// // })
// cityInput.addEventListener('change', async function () {
//     let apiLink = `https://api.weatherapi.com/v1/forecast.json?key=3394f9b01f0a418da2f191903233112&q=${cityInput.value}&days=3&aqi=no&alerts=no`;
//     let response = await fetch(apiLink);
//     let result = await response.json()
//     allItems = result
//     console.log(allItems);
//     displayData()
// })
//============================================================//
// ================this is Another a way to do it but this is more eseair than the first=====================//
// ===========================================================//

let allItems = {};


cityInput.addEventListener('change', async function () {
    let apiLink = `https://api.weatherapi.com/v1/forecast.json?key=3394f9b01f0a418da2f191903233112&q=${cityInput.value}&days=3&aqi=no&alerts=no`;
    try {
        let response = await fetch(apiLink);
        if (response.ok) {
            let result = await response.json();
            allItems = result;
            console.log(allItems);
            displayData();
        } else {
            throw new Error('there is a probleme in the network.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error: display a message to the user, reset UI elements, etc.
    }
});
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const http = 'http:';
function displayData() {
    const date = new Date(allItems.location.localtime);
    const dayOfWeek = date.getDay();
    const dayName = days[dayOfWeek];
    const countryName = allItems.location.country
    const cityName = allItems.location.name;
    const regionName = allItems.location.region;
    const dateOfTodayNumber = allItems.location.localtime.split(" ", 1);
    const lastUpdateNumber = allItems.current.last_updated;
    const windSpeedNumber = allItems.current.wind_kph + ` k/h`;
    const humidityNumber = allItems.current.humidity + `%`;
    const cloudNumber = allItems.current.cloud + `%`;
    const conditionTextCase = allItems.current.condition.text;
    const conditionIconImgCase = allItems.current.condition.icon;
    const currentDegreeNumber = allItems.current.temp_c;
    const currMinDayDeg = allItems.forecast.forecastday[0].day.mintemp_c;
    const currMaxDayDeg = allItems.forecast.forecastday[0].day.maxtemp_c;

    // Retrieve data for the next two days of forecast
    const dateTwo = new Date(allItems.forecast.forecastday[1].date);
    const dateThree = new Date(allItems.forecast.forecastday[2].date);
    const dayOfWeekTwo = dateTwo.getDay();
    const dayOfWeekThree = dateThree.getDay();
    const dateNameTwo = days[dayOfWeekTwo];
    const dateNameThree = days[dayOfWeekThree];
    const conditionTextTomorrow = allItems.forecast.forecastday[1].day.condition.text;
    const conditionIconTomorrow = allItems.forecast.forecastday[1].day.condition.icon;
    const maxTomorrowDeg = allItems.forecast.forecastday[1].day.maxtemp_c;
    const minTomorrowDeg = allItems.forecast.forecastday[1].day.mintemp_c;
    const conditionTextThreeCase = allItems.forecast.forecastday[2].day.condition.text;
    const conditionIconThreeIcon = allItems.forecast.forecastday[2].day.condition.icon;
    const maxThreeDeg = allItems.forecast.forecastday[2].day.maxtemp_c;
    const minThreeDeg = allItems.forecast.forecastday[2].day.mintemp_c;
    // Update HTML elements
    country.innerHTML = countryName;
    nameOfTheCity.innerHTML = cityName;
    region.innerHTML = regionName;
    dateOfToday.innerHTML = dateOfTodayNumber + ' ' + dayName;
    lastUpdate.innerHTML = lastUpdateNumber;
    windSpeed.innerHTML = windSpeedNumber;
    humidity.innerHTML = humidityNumber;
    cloud.innerHTML = cloudNumber;
    conditionText.innerHTML = conditionTextCase;
    conditionIcon.src = http.concat(conditionIconImgCase);
    currentDegree.innerHTML = currentDegreeNumber;
    currMinDay.innerHTML = currMinDayDeg;
    currMaxDay.innerHTML = currMaxDayDeg;
    dayForcastOne.innerHTML = dateNameTwo;
    conditionTextTwo.innerHTML = conditionTextTomorrow;
    conditionIconTwo.src = http.concat(conditionIconTomorrow);
    maxTomorrow.innerHTML = maxTomorrowDeg;
    minTomorrow.innerHTML = minTomorrowDeg;
    conditionTextThree.innerHTML = conditionTextThreeCase;
    conditionIconThree.src = http.concat(conditionIconThreeIcon);
    dayForcastTwo.innerHTML = dateNameThree;
    maxThree.innerHTML = maxThreeDeg;
    minThree.innerHTML = minThreeDeg;
    console.log(conditionIconThree.src);
}
