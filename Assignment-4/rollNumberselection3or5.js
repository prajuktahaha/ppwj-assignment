let rollNumber = prompt("Enter your roll number : ");
console.log(rollNumber);
if(rollNumber % 3 == 0 && rollNumber % 5 == 0){
    console.log ("You are selecetd for the relay race");
}
else if (rollNumber % 3 == 0 || rollNumber % 5 != 0){
    console.log("You are not selected");
}
else if (rollNumber % 3 !== 0 || rollNumber % 5 == 0){
    console.log("You are not selected");
}
else {
    console.log("Getout");
}
