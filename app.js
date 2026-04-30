




// function studentForm(e) {
//     e.preventDefault();
//     const name = document.getElementById("name").value
//     const email = document.getElementById("email").value
//     const phone = document.getElementById("phone").value

//     const student = {
//         name: name,
//         email: email,
//         phone: phone
//     }

//     var students = []
//     students.unshift(student)
//     localStorage.setItem("students", JSON.stringify(students))

//     console.log("All students:", students)
// }
// // console.log("All students:", students)







function studentForm(e) {
    e.preventDefault();
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value

 var students= JSON.parse(localStorage.getItem("students")) || []

    var studentdata ={
        name: name,
        email:email,
        phone: phone,
    }

   students.push(studentdata)
   localStorage.setItem("students", JSON.stringify(students))

    var storedStudents = JSON.parse(localStorage.getItem("students"))
    console.log("Stored students:", storedStudents )
}