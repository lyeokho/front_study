const weather_name=document.querySelector('.weather');
const weather_temp=document.querySelector('.temp');
const weather_desc=document.querySelector('.description')


function connectGeo(position){
  const lat=position.coords.latitude;
  const lon=position.coords.longitude;

  //console.log(`위도:${lat} 경도:${lon}`);

  const APIKYE='76c58b430453f7713f1862d5891beef3';           //?-쿼리스트링
  const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKYE}&units=metric&lang=kr`;

  fetch(URL).then(response=>response.json())
  .then(data=>{
    console.log(data);
  })

};

function errorGeo(){
  alert('위치 정보 연결 실패');
};

navigator.geolocation.getCurrentPosition(connectGeo,errorGeo);




