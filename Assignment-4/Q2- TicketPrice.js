let age = prompt("Enter your age : ");
console.log("Your age is :" + age);
let ticketPrice;
if (age < 12){
    console.log ("You are a child");
    ticketPrice = 5;
}
else if(18>age && age>12){
    console.log("You are a Teenager");
    ticketPrice = 10;
}
else if(60>age && age>18){
    console.log("You are an adult");
    ticketPrice = 20;
}
else if(age>60){
    console.log("You are senior");
    ticketPrice = 15;
}
else{
    console.log("ur alien");
}
console.log("Your ticket price is : " + ticketPrice);
