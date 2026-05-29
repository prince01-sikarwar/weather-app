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
    }
    catch(error){
        console.log(error);
        resultBox.innerHTML=`<h3>Error in fetching Weather Data....</h3>`;
    }
    
});