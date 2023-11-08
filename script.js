let input1 = document.querySelector('.numberOfSub')
let avgDiv = document.querySelector('.averageDiv')
totalhtml = ''
var points = 0
var totalsum = 0
var credit = 0
var ResultDiv = document.querySelector('.ResultDiv')
// input1.addEventListener("keydown",function(event){
//     if (event.key === 'Enter'){
        
//     }
// })
// console.log(input1.value)
    for (var i=1; i<=6;i++){
        html1 = `<p>${i}</p>
        <input type="number" placeholder="Enter your Credit here" class = "Credits" name = "Credits1" min =0>
        <select class="" name = "Grades">
            <option selected>O</option>
            <option>A+</option>
            <option>A</option>
            <option>B+</option>
            <option>B</option>
            <option>C</option>
            <option>W</option>
            <option>F</option>
            <option>Ab</option>
            <option>I</option>
            <option>*</option>
          </select>
          <br>`
        totalhtml += html1
    }
    avgDiv.innerHTML = totalhtml

let j = 7    
const AddCourse = () => { 
    html2 = `<p>${j}</p>
        <input type="number" placeholder="Enter your Credit here" class = "Credits" name = "Credits1" min= 0>
        <select class="" name = "Grades">
            <option selected>O</option>
            <option>A+</option>
            <option>A</option>
            <option>B+</option>
            <option>B</option>
            <option>C</option>
            <option>W</option>
            <option>F</option>
            <option>Ab</option>
            <option>I</option>
            <option>*</option>
          </select>
          <br>`
    totalhtml += html2
    avgDiv.innerHTML = totalhtml
    j+=1 
    ResultDiv.innerHTML = ``
}



let calculate = () => { 
    let credits = document.getElementsByName("Credits1")
    let arrCreds = []
    let grades = document.getElementsByName("Grades")
    let GradeArr = []
    let pointsObj = {
        "O":10,
        "A+":9,
        "A":8,
        "B+":7,
        "B":6,
        "C":5.5,
        "W":0,
        "F":0,
        "Ab":0,
        "I":0,
        "*":0
        }
    // var elems = document.getElementsByTagName("input")
    for (var i=0; i<credits.length;++i){
        if (credits[i].value !== "undefined"){
            arrCreds.push(credits[i].value)
        }    
        if (grades[i].value !== "undefined"){
            var gradepoint = pointsObj[grades[i].value]
            GradeArr.push(gradepoint)
        }    
    }
    
    for(var i = 0; i<GradeArr.length; i++){
        if(arrCreds[i] === '' || ""){
            credit = 0
        }
        else { 
            credit = Number(arrCreds[i])
        }
        totalsum += credit
        var curretGrade = GradeArr[i]
        points += credit*curretGrade
        console.log(totalsum)
    }
    var gpa = (points/totalsum)
    var percent = (gpa*100).toFixed(0)
    var percent1 = percent/100
    
    if (percent === 'NaN'){
        ResultDiv.innerHTML = `<h1>Please Enter your Grades and Credits<h1>`
    }
    else{
        ResultDiv.innerHTML = `<h1>Your GPA is : ${percent1}`
    }
    console.log(GradeArr)
    console.log(arrCreds)
    arrCreds.splice(0,arrCreds.length)
    GradeArr.splice(0,GradeArr.length)
    totalsum = 0
    points = 0 
    // credit = 0 

}
