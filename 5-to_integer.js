const arguments = process.argv;

if (Number(arguments[2]))
    console.log("My number: " + arguments[2]);
else
    console.log("Not a number");
