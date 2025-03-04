// let userList = [
//     {id: 1 , name: 'sara' , family: 'rahimi', age: 30 , activity: true},
//     {id: 2 , name: 'amir', family: 'akbari', age: 31 , activity: true},
//     {id: 3 , name: 'hamid', family: 'mohammadi', age: 69 , activity: false},
//     {id: 4 , name: 'zahra', family: 'shariyari', age: 35 , activity: true},
//     {id: 5 , name: 'ashkan', family: 'hatami', age: 18 , activity: false} 
// ]
// console.log(userList)
// let userActive = userList.filter(user =>(user.activity == true))
// console.log(userActive)
// let Uppername = userList.map(user =>(user.name.toUpperCase()))
// console.log(Uppername)
// //    userList.sort((a , b)=>(a.ge - b.age))

// //    document.write(userList)
// let addName = prompt('please enter your name')
// let userAdd = userList.push(addName)
// console.log(userAdd)
// console.log(userList)

//part two ---- روش دوم
let userList = [
    {id: 1 , name: 'sara' , family: 'rahimi', age: 30 , activity: true},
    {id: 2 , name: 'amir', family: 'akbari', age: 31 , activity: true},
    {id: 3 , name: 'hamid', family: 'mohammadi', age: 69 , activity: false},
    {id: 4 , name: 'zahra', family: 'shariyari', age: 35 , activity: true},
    {id: 5 , name: 'ashkan', family: 'hatami', age: 18 , activity: false} 
]

function username(name , family , age , activity){
    
    //last index ID
   let newId = userList.length > 0 ? userList[userList.length -1].id + 1 : 1
     //create object
    let newUser = {
        id : newId,
        name : name,
        family: family,
        age : Number(age),
        activity : activity.toLowerCase() === 'true'
    }
    //add to List
    userList.push(newUser)
      console.log(`کاربر ${name}, اضافه شد` ,newUser)
}
////دریافت اطلاعات از کاربر
let newName = prompt('enter your name').trim()
let newFamily = prompt('enter your family').trim()
let newAge = +prompt('please enter your age')
let userActive = prompt('do you activity: true or false');

username(newName , newFamily, newAge , userActive)
myproject = userList
.filter(item=> item.activity == true)
.map(item => item.name.toUpperCase())

console.log(userList)
document.write(myproject)
//

