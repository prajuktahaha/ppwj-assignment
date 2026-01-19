function calculateTotal(dicount=0 , ...itemsPrice){
    let total = 0;
    for(let price of items){
        total += price;
    }
    const discountedAmount = total * (dicount/100);
    const finalAmount = total - discountedAmount;
    return finalAmount;
}
const bill1 = calculateTotal(10 , 200 , 50 , 67);
console.log(bill1);
const bill2 = calculateTotal(undefined , 56 , 67 , 89);
console.log(bill2);
