//////         6.1
function numName() {
    function addNumbers(num1, num2) {
        return num1 + num2;
    }
    
    let number1 = 5;
    let number2 = 10;
    
    let result1 = addNumbers(number1, number2);
    console.log(result1);
    
    let result2 = addNumbers(20, 25);
    console.log(result2);
    }
    
    ////         6.2
    function Name() {
    let descriptiveWords = ["awesome", "brilliant", "fantastic", "amazing", "wonderful", "spectacular", "incredible"];
    
    function describeName() {
        let name = prompt("Please enter your name:");
        let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
        let randomWord = descriptiveWords[randomIndex];
        console.log(`${name} is ${randomWord}!`);
    }
    describeName();
    }
    ////            6.3
    function calculate() {
    
        const val1 = 10;
        const val2 = 5;
        let operat = "-";
        function cal(a, b, op) {
            if (op == "-") {
                console.log(a - b);
            } else {
                console.log(a + b);
            }
        }
        cal(val1, val2, operat);
         }
    
    
        ////             6.4
        function practice6_4() {let prize = prompt("Pick a number 0-10");
            prize = Number(prize);
            let output = "My Selection: ";
            switch (prize){
            case 0:
            output += "Gold ";
            case 1:
            output += "Coin ";
            break;
            case 2:
            output += "Big ";
            case 3:
            output += "Box of ";
            case 4:
            output += "Silver ";
            case 5:
            output += "Bricks ";
            break;
            default:
            output += "Sorry Try Again";
            }
            console.log(output);}
     