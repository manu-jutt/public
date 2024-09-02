try{
    const dividand = Number(window.prompt("Enter a dividand: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if (divisor == 0) {
        throw new Error("You can't divide by 0");
    }
    if (isNaN(dividand) || isNaN(divisor)) {
        throw new Error("Type a number PLEASE!");
        
    }

    const result = dividand / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("This is the end!");