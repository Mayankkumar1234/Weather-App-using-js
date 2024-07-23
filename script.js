
let body=document.querySelector("body");
document.querySelector("#searchBtn").addEventListener("click",()=>{
    // console.log("It is working fine")
    let value=document.querySelector(".inputVal").value
    getData(value)
    // setmap(value);
})


async function getData(city){

    try{
        let data=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=803ef556c2fd066b930b02bb9b2e866e&units=metric")

        //imperial
    let cityData=await data.json()
    if(data.status==404){
        throw "city not found"
     
    }

    // console.log(cityData.main.temp);
   
    setmap(city);
    printData(cityData);
    console.log(cityData)
   
       

}catch(err){
        console.log("This is error",err);
        console.log("This shows an error");
        let wrongCity=document.querySelector(".bottomLeftPart");
        wrongCity.innerHTML="";
        let para=document.createElement("p")
        para.setAttribute("id","wrongCity")
        para.innerText="Enter Correct City"
        wrongCity.append(para);
        // localStorage.clear()
        setmapEle()
        
}

}
function printData(cityData){
      let innerData=document.querySelector(".weatherDetails");
    innerData.innerHTML="";
    //   let head=document.querySelector("h2")
    //   head.innerHTML="Weather Details"
//    let eviroment=cityData.weather[0].main;
    // console.log(eviroment);
       if(cityData){
        innerData.innerHTML=
        ` <div class="icons">
          <p><i class="fa-solid fa-bars"></i></p>
          <p>453</p>
      </div>
     <div class="city">
      ${cityData.name}
     </div>
     <div class="Image">
      <img src="./weather-app-img/images/${cityData.weather[0].main}.png" alt="">
     </div>
     <div class="temp">
      ${cityData.main.temp}°C
     </div>
     <div class="footer-part">
     <div class="humidity">
      <p><img src="humidity_8449544.png" style="width: 20px;"
           alt=""></p>
      <p>humidity</p>
      <p>${cityData.main.humidity}%</p>
     </div>
     <div class="wind">
      <p><i class="fa-solid fa-wind"></i></p>
      <p>${cityData.wind.speed}</p>
      <p>20 km/h</p>
     </div>
     <div class="precipitation">
      <p><i class="fa-solid fa-snowflake"></i></p>
      <p>precipitation</p>
      <p>10%</p>
     </div>
     </div>
        `
       }

}

function setmap(city){
let mapContainer=document.querySelector(".mapPart");
mapContainer.innerText=''
// mapContainer.innerHTML="";
 if(city){
    mapContainer.innerHTML=
    `
        <div class="mapouter"><div class="gmap_canvas"><iframe width="800" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br><style>.mapouter{position:relative;text-align:right;height:520px;width:800px;}</style><a href="https://www.embedgooglemap.net">google maps embed</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:530px;width:750px;}</style></div></div>
    `
 }
}
let imgStyle = document.querySelector("#Image");
function setmapEle(){
     console.log(imgStyle);
    //  innerTxt.innerText="City not Found";
    if (imgStyle) {
        imgStyle.style.display = "block"; // Ensure the element exists and then set display style
        console.log("Map part set to display block");
    } else {
        console.error("Element .mapPart not found");
    }
 setTimeout(()=>{
    window.location.reload(); 
 },8000)    
}