const btns=document.querySelectorAll('.tab-button')
const contents=document.querySelectorAll('.tab-content')


function clearClassList(){   //함수를 이용
  for(let i=0; i<btns.length; i++){
    btns[i].classList.remove('selected');
    contents[i].classList.remove('show');
  }

}

for(let i=0; i<btns.length; i++){  //반복문 사용

  
  btns[i].addEventListener('click',()=>{
    //0, 1, 2에 모든 selected, show를 제거
    clearClassList();
    
    btns[i].classList.add('selected');  
    contents[i].classList.add('show');
  });
}
  


//   btns[1].addEventListener('click',()=>{
//     clearClassList();
//     btns[1].classList.add('selected');
//     contents[1].classList.add('show');
//   });
  
//   btns[2].addEventListener('click',()=>{
//     clearClassList();
//     btns[2].classList.add('selected');
//   contents[2].classList.add('show');
// });