// For a given array [1,2,3] it returns
// [1],[2],[3],[1,2],[1,3],[1,2,3]

const subsets = (arr) => {
    let sets=[[]];
    for(let i=0;i<arr.length;i++){
        let sets1=[...sets];
        sets.forEach(e=>{
            if(e.length<=0){
                sets1.push([arr[i]]);
                return;
            }
            sets1.push([...e,arr[i]]);
        });
        sets = sets1;
    }
    return sets;
};
console.log(subsets([1,2,3,4]));

/* 
How does it work?

If we have some subsets generated from input numbers and we want to add one more number to our input array, it means that we can take all already existing subsets and generate new ones by appending the new number to each of the existing.

Here is an example for [1, 2, 3]

Start with an empty subset: []

Create new subsets by adding "1" to each existing subset. It will be:[] [1]

Create new subsets by adding "2" to each existing subset. It will be:[], [1], [2], [1, 2]

Create new subsets by adding "3" to each existing subset. It will be: [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3] */