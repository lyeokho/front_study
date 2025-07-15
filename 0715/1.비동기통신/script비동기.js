///////////////옛날문법
const xhr=new XMLHttpRequest();
xhr.open('POST','https://jsonplaceholder.typicode.com/posts');
xhr.setRequestHeader('content-type','application/json');   

const data={
  userId:100,
  title:'비동기통신 연습',
  body:'이것저것 전송연습'
};

xhr.send(JSON.stringify(data)); //보냄 

xhr.onload=()=>{   //받음
  console.log(xhr.status);  //응답 결과에 해당하는 상태코드
  console.log( JSON.parse(xhr.response));  //응답 데이터
}


///////////////요즘 문법
// fetch('요청주소')
// .then((변수)=>성공 시 처리할코드)
// .then((변수)=>성공 시 처리할코드)  //연달아 작성 가능

// .catch((e)=>요청 실패 시 처리할 코드)

const getBtn=document.querySelector('.get');
const postBtn=document.querySelector(".post");

const titel=document.querySelector('.title');
const id=document.querySelector('.id');
const userid=document.querySelector('.userid');
const body=document.querySelector('.body');


getBtn.addEventListener('click',()=>{

  fetch('https://jsonplaceholder.typicode.com/posts/1') //요청함
    .then((response)=>response.json() )  //정상적인 응답 받았을때 나오는 내용
    .then((data1)=>{
      titel.innerHTML=data1.title;
      id.innerHTML=data1.id;
      userid.innerHTML=data1.userId
      body.innerHTML=data1.body;
    
    })
    .catch(e=>{     //에러시 나오는 내용
      console.log(e);
    })
  })


// 게시글 작성 화면 만들기
  const post_userId=document.querySelector("[name='userId']"); //속성선택자
  const post_title=document.querySelector("[name='title']");
  const post_body=document.querySelector("[name='body']");

  postBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    const data={
      userId:post_userId.value,
      titel:post_title.value,
      body:post_body.value
    };
    console.log(data);

    fetch("https://jsonplaceholder.typicode.com/posts",{
      method:'post',
      body: JSON.stringify(data),
      headers:{
        'content-type':'application/json'
      }
    }) .then(response=>response.json())
       .then(data=>{
        console.log(data);
        alert('게시글 등록 완료');

       })
       .catch(e=>{
        console.log(e);
        alert('게시글 등록 실패');
       })
       
    
  })


  const async_test=document.querySelector('.async');

  async_test.addEventListener('click',async()=>{  

    let a=1;
    a= await fetch("https://jsonplaceholder.typicode.com/posts/3"); //await기다리게 해줌
    a= await a.json();
    console.log(a);

  })

  function add(i){
    for(i=0; i<10000; i++){

    }
    return i;
  }