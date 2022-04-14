//https://www.youtube.com/watch?v=kFeXwkgnQ9U&list=PLc_Ps3DdrcTsizjAG5uMhpoDfhDmxpOzv&index=5

/* Quick sort chooses a pivot point (say last item in arr) and then arranges it so that
items smaller are on left and item larger are on right. This is done recursively 
and finally we have a sorted array as result. */

const quick = (arr) => {
    if(arr.length<=1){
        return arr;
    }
    const pivot = arr[arr.length-1];
    const smallArr = [];
    const largerArr = [];
    // loop through array except the pivot
    for(let i = 0;i<arr.length-1;i++){
        let element = arr[i];
        if(element>pivot){
            largerArr.push(element);
        }else{
            smallArr.push(element);
        }
    }
    return [...quick(smallArr),pivot,...quick(largerArr)];
};

console.log(quick([4,5,1,5,3,6,9,34,6,2]));