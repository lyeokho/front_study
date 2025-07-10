// function show(){
//   document.getElementById('ab').style.display='block'; //알림창 열기
// }

// function hide(){
//   document.getElementById('ab').style.display='none'; //알림창 닫기
// }


function showHide(state){
  //js문법
  // document.getElementById('ab').style.display=state; 

  //jQuery문법
  $('#ab').css('display', state);
}


function showMsg(msg){
  //js문법
  document.querySelector('.alert').innerHTML= msg;

  //jquery문법=코드가 단순해진다.
  // $('.alert').html(msg);
}
