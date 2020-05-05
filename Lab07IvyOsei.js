function example1(){
    var num = parseInt(prompt("Enter a number"));
    
    prime = true;
    d = 2;
    while (prime == true && d<= Math.floor(num/2)){
        if (num%d == 0){
            prime = false;
            d = d+1;
        }else{
            d= d+1;
        }
    }
    if (prime == true){
        document.getElementById("output").innerHTML = num + " is prime";
    } else{
        document.getElementById("output").innerHTML = num + "is not prime"
    }

}

function example2(){
    sum1 = 0;
    sum2 = 0;

    for (i=1; i<=4; i= i+1){
        var num = parseInt(prompt("Enter a number"));
        sum1 = sum1 + num;
    }
    
    for (i=1; i<=4; i= i+1){
        var num = parseInt(prompt("Enter a number"));
        sum2 = sum2 + num;
    }
    
    if (sum1 == sum2){
        document.getElementById("output").innerHTML = "yes"
    } else{
        document.getElementById("output").innerHTML = "no"
    }
}

function example3(){
    p = 0;
    n = 0;

do{
    var num = parseInt(prompt("Enter a number"));
    if (num>0)
        p = p+ 1;
    if (num<0)
        n = n + 1;
}
while (num!=0 && p<=2*n);
}

function example4(){
    cnt1 = 0;
    cnt2 = 0;
    for(i=1; i<=4;i=i+1){
        var num = parseInt(prompt("Enter a number"));
        if(num<0)
        cnt1 = cnt1 + 1;
    }
    for(i=1; i<=4; i=i+1){
        var num = parseInt(prompt("Enter a number"));
        if (num<0)
        cnt2 = cnt2 + 1;
    }
    if(cnt1== cnt2){
        document.getElementById("output").innerHTML = "yes";
        } else{
        document.getElementById("output").innerHTML = "no";
        }
    }

function example5(){
    var outputObj = document.getElementById("output");
    var num = parseInt(prompt("Enter a number"));
    for (i=2; i<=num; i=i+1){
        flag = true;
        d=2;
        while(flag == true && d<= Math.floor(i/2)){
            if (i%d == 0){
                flag = false;
            }
            d=d+1;
        }
        if (flag) {
            outputObj.innerHTML = outputObj.innerHTML + ", " + i;
        }
     }        
}

function example6(){
    
    var n = Number(prompt("Enter a positive integer: ", "100"));
    var primes = [];
    for (var i = 2; i <= n; i++) {
        if (isPrime(i) && has7(i)) {
            primes.push(i);
        }
    }
    document.getElementById("output").innerHTML =  primes;
    
}
    
function isPrime(num) {
    var prime = num > 1;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return prime;
}
    
    function has7(num) {
        num = num.toString();
        for (var i = 0; i < num.length; i++) {
            if (num[i] === '7')
                return true;
        }
        return false;
    }
