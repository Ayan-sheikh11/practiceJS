var studentdataget = document.getElementById("card");

var storedStudents = JSON.parse(localStorage.getItem("students")) || []


function editStudent(index) {
    var editedName = prompt("Enter the new name:");
    alert(editedName);
    alert(index +1);
}

function deleteStudent(index) {
    var confirmDelete = confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
        storedStudents.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(storedStudents));
        alert("Student deleted successfully.");
        location.reload();
    }}
if (!Array.isArray(storedStudents) || storedStudents.length === 0) {
   alert("No student data found in localStorage.");
}
else {

console.log("Stored students:", storedStudents);
storedStudents.forEach(function(students , index) {
    studentdataget.innerHTML += `
       <div class="student-card">
       <img class="student-image" src="${students.image}" alt="Student Image Not Found">
       <div class="student-info">
    <p class="student-email">${index + 1}</p>
    <h3 class="student-name">${students.name}</h3>
    <p class="student-email">${students.email}</p>
    </div>      
            <p class="student-phone">${students.phone}</p>
            <div class="buttons">
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </div>
        </div>
    `;


    console.log("Student data:", students);

});
}