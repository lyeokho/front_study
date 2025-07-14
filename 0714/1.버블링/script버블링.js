document.querySelector('.container').addEventListener('click',(e)=>{
  console.log(e.target);
});

document.querySelector('b').addEventListener('click',(e)=>{
  e.stopPropagation();   //버블링을 막아준다.
  alert('b태그클릭');
});