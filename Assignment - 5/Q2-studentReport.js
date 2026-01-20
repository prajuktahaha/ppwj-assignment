function studentReport(name , ...marks){
    function average(grade){
        let sum = 0;
        for(let mark of grade){
            sum += mark;
        }
        return sum/grade.length;
    }
    const  average = calculateAverage(marks);
    if(average>=40){
        console.log("Passed");
    }
        else{
        console.log("Fail");
    }
    console.log("Name :" , name);
    console.log("Average :" , average);
}

studentReport("Prajukta" , 23 , 56 , 78);
studentReport("Divye" , 89 , 67 , 89);
