// javascript에서의 변수 선언
// var, const, let을 이용한다.
// ES2015+ 에서는 var을 const와 let이 대체한다.

if (true) {
    var x = 3;
}

// var hoisting으로 인해 접근이 가능하다.
// var을 이용하여 선언한 변수는 function scope를 갖는다.
console.log(x);

if (true) {
    const y = 3;
    let z = 3;
}

// const와 let을 이용하여 선언한 변수는 block scope를 갖는다.
// console.log(y); // Error
// console.log(z); // Error

// const와 let의 차이점
// const를 이용하여 선언한 변수는 한 번 값을 할당하면 다른 값을 할당할 수 없다. 초기화할 때 값을 할당하지 않으면 에러가 발생한다.
const a = 0;
// a = 1; // Error 

let b = 0;
b = 3;

// const c; // Error