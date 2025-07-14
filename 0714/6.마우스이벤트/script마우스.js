document.querySelector('button').addEventListener('click',(e)=>{
  //0:왼쪽, 1:가운데, 2:오른쪽
  console.log(e.button);
  console.log(e.altkey);
  console.log(e.ctrlkey);
  console.log(e.shiftkey);

  console.log(e.clientX, e.clientY);
  console.log(e.pageX, e.pageY);


  if(e.ctrlKey){
    alert('컨트롤키 클릭')
  }
   if(e.ctrlKey && e.shiftkey){
    alert('컨트롤키, 쉬프트키 클릭')
  }

});

//change: 변경되고 포커스가 나가면 작동
//input: 변경감지되는 모든 순간 작동
//cut: 잘라내기 할때 작동
//copy: 복사할때 작동
//paste: 붙여넣기 할때 작동

document.querySelector('input')
.addEventListener('cut',()=>{  // input=입력할때마다 

  alert(' 이벤트 작동');
})