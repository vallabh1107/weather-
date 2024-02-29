
const apikey="8613f0dde881a72a99966cbf69056ecb";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weather1=document.querySelector(".weather-icon")


async function checkweather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
  
     if(response.status ==404){

        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
     }
    var data =await response.json();


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

      if(data.weather[0].main=="Clouds"){
      weather1.src="clouds.png"
      }
      else if(data.weather[0].main == "Clear"){
        weather1.src="clear.png"
      }
      else if(data.weather[0].main == "Rain"){
        weather1.src="rain.png"
      }
      else if(data.weather[0].main == "Drizzle"){
        weather1.src="drizzle.png"
      }
      else if(data.weather[0].main == "Mist"){
        weather1.src="mist.png"
      }
    document.querySelector(".weather").style.display="block"
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})