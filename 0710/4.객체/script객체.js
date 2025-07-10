////객체(object) -자바에서는 Map와 유사하다
//key, value가 한쌍으로 구성

let user={
  name:"철수",
  age:20,
  'math score':100 //이렇게도 가능은하다
}

console.log(user.name);
console.log(user.age);
console.log(user['math score']); //대괄호, 따옴표를 사용해야 출력가능
console.log(user['age']);

const member={
  name:'철수',
  age:20
}

console.log(user);
user=10;
console.log(user);

// 상수니까 변경이 안된다
// member=10;

member.name='영수';  //상수지만 큰 구조는 변경하지 않고 내용들만을 변경하는건 가능하다
console.log(member);  

//이름을 보고싶은지 나이를 보고싶은지 입력받음
let key='name';

console.log(member[key]); //user['name']



let item='사과';

let cart={
  [item]:5
};

console.log(cart);

//예를들어 10명의 회원정보가 각가가 담긴 객체를 10개 생성
function makeUserObject(name, age){

  let obj={
    name,  //매개변수(vlaue설정값)와 key에 설정할 이름이 같으면 생략하여 하나만 표시해도된다
    age
  };

  return obj;
}

let a=makeUserObject('철수', 20);
let b=makeUserObject('영수', 14);
console.log(a,b);

a.addr='강동구'   //key, value 내용 추가할때 사용
b.addr='강동구' 

console.log(a, b);

delete a.addr;   //key, value 삭제할때 사용
console.log(a);


console.log('name' in a);  //in연산자로 key가 있는지 없는지 확인 해준다(향상된 for문과 유사하다.)

for(let key in a){  //
  console.log(`${key} : ${a[key]}`);
}


