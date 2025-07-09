//알림창 띄우기
//alert("자바스크립트 파일 만듬");

//출력문- 콘솔창에 띄움 (출력문)
console.log('콘솔창에 내용 띄우기')

//html에 출력해주기(사용은 안함 그냥 구경)
document.write("문서에 쓰기")

///////////변수 만들기
var 변수명; //이런 옛날거
let 변수이름; //let 사용

let msg='hello';
console.log(msg);
msg=30;
console.log(msg);


////////// 상수 (값 변경못함, 오류난다)
const COLOR='red';
// COLOR='blue';

let n=12.345;

console.log(typeof(n));
console.log(typeof n);

//자바는 오류 나지만 js는 수학적 연산을 할수있어 오류는 안난다
//결과가 안나오는 건 특수 숫자 값으로 처리된다(ex:infinity)
console.log(n/0);
console.log(typeof Infinity);
console.log('abc'/2); 
console.log(typeof NaN); //이 NaN도 숫가값


//////////문자
//문자(열)은 쌍따옴표, 작은따옴표, 빽틱 사용가능하다
let str1 = "abc";
let str2 = 'abc';
let str3 = `abc`;

let age=20;
let name='홍길동'

console.log(name+"님의 나이는"+age+'살입니다.');
console.log(`${name}님의 나이는 ${age+5}살 입니다.`)
console.log(typeof name);

/////boolean불린
let check=true
console.log(10>=5);
console.log(typeof check);

//////null값
//js에서 null은 존재하지 않음, 비어있다, 알수없다 이런 의미임
let a=null;

//undefined 값을 할당하지 않음
let x;
console.log(x);


///// 모달창 띄우기

//alert 메세지만 출력하고 확인버튼 1개
//alert('메세지 띄우기'); 

//prompt 메세지를 출력해주고 사용자에게 입력받는 창이 있고
//확인과 취소 버튼이 있음(취소하면 null 입력하면 되돌려 받음)
//prompt('메세지', 초기값);
// let result=prompt('메세지', 20);
// console.log(result);

// let result=Number(prompt('나이를 입력하세요'));

// console.log(typeof result); //타입 알려줌
// result=result+1
// console.log(result);

////confirm메세지를 출력해주고 확인 , 취소 버튼이 있음(ex:탈퇴하시겠습니까? 이런쪽에 사용)
//확인을 누르면 true, 취소를 누르면 false가 리턴됨
let re=confirm('메세지');
console.log(re);


/////형변환
