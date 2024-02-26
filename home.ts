


let question :number  = parseInt(prompt("What Operation do you want to perform ? \n 1 - Addition \n 2- Substraction") || "0");

if(question == 1){
    let numberOne :number  = parseInt(prompt("Enter Number One") || "0");
    let numberTwo :number  = parseInt(prompt("Enter Number Two") || "0");
    
    Addition(numberOne,numberTwo);

}else if(question == 2){
    let numberOne :number  = parseInt(prompt("Enter Number One") || "0");
    let numberTwo :number  = parseInt(prompt("Enter Number Two") || "0");
    
    Substraction(numberOne,numberTwo);
    
}else{
    alert("not avaialbe");
}



function Addition(UserNumberOne : number , UserNumberTwo : number ){
    

    
    let result:number  = UserNumberOne + UserNumberTwo ; 
    
    
    document.write(`The sum of ${UserNumberOne} and ${UserNumberTwo} is equal to ${result}`);
    
}






function Substraction(UserNumberOne : number , UserNumberTwo : number){
    
 
    
    
    let result:number  = UserNumberOne - UserNumberTwo ; 
    
    
    document.write(`The sub of ${UserNumberOne} and ${UserNumberTwo} is equal to ${result}`);
    
}





