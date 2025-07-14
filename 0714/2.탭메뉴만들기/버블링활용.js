const btns=document.querySelectorAll('.tab-button');
const contents=document.querySelectorAll('.tab-content')

function clearClassList(){   //함수를 이용
  for(let i=0; i<btns.length; i++){
    btns[i].classList.remove('selected');
    contents[i].classList.remove('show');
  }
}

document.querySelector('.list').addEventListener('click',(e)=>{
  let no=e.target.dataset.no;

  if(no !== undefined){    //다른곳을 클릭 했을때 생긴는 오류 방지해줌
clearClassList();
btns[no].classList.add('selected');
contents[no].classList.add('show');
  }
});



