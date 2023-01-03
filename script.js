const search =()=>{
    country = loc.value; //location
    console.log("location:",country);
    
    fetch(`http://api.weatherapi.com/v1/current.json?key=ca3fdbc117be41b89b5120101230301&q=${country}`)
        .then(res => res.json())
    .then(data => displayData(data)) //2nd function call

        .catch(error => {
            alert('Failed to fetch weather data');
        })
}


//display data as card

const displayData =(weatherData)=> {

    // let {location} = weatherData //destructuring object
    // console.log("location:",location);

    console.log(weatherData);

    locInfo.innerHTML= `
        <div class="card">

            <ul class="list-group list-group-flush">

                <li class="list-group-item"><h4>Location: <span class="result">${weatherData.location.name}</span></h4></li>
                <li class="list-group-item"><h4>Region: <span class="result">${weatherData.location.region}</span></h4></li>
                <li class="list-group-item"><h4>Country: <span class="result">${weatherData.location.country}</span></h4></li>
                <li class="list-group-item"><h4>Time Zone: <span class="result">${weatherData.location.tz_id}</span></h4></li>
                <li class="list-group-item"><h4>Local Time: <span class="result">${weatherData.location.localtime}</span></h4></li>

            </ul>
            
        </div>
    `
    weatherInfo.innerHTML= `
        <div class="card">

            <ul class="list-group list-group-flush">

                <li class="list-group-item"><h4>Weather Condition: <span class="result">${weatherData.current.condition.text} <img src="${weatherData.current.condition.icon}"></span></h4></li>
                <li class="list-group-item"><h4>Temperature: <span class="result">${weatherData.current.temp_c}°C</span></h4></li>
                <li class="list-group-item"><h4>Temperature: <span class="result">${weatherData.current.temp_f}°F</span></h4></li>
                <li class="list-group-item"><h4>Humidity: <span class="result">${weatherData.current.humidity}</span></h4></li>

            </ul>
            
        </div>
    `
}

const clear=()=>{
    document.getElementById('loc').value="";
}
