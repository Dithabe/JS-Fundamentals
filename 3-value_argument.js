const arguments = process.argv;  //declaring the imput array to be used

if (arguments[2])  //conditional statement checking that an input is provided at index 2
  console.log(arguments[2]);
else
  console.log('No argument');
