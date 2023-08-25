
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                                    {name: 'Baba', id: 101, marks : 23 },
                                    {name: 'yaga', id: 200, marks : 45 },
                                    {name: 'Wick', id: 115, marks : 75 } ] 
// Ans of no 1 
let one=document.getElementById("studentName")
let studentName=studentRecords.map((student)=>{
    return (student.name).toUpperCase();
})
one.innerText = studentName;
console.log(one)


// Ans of no 2
let two = document.getElementById("q2")
let details=studentRecords.filter((details)=>details.marks>50)
    details.map((student)=>{
let ans=document.createElement("li")
    ans.innerText = student.name+" "+student.id+" "+student.marks
    two.appendChild(ans)
    console.log(ans)
    })
    console.log(details)
 // Ans of no 3   
 let three = document.getElementById("Details")
 let Details=studentRecords.filter((Details)=>Details.marks>50 && Details.id>120)
 details.map((student)=>{
    let ans1=document.createElement("li")
    ans1.innerText=student.name+" "+student.id+" "+student.marks
    three.appendChild(ans1)
 })
 console.log(Details)
//   Ans of no 4
let four=document.getElementById("marks")
let totalmarks = 0
for(let student of studentRecords){
    totalmarks += student.marks;
    console.log(totalmarks)
}
console.log(four)
four.innerText=("Total Marks:", totalmarks)

//  Ans of no 5
let five=document.getElementById("names")
let highscroingstudent=studentRecords
.filter(student=>student.marks>50)
.map(student=>student.name)
console.log("highscoring student",highscroingstudent)
names.innerText=highscroingstudent

// Ans of no 6
let six=document.getElementById("q6")
let highidstudent= studentRecords
.filter(student=>student.id>120)
.reduce((total,student)=>total + student.marks,0);
console.log("sum of student marks with id>120",highidstudent)
q6.innerText=highidstudent

//  Ans of no 7
let seven=document.getElementById("q7")
let adjuststudent=studentRecords.map(student=>({
    ...student , marks : student.marks <50 ? student.marks +15  : student.marks}))
let totalmarksstudent = adjuststudent
.filter(student=>student.marks>50)
.reduce((total,student)=>total + student.marks ,0)
console.log(totalmarksstudent)
q7.innerText = totalmarksstudent

//  Ans of 8
let student =[
{name: "Ginni" , class:"2" , id: 123},
{name: "Riktam" , class:"7" , id: 101},
{name: "Raktim" , class:"12" , id: 202},
{name: "Tithi" , class:"1" , id: 141},
{name: "Samrit" , class:"20" , id: 301},
{name: "Rahul" , class:"8" , id: 302}]
let studentlist =document.getElementById("studentlist")
console.log(studentlist)
student.forEach(student =>{
let listitem = document.createElement("li")
listitem.textContent = `name:${student.name}, class:${student.class} , id:${student.id}`
studentlist.appendChild(listitem)})

