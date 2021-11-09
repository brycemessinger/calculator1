const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

reader.question("What can I calculate for you?", function(input){
        tokens = input.split(' ');

        mathSymbol = tokens[0];
        num1 = Number(tokens[1]);
        num2 = Number(tokens[2]);
        num3 = Number(tokens[3]);

        if (mathSymbol === "+"){
            console.log(num1 + num2 + num3);
        }

        if (mathSymbol === "-"){
            console.log(num1 - num2 - num3);
        }

        if (mathSymbol === "/"){
            console.log(num1 / num2 / num3);
        }

        if (mathSymbol === "*"){
            console.log(num1 * num2 * num3);
        }

        if (mathSymbol === "S")
            console.log(Math.sqrt(num1));

        if (mathSymbol === "P")
        console.log(Math.pow(num1));

        if (mathSymbol === "C")
        console.log(Math.pow(num1, 3));

        if (mathSymbol === "^")
        console.log(Math.pow(num1, num2));

        if (mathSymbol === "M")
        console.log(num1 % num2);

        // olkswdhjgflokisjhdfglokhjsdfg

        console.log('mathSymbol', mathSymbol);
        console.log('num1', num1);
        console.log('num2', num2);
        console.log('num2', num3);

reader.close
});



