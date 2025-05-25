const arg = process.argv;
let fact = 1;

if(isNaN(arg[2]))
    console.log("1");
else if(Number(arg[2]) >= 0){
       
        for (i = 1; i<=Number(arg[2]); i++){
            fact *= i;
        }console.log(fact);
    }
        
    
