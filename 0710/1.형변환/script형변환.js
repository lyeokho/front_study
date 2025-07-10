//불린으로 형변환(뭔가 존재한다 싶으면 true, 없다는 느낌은 전부 false)

let a=Boolean(0); //0넣으면 false 나옴, 
console.log(typeof a, a);  

let b=Boolean('  '); //하지만 "" 문자열들은 true로 인식하고 띄어쓰기 하나만 해도 문자열로 인식
console.log(typeof b, b);


a=Boolean(null);  //null, undefined, NaN이런 것들은 false로 나온다
console.log(typeof a, a);


///연산자(+, -, *, %, **, /)
let x = y = z = 10+10;
console.log(x); 

///논리연산자(&&, ||, !)

///비트연산자(&, |, ~, ^, >>)

///동등연산자(==)
let num1=10;
let num2='10';

// == 연산자: 자료형 상관없이 같냐 라고 물어봄
// let result=Number(prompt('숫자입력')); //let result=prompt('숫자입력'); number로 형변환 안해도 같다고 봄
console.log(num1==num2);
console.log(false==0);
console.log(''==0);

// ===연산자: 일치연산자의 엄격한 버전(자료형까지 구분)
// !==
console.log(num1===num2);
console.log(false===0);
console.log(''===0);