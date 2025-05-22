const args = process.argv;

if (Number(args[2]))
    for (let index = 0 ; index < Number(args[2]) ; index++)
        console.log("C is fun");
else 
    console.log("Missing number of occurrences");
