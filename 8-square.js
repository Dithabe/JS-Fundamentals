const args = process.argv;

//first argument is the size of the square (.i.e. args[2])
if(Number(args[2])){
    for (let index = 0; index < args[2] ; index++){
        let row = '';
        for (let anotherIndex = 0; anotherIndex < args[2] ; anotherIndex++)
           row += "X"
    
    console.log(row);     
    }
}else
    console.log("Missing size");
