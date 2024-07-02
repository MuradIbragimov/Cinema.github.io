function createIncrementor(n) {
    return function(num) {
        return n + num;
    }
}

const addOne = createIncrementor(1);
console.log(addOne(10))