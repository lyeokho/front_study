///객체(object)에는 함수(메서드)도 넣을수 있다
let user={
  name:'영수',
  age: 10,
}

user.hi=()=>{
  console.log('hi');
}

user.hi();

function hi2(){
  console.log('hi2');
}

user.hi2=hi2;
user.hi2();

let user2={
  name:'철수', //o
  age:20,  //o

  hi:function(){  //o
    console.log(this.name); //자기 자신을 지목하는거, 어디에 들어가는지에 따라 지목하는 대상이 달라짐.
  }

}
user2.hi();



///객체참조

let a={  
  name:'철수'
};

let b=a;
a.name ='영수'
console.log(b.name);


////배열

let arr=[1,2,3,4];

arr[0]=20;
arr[1]='q';  //문자와숫자를 가리지않고 출력 가능

arr.push('fffff');  //추가도 가능

console.log(arr);

arr.pop();      //빼는 것도 가능
console.log(arr);


