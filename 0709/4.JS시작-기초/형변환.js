////문자로 변환
let a=true;
console.log(typeof a);
a=String(a);
console.log(typeof a,a);

let b=null;
console.log(typeof b);
b=String(b);
console.log(typeof b,b);


////숫자 형변환(문자로 작성했지만 자동 계산됨)
console.log('12'/'5');

let c='123';
c=Number(c);


let d=Number('asdasd');
console.log(typeof d,d);
//변환 불가능한 것들 ->NaN
//undefined ->NaN
//null ->0
//true, false -> 1,0
//문자열 -> 양쪽 공백 제거를 먼저 함
//남는게 없으면 0
//숫자만 남으면 숫자로 변환, 못바꾸면 NaN

let e=Number('     123     ');
console.log(typeof e,e);
let f=Number('       ');
console.log(typeof f,f);
