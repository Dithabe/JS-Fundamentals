const arg = process.argv;
let fact;

function factorial(fact){


    if(isNaN(arg[2]))
        console.log("1");
    else if(Number(arg[2]) >= 0){
        
            for (i = 1; i<=Number(arg[2]); i++){
                fact *= i;
            }console.log(fact);
        }
    }
factorial(1);
    
