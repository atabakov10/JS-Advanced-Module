function largestNum(a,b,c) {
    let result;
    if(a > b && a > c){
        result = a;
    }
    else if(b > a && b > c){
        result = b
    }
    else if(c > a && c > b){
        result = c
    }
    console.log(`The largest number is ${result}.`)
}
largestNum(5, -3 , 15);
largestNum(0, 2, 1)
largestNum(12, 10, 11)