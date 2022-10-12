export default class Weather {
    constructor(api_key) { // constructor is a special method that is called when an object is created
        this.apiKey = api_key;

        // check if there is data in local storage
        
        // check if the data is older than 10 minutes
        if(
            localStorage.getItem("weather") && 
            Date.now() - localStorage.getItem("timestamp") < 600000

        ) {
            // get the data from local storage
            const weatherData = JSON.parse(localStorage.getItem("weather"));
            this.displayWeather(weatherData);
            // console.log("CACHE");
        } else {
            this.getLocation();
        }

        this.getTeam();

        
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getWeather(position) {
        console.log(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${lat},${lon}&aqi=no`;

        fetch(url)
            .then(response => response.json())
            .then(data => {

                // save the data to local storage
                localStorage.setItem("weather", JSON.stringify(data));
                // save timestamp
                localStorage.setItem("timestamp", Date.now());


                this.displayWeather(data);
            });
            
    }

    displayWeather(data) {
        const temp = data.current.temp_c;
        document.querySelector("#weather__temp").innerText = temp + "°C";

        const weather = data.current.condition.text;
        document.querySelector("#weather__summary").innerText = weather;

        const icon = data.current.condition.icon;
        // create an image element
        const img = document.createElement("img");
        // set the src attribute of the image element
        img.src = icon;
        // add the image to the DOM
        document.querySelector("#weather__icon").appendChild(img);
    }

    getTeam(){
        fetch("https://api-football-beta.p.rapidapi.com/teams?league=39&season=2019", {
	    "method": "GET",
	    "headers": {
        "X-RapidAPI-Key": "c3231c4facmshf9299219d57620ep1bf3bbjsn9e77f8e0c2e2",
        "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com"
	    }
        
        }).then(res => {
            return res.json();
        }).then(response => {
            const get = response;
            console.log(get);
            let teams = get.response;
            let randomTeam = teams[Math.floor(Math.random()*teams.length)];
            console.log(randomTeam); 

            // get team name
            let teamName = randomTeam.team.name;
            console.log(teamName);
            this.displayTeamName(teamName);

            // get team logo
            let teamLogo = randomTeam.team.logo;
            console.log(teamLogo);
            this.displayTeamLogo(teamLogo);

        }).catch(err => {
            console.error(err);
        });
    }

    // print team name
    displayTeamName(json){
        const teamName = json;
        document.querySelector("#team__name").innerText = teamName;
    }

    // print team logo
    displayTeamLogo(json){
        const teamLogo = json;
        document.querySelector("#team__logo").src = teamLogo;
    }

    

}