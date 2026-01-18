let StudentProfile = {
    name : "Prajukta",
    age : 20,
    marks : [85 , 44 , 52 , 86],
};
let newMark = 80;
StudentProfile.marks.push(newMark);
console.log(StudentProfile);
let highestMark = Math.max(StudentProfile.marks);
console.log(highestMark);
