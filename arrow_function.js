// Arrow Function을 사용하여 다양한 방법으로 함수를 선언할 수 있다.

// add1 ~ add4는 모두 같은 기능을 하는 함수이다.
function add1(x, y) {
    return x + y;
}

// => 를 이용하여 함수를 선언할 수 있다.
const add2 = (x, y) => {
    return x + y;
};

// 함수 내부에 return문만 존재할 경우 return 키워드를 생략할 수 있다.
const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
    return !x;
}

// parameter가 하나일 경우 괄호를 생략할 수 있다.
const not2 = x => !x;

// Arrow Function의 차이점
const relationship = {
    name: 'leejongbeom',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(freind => {
            // Arrow Function에서는 상위 함수와 다른 this를 갖지 않고, 상위 스코프의 this를 물려받는다.
            console.log(this.name, freind);
        })
    }
}