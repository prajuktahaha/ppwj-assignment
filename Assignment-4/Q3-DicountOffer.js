let purchase = prompt("Enter the amount of purchase");
console.log("You purchased of " + purchase);
let discount;
if(purchase>100){
    console.log("You purchased above 100 u will be given 20% discount");
    discount = 20;
}
else if(purchase<100 && purchase>50){
    console.log("10%dicount rewarded")
    discount = 10;
}
else if(purchase<50){
    console.log("no dicount");
}
else{
    console.log("Invalid")
}
let saving = purchase * (discount/100);
console.log("You saved of : " + saving);
let finalAmount = purchase - saving;
console.log("the final amount is : " + finalAmount);
