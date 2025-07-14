

//바로 배열방 만들어 html을 사용 안하고 할수있다.

const FRUITS=[    //이건 배열방 
  {name: 'apple', memo: '싱싱한 대구사과'},
  {name: 'mango', memo: '싱싱한 제주망고'},
  {name: 'melon', memo: '싱싱한 서울멜론'},
  {name: 'strawberry', memo: '싱싱한 부산딸기'}
];

  for(let i=0; i<FRUITS.length; i++){

     let card=`
    <div class="col">
    <div class="card" style="width: 18rem;">
    <img src="./요소추가연습이미지/${FRUITS[i].name}.jpg" class="card-img-top"> 
    <div class="card-body">
    
    <h5 class="card-title">${FRUITS[i].name}</h5>
    <p class="card-text">${FRUITS[i].memo}</p>
    <button class="btn btn-primary cart">담기</button> 
    </div>
    </div>
    </div>
    `;
    document.querySelector('.row').insertAdjacentHTML('beforeend', card);
  }

  const cart=document.querySelectorAll('.cart');

  for(let i=0; i<cart.length; i++){

    cart[i].addEventListener('click',(e)=>{
     let nameTag=e.target.previousElementSibling.previousElementSibling; 
     let name=nameTag.innerHTML;

      //로컬스토리지에서 꺼내옴
     let temp=localStorage.getItem('cart');

     let isHave=false;    //장바구니에 넣으려는 과일이 로컬스토리지에 있는지 여부를 알려주는 변수
     let index;   // 장바구니에 넣으려는 과일이 스토리지에 있으면 몇번째 있는지 알려주는 변수



     if(temp !=null) {  //있는지 없는지 확인 필요 만약 있다면 그 정보들을 꺼내와야 함
      
      temp=JSON.parse(temp);  //문자열 형태를 원본인 배열로 되돌려준다 

      temp.forEach((date,i) => {
        if(date.name===name){
          isHave=true;
          index=i;
        }
      });
      
      if(isHave){     //위 반복문에서 기존 로컬스토리지에 해당 과일이 있는지 없는지 확인 했으니까 그 여부에 따라 다르게 처리됨
        temp[index].cnt++;
      }else{
        temp.push({'name':name, 'cnt':1});
      }

      localStorage.setItem('cart', JSON.stringify(temp));  //추가된 정보를 다시 로컬스토리지에 담음

     }else{   //과일이 없을때가 아닌 로컬스토리지가 비어있을때 실행되는 부분
      localStorage.setItem('cart', JSON.stringify([{'name':name, 'cnt':1}])
      );
     } 
     

    })  ///여기까지는 새거1개만 저장 새로운게 추가되는 기능 필요, (깂을 꺼내오고, 새로 담을 정보를 추가,)
  }     

















  //beforebegin: 해당 요소 앞에 html을 넣어줌
  //afterbegin: 해당 요소 첫번째 자식으로 추가
  //beforeend: 해당 요소 마지막 자식으로 추가
  //afterend: 해당 요소 뒤에 넣어줌
  

  //또 다른 반복문     (i나 index로 배열방 번호를 알수있다.)
  // FRUITS.forEach((data, index) => {
  //   console.log(data.memo, index);
  // });

  //로컬스토리지에 저장or수정(동일한 키를 넣으면 기존 데이터를 지움)
  localStorage.setItem('키', '값');
  //로컬스토리지에 해당 키에 대한 값을 리턴해줌
  localStorage.getItem('키');
  //로컬스토리지에 해당 키를 삭제
  localStorage.removeItem('키');


  let arr=[1,2,3,4,5];
  let obj={
    name:'kim',
    age: 20
  };
  //문자열로 들어가진다 //로컬스토리지는 배열이나 오브젝트를 넣어봤자 문자열 형태로 처리된다.
localStorage.setItem('arr', arr);
localStorage.setItem('obj', obj);

//JSON형식으로 변환
let arr_json=JSON.stringify(arr);

//배열은 아니지만 배열구조(대괄호)가 유지된 채로 문자열이 됨
localStorage.setItem('arr',arr_json);

//로컬스토리지로 꺼내와도 아직까지는 문자열
arr=localStorage.getItem('arr');
console.log(arr, typeof arr);
//문자열 형태로 다시 배열에 돌려준다.
arr=JSON.parse(arr);
console.log(arr, typeof arr);