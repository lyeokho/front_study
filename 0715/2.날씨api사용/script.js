const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780
  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국: {
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};
//작업순서!!!!!!
//셀렉트로 나라를 선택한게 보여지게하고 x
// 선택한 나라의 위도경도를 확인 x
//사이트에 전송되고x 
// 그걸 받아서 보여지게x
//이제 정보를 html에 볼수있게 넣어주기

const selectBox=document.querySelector('select');      //셀렉은 클래스가 아님

selectBox.addEventListener('change',()=>{
  const country=selectBox.value;

  const lat=countryCoordinates[country].latitude;
  const lon=countryCoordinates[country].longitude;

  console.log(`위도 ${lat}`) 
  console.log(`경도 ${lon}`) 

  const APIKYE='76c58b430453f7713f1862d5891beef3';
  const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKYE}&units=metric&lang=kr`;

  fetch(URL).then(response=>response.json())
  .then(weather=>{
    console.log(weather);
  })



});



  



