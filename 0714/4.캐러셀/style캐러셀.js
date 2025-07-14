const btn1=document.querySelector('.btn1');
const btn2=document.querySelector('.btn2');
const btn3=document.querySelector('.btn3');
const carousel=document.querySelector('.carousel');
const preBtn=document.querySelector('.pre'); //이전 버튼 변수
const nextBtn=document.querySelector('.next'); //다음 버튼 변수



let sildeNo=1;  //현재 보고있는 캐러셀의 이미지 번호

btn1.addEventListener('click',()=>{
  carousel.style.transform='translateX(0)';
  sildeNo=1;
})

btn2.addEventListener('click',()=>{
  carousel.style.transform='translateX(-100vw)';
  sildeNo=2;
})

btn3.addEventListener('click',()=>{
  carousel.style.transform='translateX(-200VW)'
  sildeNo=3;
})


////////////////////////////////////////////////////
preBtn.addEventListener('click',()=>{

  if(sildeNo===1)
    return;

  carousel.style.transform=`translateX(-${sildeNo-2}00vw)`;
  sildeNo--;

  //////////////////////////////////////////////
  if(sildeNo===2){
    carousel.style.transform='translateX(0)'
    sildeNo--;
  }else if(sildeNo===3){
    carousel.style.transform='translateX(-100vw)'
    sildeNo--;
  }
});

////////////////////////////////////////////////////
nextBtn.addEventListener('click',()=>{

  if(sildeNo >=3)
    return;
  
  carousel.style.transform=`translateX(-${sildeNo}00vw)`;
  sildeNo++;


////////////////////////////////////////////////////
   if(sildeNo===1){
    carousel.style.transform='translateX(-100vw)'
    sildeNo++;
  }else if(sildeNo===2){
    carousel.style.transform='translateX(-200vw)'
    sildeNo++;
  }
  
});

//1번 이미지에서 2번이미지 이동 -100vw
//2번 이미지에서 3번이미지 이동 -200vw
