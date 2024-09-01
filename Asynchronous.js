function func1(Callback){
    setTimeout(() => {
        console.log("Task 1");
        Callback()        
    }, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);