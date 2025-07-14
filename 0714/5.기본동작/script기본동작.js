//네이버로 이동되는 기본동작을 막아준다
document.querySelector('a').addEventListener('click', (e)=>{  //e이벤트 객체 필요
 
    e.preventDefault();
  console.log('네이버이동');
});


//우클릭을 막아주는 동작
document.querySelector('p')
.addEventListener('contextmenu',(e)=>{

    e.preventDefault();
  alert('우클릭 금지');
})

//드레그를 막아주는 동작
document.querySelector('p')
.addEventListener('selectstart',(e)=>{

  e.preventDefault();
  alert('드레그 금지');
})

//드레그하고 이동을 막아주는 동작
document.querySelector('p')
.addEventListener('dragstart',(e)=>{

  e.preventDefault();
  alert('드레그 금지');
})

const date=new Date();
console.log(date);