// Template Literals
// ES2015 이전에는 Template String으로 불렸다.
// backtic(`)으로 감싼 문자열이며, escape 문자를 사용하지 않고 여러줄을 문자열에 담을 수 있다.
// ${}를 이용하여 쉽게 문자열에 변수를 쉽게 더할 수 있다.

const num1 = 1;
const num2 = 2;

const str1 = `${num1} 더하기 ${num2}는 '${num1 + num2}'`;

console.log(str1);