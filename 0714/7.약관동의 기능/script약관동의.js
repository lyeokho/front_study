const box=document.querySelector('.box');

let boxY=box.scrollHeight;
console.log(boxY);

let boxHeight=box.clientHeight;
console.log(boxHeight);

let isDisabled=true; //약관 다 읽고 반복을 종료 시켜줄 변수

box.addEventListener('scroll',()=>{
  let scroll=box.scrollTop;
 
  if(isDisabled && boxHeight+scroll>boxY-5){   //-5를 준건 소수점 오차 고려한거임
  chk.disabled=false;
    isDisabled=false;  
  }; 

});



