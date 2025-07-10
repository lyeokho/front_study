// 다크모드 버튼을 클릭하면 배경색(검정), 글꼴(흰색)들이 바뀜
// .style.color
// .style.background

//그다음 되돌리기 왔다갔다 할수있게 하기


const btn=document.querySelector('.btn-mode');
const body=document.body;

btn.addEventListener('click', () => {

  alert(btn.value);

  document.body.style.background='black';
  document.body.style.color='white';

})