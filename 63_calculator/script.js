let grades = function (currentMarks, totalMarks){
    let percent = (currentMarks / totalMarks) * 100

    if (typeof currentMarks !== "number" || typeof totalMarks !== "number"){
        console.log("Please enter only Numbers");
    }

    let myGrade = ''

    if (percent >= 90) {
        myGrade = 'A'
    } else if (percent >= 80) {
        myGrade = 'B'
    }else if (percent >= 70) {
        myGrade = 'C'
    } else if (percent >= 60) {
        myGrade = 'D'
    } else if (percent >= 40) {
        myGrade = 'E'
    } else {
        myGrade = 'F'
    } 

    return `Your Grade is ${myGrade} and Percentage is: ${percent}`

}

let yourGrade = grades('asd', 'asd')
console.log(yourGrade);