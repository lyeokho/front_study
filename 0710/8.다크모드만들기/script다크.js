// 다크모드 버튼을 클릭하면 배경색(검정), 글꼴(흰색)들이 바뀜
// .style.color
// .style.background

//그다음 되돌리기 왔다갔다 할수있게 하기


const btn=document.querySelector('.btn-mode');
const body=document.body;

let isDark=false;  //다크모드면 true 아니면 false

btn.addEventListener('click', () => {  //다크모드 버튼 누르면 적용
  
  
  if(isDark){
    body.style.background='white';
    body.style.color='black';
    btn.value='다크모드';
    isDark =! isDark;
  }else{
    document.body.style.background='black';
    document.body.style.color='white';
    btn.value='라이트모드';
    isDark =! isDark;
  }


})