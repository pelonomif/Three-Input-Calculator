
    let outputOne = prompt("Please enter first number");
    let outputTwo = prompt("Please enter second number");
    let outputThree = prompt("Please enter the operator");

    if(outputThree === "+") {
        let answer = parseInt(outputOne) + parseInt(outputTwo);
        document.getElementById ("answer").innerHTML = answer;
        console.log("add")
        console.log("answer");
    
    } else if(outputThree === "-") {
        let answer = outputOne - outputTwo;
        document.getElementById ("answer").innerHTML = answer;
        console.log("subtract")
        console.log("answer");

    } else if(outputThree === "*") {
        let answer = outputOne * outputTwo;
        document.getElementById ("answer").innerHTML = answer;
        console.log("multiply")
        console.log("answer");

    } else if(outputThree === "/") {
        let answer = outputOne / outputTwo;
        document.getElementById ("answer").innerHTML = answer;
        console.log("divide")
        console.log("answer");

        
   

    






















}