// Three ways to declare varriables 
// 1 var (older method) Global Scope
// 2 let (New Method ) Block Scope {//only accessible here}
// const ()



//hello=()=>{

//document.getElementById("demo").innerHTML=("Hello form Shameer");
//}
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
 
 console.log(Mydiv[2]);
 
 
  // Events In JS
 
 buttons=document.querySelectorAll("#b1");
 console.log(buttons);
let sign='0';
let count=2;




const Handleclick=()=>{
   if(count%2==0 && sign=='0'){
    sign="X";
    count++;
   }
   else {
    sign="0";
    count++;
   }
  buttons[0].innerHTML=(sign);
  buttons[0].disabled=true;
  buttons[0].style.width = "100%"; // Set the desired width
  buttons[0].style.height = "100%"; // Set the desired height
 }
 




// 2nd


 const Handleclick1=()=>{
  if(count%2==0 && sign=='0'){
    sign="X";
    count++;
   }
   else {
    sign="0";
    count++;
   }
  buttons[1].innerHTML=(sign);
  buttons[1].disabled=true;
  buttons[1].style.width = "100%"; // Set the desired width
  buttons[1].style.height = "100%"; // Set the desired height
 
 }



 // 3rd
 
 const Handleclick2=()=>{
  if(count%2==0 && sign=='0'){
    sign="X";
    count++;

   }
   else {
    sign="0";
    count++;
   }
  buttons[2].innerHTML=(sign);
  buttons[2].disabled=true;
  buttons[2].style.width = "100%"; // Set the desired width
  buttons[2].style.height = "100%"; // Set the desired height
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 handlediv=()=>{
  alert("Hello world")
 }
 
 
 
 


 Newbt= document.querySelector("#Newbt");
 Newbt.addEventListener("click",()=>{
alert("Hello");
})


mydiv=document.querySelector("#mydiv");
//mydiv.addEventListener("click",handlediv())





// practice Question
//Toggle button for dark/light mode
let mode;
let body=document.querySelector("body");
let Toggle=document.querySelector("#Toggle");
Toggle.addEventListener("click",()=>{
  
if(mode==="Light"){
  mode="Dark"
  body.classList.add("light");
  body.classList.remove("dark");
  
}
else{
  mode="Light"
  body.classList.add("dark");
  body.classList.remove("light");
  
 
  
}

console.log(mode);
})
 






// async await>>promise chains>>callback hell
// Callbacks
saymyname=()=>{
  console.log("Shameer");
}


setTimeout(()=>{
  console.log("My name is shameer");
},5000)

console.log("one");
hello=()=>{
console.log("Hello");
}

setTimeout(hello,2000); 
setTimeout(()=>{
  console.log("i am shameer")
},2000); 
console.log("2");


function sum(a,b){
  console.log(a+b);
}
 function cal(a,b,sumcallback){
  sumcallback(a,b);

 }
cal(2,2,sum)





                                                                                                                                                                                                                 


function getData(dataId,getNextData){
 
setTimeout(()=>{
console.log("Data",dataId);
if(getNextData){
getNextData();

}
},2000)
//Callback hell

}
console.log("Getting Data 1...");
getData(1,()=>{
  
  console.log("Getting Data 2...");
  getData(2,()=>{
   
    console.log("Getting Data 3...");
    getData(3,()=>{
    
      console.log("Getting Data 4...");
      getData(4,()=>{
        console.log("Getting Data 5...");
    getData(5)
    
  });
});

  })

});








function showDelayedMessage(message, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, 1000); // Delay in milliseconds
}

showDelayedMessage("Hello, this is a delayed message.", () => {
  console.log("This message shows up after the delay.");
});







function getd(id,callback){
  setTimeout(()=>{

console.log("Data",id)

callback()

  },3000)
}
getd(1,()=>{
  getd(2,()=>{
  console.log("Hello");  
  })
});




*/



// promises
// promises are solution to callback hell:
// promises have 3 states 1: fullfill 2: rejected 3:pending


// function getData(dataId,nextdata){

//   return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// console.log(dataId,"data");
// reject("Error");

//   if(nextdata){
//     nextdata();
//   }
// },5000)


//   }
// )}
// let promise=getData(1);

// promise.then() when promise fullfiled
// promise.catch() when promise reject






// const getPromise=()=>{
//    return new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     reject("Error");
    
//     })

//   }


// let promise=getPromise();


// promise.then((res)=>{
// console.log("Promise Fullfiled"+res);

// })

// promise.catch((err)=>{
// console.log("Error"+err);


// })

// promise chaining:


// function async1(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data1:");
//       resolve("Success");
//         },2000)



//   })
  
// }


// function async2(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data2:");
//       resolve("Success");
//         },2000)



//   })
  
// }


// console.log("Fetching data 1.....")
// let p1=async1();
// p1.then((res)=>{
// console.log(res);

// console.log("Fetching data 2.....")
// let p2=async2();
// p2.then((res)=>{
// console.log(res);

// })








// // })

// // Callback to promise Chaining

// function getData(dataId){
//  return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//   console.log("Data",dataId);
//   resolve("Success");
//   },2000)
  
// })
//   }
  
// // promise chain means .then inside in .then 

//   console.log("Fetching Data 1");
// getData(1).then((res)=>{
// console.log(res);

// console.log("Fetching Data 2");
// getData(2).then((res)=>{
//   console.log(res);
  
  
//   console.log("Fetching Data 3");
//   getData(3).then((res)=>{
//     console.log(res);
//   })
  



//   })

 


// })




// promise chain also difficult to understand so we can use async-await instead of it:


// Async-Await:
// when u write async with a function it means it will returns a promise:





// function api(){
//   return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// console.log("Weather Data");
// resolve(200);



// },2000)
//   })
// }

// async function callApi(){
//   await api(); //1st time
//   await api(); // 2nd time
//   await api(); // 3rd time
// }


// callApi();


// 1 program 3 concepts

// Callbacks



// function getData(dataId,getNextData){
 
//   setTimeout(()=>{
//   console.log("Data",dataId);
//   if(getNextData){
//   getNextData();
  
//   }
//   },2000)
//   //Callback hell
  
//   }
//   console.log("Getting Data 1...");
//   getData(1,()=>{
    
//     console.log("Getting Data 2...");
//     getData(2,()=>{
     
//       console.log("Getting Data 3...");
//       getData(3,()=>{
      
//         console.log("Getting Data 4...");
//         getData(4,()=>{
//           console.log("Getting Data 5...");
//       getData(5)
      
//     });
//   });
  
//     })
  
//   });
  

















// // promise
// function getData(dataId){
//  return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//   console.log("Data",dataId);
//   resolve("Success");
//   },2000)
  
// })
//   }
  
 

//   console.log("Fetching Data 1");
// getData(1).then((res)=>{
// console.log(res);

// console.log("Fetching Data 2");
// getData(2).then((res)=>{
//   console.log(res);
  
  
//   console.log("Fetching Data 3");
//   getData(3).then((res)=>{
//     console.log(res);
//   })
  



//   })

 


// // })


// // sync-await
// async function getData(dataId){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     console.log("Data",dataId);
//     resolve("Success");
//     },2000)
    
//   })
//     }
//    async function AwaitData(){
//     console.log("Fetching Data 1.....");
//     await getData(1);
//     console.log("Fetching Data 1.....")
    
//   await getData(2);
//   console.log("Fetching Data 1.....")
//   await getData(3);
//   console.log("Fetching Data 1.....")
//   await getData(4);
//   console.log("Fetching Data 1.....")

//     }







