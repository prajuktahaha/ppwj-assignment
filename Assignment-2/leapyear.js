let year = prompt("Enter the Year");
year = Number(year);
if (year % 4 === 0 && year % 4 === 0){
    console.log(year + " is a leap year");
}
else if (year % 100 === 0) {
    console.log(year + "is not a leap year");
}
