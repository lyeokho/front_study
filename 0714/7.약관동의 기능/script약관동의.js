const box=document.querySelector('.box');
const chk=document.querySelector('#chk');
const nextBtn=document.querySelector('.next');

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

nextBtn.addEventListener('.click',()=>{
  if(chk.checked){
    alert('다음 이동');
  }else{
    alert('약관동의 안함');
  }
})

//화면 높이를 볼수잇다(p.446)  //스크롤 내릴때 진행사항 표시
console.log(window.innerHeight);
console.log(document.body.clientHeight);

const innerHeight=window.innerHeight;
const bodyHeight=document.body.clientHeight;

window.addEventListener('scroll',()=>{
  console.log(window.scrollY); //전체 총 높이-(실제 보는)화면 높이=스크롤을 움직일 수 있는 최대치

  const status=window.scrollY/(bodyHeight-innerHeight)*100;
  
  document.querySelector('.status-bar').style.width=`${status}%`;
})

