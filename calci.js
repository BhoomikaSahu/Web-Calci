let str = "";

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");
let item7 = document.getElementById("item7");
let item8 = document.getElementById("item8");
let item9 = document.getElementById("item9");
let item0 = document.getElementById("item0");
let point = document.getElementById("point");
let add= document.getElementById("add");
let sub= document.getElementById("sub");
let mul= document.getElementById("mul");
let div= document.getElementById("div");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");

item1.addEventListener("click", concatenate1);
item2.addEventListener("click", concatenate2);
item3.addEventListener("click", concatenate3);
item4.addEventListener("click", concatenate4);
item5.addEventListener("click", concatenate5);
item6.addEventListener("click", concatenate6);
item7.addEventListener("click", concatenate7);
item8.addEventListener("click", concatenate8);
item9.addEventListener("click", concatenate9);
item0.addEventListener("click", concatenate0);
point.addEventListener("click", concatenatePoint);
add.addEventListener("click", concatenateAdd);
sub.addEventListener("click", concatenateSub);
mul.addEventListener("click", concatenateMul);
div.addEventListener("click", concatenateDiv);
equal.addEventListener("click", equalto)
clear.addEventListener("click", clearAll);

function main(str){
    let value1 = "";
    let operator = "";
    let value2 = "";
    let ans;
    let i;
    for(i=0; i<str.length; i++){
        if((str[i]>=0 && str[i]<=9) || str[i]=="."){
            value1 += str[i];
        }
        else{
            operator += str[i];
            break;
        }
    }
    for(let j=i+1; j<str.length; j++){
        value2 += str[j];
    }
    switch(operator){
        case "+": ans = addition(value1, value2); break;
        case "-": ans = subtraction(value1, value2); break;
        case "*": ans = multiplication(value1, value2); break;
        case "/": ans = division(value1, value2); break;
    }
    return ans;
}

function concatenate1(){
    str += "1";
    document.getElementById("disply").innerHTML = str;
}
function concatenate2(){
    str += "2";
    document.getElementById("disply").innerHTML = str;
}
function concatenate3(){
    str += "3";
    document.getElementById("disply").innerHTML = str;    
}
function concatenate4(){
    str += "4";
    document.getElementById("disply").innerHTML = str;
}
function concatenate5(){
    str += "5";
    document.getElementById("disply").innerHTML = str;
}
function concatenate6(){
    str += "6";
    document.getElementById("disply").innerHTML = str;
}
function concatenate7(){
    str += "7";
    document.getElementById("disply").innerHTML = str;
}
function concatenate8(){
    str += "8";
    document.getElementById("disply").innerHTML = str;
}
function concatenate9(){
    str += "9";
    document.getElementById("disply").innerHTML = str;
}
function concatenate0(){
    str += "0";
    document.getElementById("disply").innerHTML = str;
}
function concatenatePoint(){
    str += ".";
    document.getElementById("disply").innerHTML = str;
}
function concatenateAdd(){
    str += "+";
    document.getElementById("disply").innerHTML = str;
}
function concatenateSub(){
    str += "-";
    document.getElementById("disply").innerHTML = str;
}
function concatenateMul(){
    str += "*";
    document.getElementById("disply").innerHTML = str;
}
function concatenateDiv(){
    str += "/";
    document.getElementById("disply").innerHTML = str;
}

function equalto(){
    document.getElementById("disply").innerHTML = main(str);
}
function clearAll(){
    str = "";
    document.getElementById("disply").innerHTML = str;
}

// Operations
function addition(v1, v2){
    return parseFloat(v1) + parseFloat(v2);
}
function subtraction(v1, v2){
    return parseFloat(v1) - parseFloat(v2);
}
function multiplication(v1, v2){
    return parseFloat(v1) * parseFloat(v2);
}
function division(v1, v2){
    return parseFloat(v1) / parseFloat(v2);
}

