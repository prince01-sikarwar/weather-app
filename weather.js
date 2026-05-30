let apikey="9d37f71b181d89eb0f216074417caec1";

let searchbtn=document.querySelector("#search-btn");
let resultBox=document.querySelector("#result");

searchbtn.addEventListener("click",async()=>{
    let cityName=document.querySelector("#city-name").value.trim();

    if(cityName===""){
        resultBox.classList.remove("hidden");
        resultBox.innerHTML=`<h3> please Enter a City Name </h3>`;
        return;
    }
    try{
        resultBox.classList.remove("hidden");

        resultBox.innerHTML=`
        <div class="flex justify-center items-center">
        <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p class="text-center mt-3 ms-1 text-gray-700 font-medium">Fetching Weather Dat....</p>
        </div`;
        let response=await fetch(
           ` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`,
        );
        console.log(response);

        if(!response.ok){
            resultBox.innerHTML=`<h3>City Not found</h3>`
        }

        let data=await response.json();
        console.log(data);

        //Weather Icon
        let icon=data.weather[0].icon;

        resultBox.innerHTML =`
        <div><h2 class="text-3xl font-bold text-gray-800">${data.name},${data.sys.country}</h2>
        <p class="text-gray-600 mt-1">${data.weather[0].main}</p>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="loading.." class="mx-auto" />
        <h1 class="text-5xl font-bold text-blue-700">${data.main.temp}°C</h1>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-6">
        <div class="bg-white/60 p-4 rounded-xl shadow">
        <p class="text-gray-600 text-5m"> Humidity<p/>
        <h3 class="text-2xl font-bold text-gray-800">${data.main.humidity}%</h3></div>

        <div class="bg-white/60 p-4 rounded-xl shadow">
        <p class="text-gray-600 text-sm">Wind speed</p>
        <h3 class="text-2xl font-bold text-gray-800">${data.wind.speed}</h3>
        </div>
        </div>`
        ;
    }
    catch(error){
        console.log(error);
        resultBox.innerHTML=`<h3>Error in fetching Weather Data....</h3>`;
    }
    
});