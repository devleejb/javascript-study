// Destructuring Assignment : 구조 분해 할당

var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function() {
        this.status.count--;

        return this.status.count;
    }
}

// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;

// 이는 위와 같은 기능을 한다.
const { getCandy, status: { count } } = candyMachine;

// 배열의 구조분해할당
var array = ['nodejs', {}, 10, true];
// var node = array[0];
// var obj = array[1];
// var bool = array[3];

// 이는 위와 같은 기능을 한다.
const [node, obj, , bool] = array;