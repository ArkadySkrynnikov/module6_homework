function Enter_num (number){
    if (number >= 1000 || number <= 1){
        return console.log("data is not correct");
    }
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            return console.log("data is not correct");
        }
    }
    return console.log("data correct");
};

Enter_num(199);

