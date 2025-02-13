const nums=[2,4,5,2,1,2]

function occurence(b){
    let k = 0;
    let a = b;
    // Looping n number of times till it reaches the array length
    for(let i=0;i<=a.length;i++){
        if(a[i]==2){ //checking if the index of the array is 2
            k=k+1
        }
    }console.log(`The Occurence of 2 is ${k}`);
}

occurence(nums);
 