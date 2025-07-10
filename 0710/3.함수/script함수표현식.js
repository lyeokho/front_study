/// 함수선언문
function hello(){
  console.log('hello');
}

//함수표현식
let hi=function(){
  console.log('hi')
}

hi();

///콜백함수

function yes(){  //함수선언으로 하면 호출위치는 어디든 가능하다
  console.log("예");
}

let no =function(){  //함수표현식은 만들고 난 이후부터 호출 가능하다
  console.log("아니오");
}

function check(question, ok, cancel){
  if(question==='y')
    ok();
  else
    cancel();
}

check('y', yes, no)



function buy(item, price, stock, callback){
  console.log(`${item}을 ${stock}개 구매함`);

  let total=price+stock;
  callback(total);
}

function pay(n){
  console.log(`총 금액: ${n}`);
}

function pay(n){
  console.log(`총 금액(할인적용): ${n*0.9}`);
}

let 할인여부='n'

if(할인여부==='y'){
  buy('컴', 100, 2, pay2);
}else{(할인여부==='n')
  buy('컴', 100, 2, pay);
}


///setInterval(콜백함수, 시간):나중에 호출되는 함수
setInterval(function(){
  console.log('a');
},1000);


