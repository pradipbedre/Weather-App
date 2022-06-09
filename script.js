let weather = {
  apikey: "6c26f8106b31701d8c1ba03c89cda5de",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+this.apikey
    ).then((response) => response.json()).then((data) => this.dispplayWeather(data))
  },
  dispplayWeather: function(data){
    const { name }=data;
    const{icon, description}=data.weather[0];
    const{temp, humidity}=data.main;
    const{speed}=data.wind;
    document.querySelector(".city").innerText="Weather in "+name;
    document.querySelector(".temp").innerText=temp+"°C";
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png"
    document.querySelector(".description").innerText=description;
    document.querySelector(".Humidity").innerText=humidity+" Humidity";
    document.querySelector(".Wind-Speed").innerText="wind speed "+speed+" km/h";
  }

};


function myFun(){
    let city=document.getElementById("#input").value;
    console.log(city);
    weather.fetchWeather(city);
}