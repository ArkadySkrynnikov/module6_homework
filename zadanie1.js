let arr = [0, 0, 0, 1, 1, 1, 2, 2, 2,null,true,false,NaN];
function exam(){
    let even = 0;
    let odd = 0;
    let zero = 0;
    let nulll = 0;
    for (let i = 0 ; i < arr.length ; i = i + 1){
        if(arr[i]%2 === 0 && arr[i] !== 0 && typeof arr[i] === "number"){
            even = even + 1;
        }
        else if(arr[i]%2 === 1 && typeof arr[i] ==="number") {
            odd = odd + 1;
        }
        else if(arr[i] === 0 ) {
            zero = zero + 1;
        }
        else if (arr[i] === null){
            nulll = nulll + 1;
        }
    }
    console.log("amount of even - " + even);
    console.log("amount of odd - " + odd);
    console.log("amount of null - " + nulll);
    console.log("amount of zero - " + zero);
}exam();