// The javascript array can be used for the same.
// let a = []; a.push(1); a.shift();
// Note that the shift meathod has a time complexity of O(n) as if remove the element at index 0
// and then shift each element in the array

// Another approach would be to use an object with key as index for implementing the queue.
// Here the time complexity is O(1) for the dequeue.

const Queue = () => {
    let q = {};
    let headIndex = null;
    let tailIndex = null;
    function enqueueFn(val) {
        if(tailIndex===null){
            q[0]=val;
            headIndex = 0;
            tailIndex = 0;
            return;
        }
        q[tailIndex+1]=val;
        tailIndex++;
    }
    function deuqueueFn() {
        if(tailIndex===null){
            headIndex=null;
            q = {};
            return null;
        }
        if(tailIndex===headIndex){
            delete q[headIndex];
            q={};
            headIndex=null;
            tailIndex=null;
            return;
        }
        delete q[headIndex];
        headIndex++;
    }
    function sizeFn() {
        if(headIndex===null || tailIndex === null){
            return 0;
        }
        return 1+tailIndex-headIndex;
    }
    function printFn(){
        if(tailIndex===null || headIndex===null){
            console.log("No Queue found");
            return;
        }
        console.log("Queue is:");
        for(let i=headIndex;i<=tailIndex;i++){
            console.log(q[i]);
        }
    }
    return {
        enqueue:enqueueFn,
        dequeue:deuqueueFn,
        size:sizeFn,
        print:printFn
    };
};

main = ()=>{
    
    const queue = Queue();
    queue.print()
    queue.enqueue(10);
    queue.enqueue(39);
    queue.print();
    queue.dequeue();
    queue.print();
    queue.dequeue();
    queue.print();
    queue.dequeue();
    queue.print();
};

main();