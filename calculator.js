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

        if (mathSymbol === "+"){
            console.log(num1 + num2);
        }

        if (mathSymbol === "-"){
            console.log(num1 - num2);
        }

        if (mathSymbol === "/"){
            console.log(num1 / num2);
        }

        if (mathSymbol === "*"){
            console.log(num1 * num2);
        }

        if (mathSymbol === "H")
            console.log(Math.sqrt(num1));
            
        // olkswdhjgflokisjhdfglokhjsdfg

        console.log('mathSymbol', mathSymbol);
        console.log('num1', num1);
        console.log('num2', num2);

reader.close
});



