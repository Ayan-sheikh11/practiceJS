// console.log("working..");
//   furite name array
// const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// let i =0;
// while (i <= 5) {
//     console.log(i)
//     i ++
// }


// let i =0;
//  do {
//     console.log(" value of i",i)
//     i++
//  } while (i>=5);


// for (const key in fruits) {
//     console.log(key, fruits[key])
// }


// var name;
// var age;

// function  user(){
//   name = prompt("enter name")
//   age = prompt("enter age")
// }

// user()
// console.log("welcome", name , "your age is ", age)


//  function myFunction() {

//    let aboutMe= {
//     name : prompt("please enter your name"),
//     fatherName : promt("please enter a father name"),
//     age :  promt("please enter your age"),
//     mobileNumber: promt("enter a mobile"),


//    }

//    console.log(aboutMe)

// }

// student('ayan')

function student(name) {
    console.log("skillify", name)
}



// var student= function (name){
//    console.log("skillify",name)
// }


// const student = (name)=>{
//    console.log(name)
// }


// var num = 0;
// setInterval(()=>{
//    console.log(num += 1)
//    student("Academy")

// },[2000])

// name="Ayan"
//  setTimeout(()=>{
//     console.log(name)
//  },[3000])
// let friendNames =  ["ayan" , "Ali" , "Umer", "Azan", "Aman", "Hassan"]

// setTimeout(()=>{
//    console.log()
//    for (let i = 0; i < friendNames.length; i++) {
//       console.log(friendNames[i]);

//    }

// },[2000])

// let num= prompt("please enter a table num")
// let num2= prompt("please enter num whoch you want to multiply by you first num")
// console.log(num, num2)
// let writeTables = () =>{
//    if (isNaN(num) || isNaN(num2)){
//     setInterval(()=> {
//      let again = prompt("please enter a num not a variable")
//     },[2000])
//    }
// }
// writeTables()



// var stuForm = (e) => {
//     e.preventDefault();

//     var showName = document.getElementById("name").value;
//     var showFname = document.getElementById("fname").value;
//     var rollno = document.getElementById("rollno").value;

//     console.log(showName);

//     var storageName = localStorage.setItem("name", showName);
//     var storageFname = localStorage.setItem("fname", showFname);
//     var storageRollno = localStorage.setItem("rollno", rollno);


// document.getElementById("name").value = "";
// document.getElementById("fname").value = "";
// document.getElementById("rollno").value = "";

// }


var stuform = (e) => {
    e.preventDefault();
    var showName = document.getElementById("name").value;
    var showFname = document.getElementById("fname").value;
    var rollno = document.getElementById("rollno").value;

    console.log(showName , showFname , rollno)

    localStorage.setItem("name", showName);
    localStorage.setItem("fname", showFname);
    localStorage.setItem("rollno", rollno);


//  document.getElementById("cardname");   



    // window.location.href = "form.html"

}