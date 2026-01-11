let rollNumber = prompt("Enter your roll number : ");
rollNumber = number(rollNnumber);
if(rollNumber % 3 == 0 && rollNumber % 5 == 0){
    console.log("The student is qualified to join the school sports event");
}
else{
    console.log("the student is not qualified");
}
