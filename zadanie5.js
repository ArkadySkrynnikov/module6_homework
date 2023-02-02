let func = (x,n) => {
    let result = Math.pow(x,n) ;
    if (typeof x === "number" && typeof n === "number"){
        return console.log(result);
    } else {
        console.log("something wrong");
    }
};
func(7,2);