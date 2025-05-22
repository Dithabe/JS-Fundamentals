const arg = process.argv;  //initiating the argument vector 

if (Number(arg[2])    //casting the input to an integer
    console.log("My number: " + arg[2]);
else                    //catering for non-number integers
    console.log("Not a number");
