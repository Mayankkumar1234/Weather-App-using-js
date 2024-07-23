
document.querySelector("button").addEventListener("click",()=>{
  let value=document.querySelector("#city").value;
  document.querySelector("#cityName").innerHTML=value;
  getValue(value);
})


async function getValue(city){

try{
  let response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=772a751a1a02f157ecd42d6fd1bddc51&units=metric")
  let data=await response.json();
  console.log(data.list[0]); 
  appendData(data.list);
}catch(error){
console.log("This error",error);
}
}



// let date=new Date('2024-07-22');
// let specificDate=date.getDay()

// console.log(specificDate);

let index=0;
let day;
function appendData(Data){
       let predictData=document.querySelector(".upper-part");
      
       predictData.innerText= ''
           index=0;
              //for(i=0;i<5;i++) 
            for(let i=0;i<5;i++){
  //  let date=
              let date=new Date(Data[index].dt_txt);
              let specificDate=date.getDay()
              console.log(date)
               if(specificDate==1){
                day="Monday";
                
               }else if(specificDate==2){
                 day="Tuesday";
                
               }else if(specificDate==3){
                day="Wednesday"
                
               }
               else if(specificDate==4){
                day="Thrusday";
              }else if(specificDate==5){
               day="Friday"
              }
              else if(specificDate==6){
                day="Saturday";
              }else {
               day="Sunday"
              }

  let div=document.createElement("div");

              div.innerHTML=`
                 <div class="firstDay try">
        <p class="day">${day}</p>
        <img src="weather-app-img/images/${Data[index].weather[0].main}.png" alt="">
        <p class="Temp">${Data[index].main.temp}</p>
        <p class="minTemp">${Data[index].main.temp_max}</p>
      </div>
              `
              index=index+8;
              predictData.append(div);
            }
           
          
           
}
