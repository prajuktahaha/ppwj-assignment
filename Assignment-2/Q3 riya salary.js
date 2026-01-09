let basicSalary = 50000;
let HRA = 0.2*basicSalary;
let DA = 0.1*basicSalary;
let totalSalary = basicSalary + HRA + DA;
let incomeTax = (totalSalary > 100000) ? 0.05*basicSalary : 0;
console.log("Total income is : " , (totalSalary - incomeTax));
