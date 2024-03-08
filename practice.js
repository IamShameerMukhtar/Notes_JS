// Three ways to declare varriables 
// 1 var (older method) Global Scope
// 2 let (New Method ) Block Scope {//only accessible here}
// const ()



hello=()=>{
document.getElementById("demo").innerHTML=("Hello form Shameer");}

/*
// reverse number using %
let b=123456;


for(i=1;i<=6;i++){
  let a=b%10;
  b=b/10;
  console.log(parseInt(a))
 
  
}
//Ternary Operator

let age =30;
let result=age>30?"Adult":"not Adult"
console.log(result)
let z=prompt("Enter your name");
console.log(`Your name is:${z}`);


// For-of loop use to iterate arrays and strings



let name ="Shameer"
let size=0;
for (let n of name){
  size++;
  if (n==="m"){
console.log(n+"is present");

 
}}
console.log(size);

//for in loop (returns keys)



// Strings

/*
string="shameer";
let num=0;

console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.trim());
console.log(string.slice(0,3));
console.log(string.slice('s','m'));
console.log(string.slice(3));
console.log(string.replace("m","h"));
console.log(string.charAt(3));
let str=window.prompt("Enter Your Full Name");

newstring=str.replace(" ","")+num+"@"+"Gmail.com"
num++;
console.log("Your gmail is: "+newstring)



// Arrays

// Functions / Methods
function sum(a,b){
  return a+b;

}
a=sum(1,1);
console.log(a);

const Sum=(a,b)=>{
  return a+b;
}
e=Sum(2,2);
console.log(e);

const vovels=(str)=>{
  let count=0;
for(const char of str){
  
  if(char==='a'|| char==='e'|| char==='i' || char==='o' || char==='u'){
count++;

  }
  
}
console.log("Total Numbers of Vovels are:"+count)
}


vovels("Shameer")


// For each loop
// A callback funtion is a function which pass to another function as an argument.


Arr=[1,2,3,4,5]
Arr.forEach(function element(ele) {
  console.log("Simple"+ele);
});

Arr1=[1,2,3,4,5]
Arr1.forEach((ele)=> {
  console.log("Arrow"+ele);
});

// Arr1.forEach((ele) u can give here 3 parameters 1 for value 2 for index 3 for whole array it self
// hogher order functions are know as who can take functions as the parameters and can also return functions 
NumArr=[1,2,3,4,5]
NumArr.forEach((element)=>{
  console.log( element*element);
}


)
// if want to create new array use map otherwise use foreach if only want to print.
newArray=NumArr.map((element)=>{
  return element*element;
}


)
console.log("New Array is:"+newArray)


// Filter Method:
nArray=NumArr.filter((element)=>{
  return element%2==0;
}


)
console.log("filter is:"+nArray)





// Reduce method:
//for greater Number:
ArrayN=[1,2,3,4]
Narr=ArrayN.reduce((curr,New)=>{
return curr>New?curr:New;

})
console.log(Narr);

let n=window.prompt("Enter Number")
let i;
let ArrayN=[];
for (i=1;i<=n;i++){
ArrayN[i-1]=i;
}

ArrayR=ArrayN.reduce((Pre,Next)=>{
return Pre*Next;
})
console.log(ArrayR);

*/






Mydiv=document.querySelectorAll("#divs")
Mydiv.forEach(element => {
  if (element.innerHTML==="First div"){
    element.innerHTML=("yes same text")
  }
  else{
    console.log("Not same"+ element.innerHTML)
  }
  
});
if(Mydiv[0]===Mydiv[1]&&Mydiv[2]===Mydiv[3]){
console("All same")

}
else{
  
  console.log("Not same");
}



  