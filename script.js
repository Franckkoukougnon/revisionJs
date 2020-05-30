// function



var addNumber = function (num1 = 2, num2 = 4) {

     var total = num1 + num2;
     return total;

    
}

 var result1 = addNumber();
 var result2 = addNumber(10);
 var result3 = addNumber(20, 4);

console.log(result1);
console.log(result2);
console.log(result3);