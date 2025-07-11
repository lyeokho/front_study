const btnBoard=document.querySelector('#open');
const modalBox=document.querySelector('.black-bg');

//js문법
btnBoard.addEventListener('click',()=>{
 modalBox.classList.add('show');

});

 //jquery문법 적용
// $('#open').on('click',()=>{
  // $('.black-bg').addClass('show');
//   $('.black-bg').fadeIn(); 천천히 나타나는 효과

// });
  
//js문법
const btnClose=document.querySelector('#close');

btnClose.addEventListener('click',()=>{
 
  modalBox.classList.remove('show');

} );

 //jquery문법 적용
// $('#close').on('click',()=>{
  // $('.black-bg').removeClass('show');
//     $('.black-bg').fadeOut(); //천천히 사라지는 효과
// });