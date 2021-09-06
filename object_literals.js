// oldObject와 newObject는 같은 기능을 하는 객체이다.
// ES2015에서 객체 리터럴에 관한 편리한 기능들이 추가되었다.

var sayNode = function() {
    console.log('Node');
};

var es = 'ES';

var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};

oldObject[es + 6] = 'Fantastic';
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6);

const newObject = {
    // :과 funtion 키워드를 붙이지 않아도 된다. 
    sayJS() {
        console.log('JS');
    },
    // 속성명과 변수명이 동일할 경우 한 번만 써도 된다.
    sayNode,
    // 객체 리터럴 내에서 동적으로 속성명을 만들 수 있다.
    [es + 6]: 'Fantastic',
};

newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);

