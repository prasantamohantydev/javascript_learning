const mySymbol=Symbol("key");
const myUser={
          name:"Prasanta",
          age:21,
          email:"prasantamohanty@gmail.com",
          isLoggedin:false,
          lastLoggedInDays:["mon,tue,wed"],
          "fullName":"Prasanta Mohanty",
          [mySymbol]:"newSymbolUsedAsObject"
}

console.log(myUser)

console.log(myUser.email)
console.log(myUser["email"])
console.log(myUser["fullName"])
console.log(myUser[mySymbol])

myUser.email="prasanta@google.com"
// Object.freeze(myUser);
console.log(myUser)
myUser.email="prasanta@chatGpt.com"
console.log(myUser)


//Function
myUser.greeting=function(){
          console.log("Hello My User")

}
console.log(myUser.greeting);
console.log(myUser.greeting());
myUser.greetingtwo=function(){
          console.log(`HELLO user ${this.name} `)
}
console.log(myUser.greetingtwo());

//-----------------------------L2-----------------------------------
const tinderUser=new Object();

tinderUser.id="123abc"
tinderUser.name="User"
tinderUser.isLoggedin=true

console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.keys(tinderUser).length)
console.log(Object.values(tinderUser).length)

console.log(tinderUser.hasOwnProperty("name"))

// Nesting
const regularUser={
          email:"p@google.com",
          username:{
                   fullName:{
                    firstName:"Prasanta",
                    latName:"Mohanty"
                   } 
          }
}
console.log(regularUser)
console.log(regularUser.username.fullName.firstName)

const obj1={
          1:"a",
          2:"b"
}
const obj2={
          3:"c",
          4:"d"
}

const combine={obj1,obj2}
const obj3=Object.assign(obj1,obj2)
console.log(obj3);
console.log(obj3==obj1)
console.log("\n")
const obj4=Object.assign({},obj1,obj2)
console.log(obj4);
console.log(obj4==obj1)

const user=[
          {email:"p",name:"p"},
           {
                    email:"a",
                    name:"a"
          } ,
          {
                    email:"b",
                    name:"b"
          } ,
          {
                    email:"c",
                    name:"c"
          }
]
console.log(user)

console.log(user[1].email)

//---------------------L3--------------------------
//destructure
const cource={
          courceInstructerName:"Prasanta",
          price:"000"
}
// const {courceInstructerName}=cource;

const {courceInstructerName:instructor}=cource;
console.log(instructor)