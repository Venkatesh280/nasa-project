// arrays
/*
*shift- means add ele in front
*unshift- means delete ele in front
* push-add ele in the last of index
* pop-remove the ele last of ele
*inculdes-find that ele is or not
*slice -create copy of the array 
*splice-modify existing array
*/

// String
// let str="javascript";
// const splittedCharArray=str.split("");
// console.log("splittedArray: ", splittedCharArray);
// const reverse=splittedCharArray.reverse();
// console.log(reverse);
// const re=reverse.join("");
// console.log(re);

//objects

// const person={
//     name:"venky",
//     age:25,
//     isStudent:true,
//     address:{
//         houseno:0-0,
//         block:"viza",
//         road:"4th road",
//         city:"banglore",
//         state:"ap",
//         pin:"535581",
//     },
// };

// const a=[1,2,3,4];
// const b=6;
// const c="venky";
// const d=true;

// console.log(typeof a);
// console.log(typeof person);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(Array.isArray(a));
// console.log(Array.isArray(person));

// if(Array.isArray(a));
// if(!Array.isArray(person) && typeof a==="object")
//     console.log("This is an object and not an array");
// else console.log("This is an array and not an object");

//objects.assign -means its merge the data
// const target={a:1};
// const source1={b:2,c:3};
// const source2={d:4,e:5};
// const result=Object.assign(target,source1,source2);

// console.log("target",target);
// console.log("source1:",source1);
// console.log("source2:",source2);
// console.log("result:",result);

//Object.seal() --its method its can't add new properties but still modify the existing properites when seal not add not delete its only the modify object in alredy exisiting perporite
// const car={make:"toyota"};
// Object.seal(car);
// car.make="honda";
// car.model="civil";
// delete car.make;

// console.log(car);


// Object.isFrozen()-->object.freeze()--> doesnt updated exisiting properties 
// const car={make:"toyota"};
// Object.freeze(car);
// car.make="honda";
// car.model="civil";
// delete car.make;

// console.log(car);
// console.log(Object.isFrozen(car));
// console.log(Object.isFrozen(person));

//object.hasOwnProperty()--> key and value present or not 
// const obj={key:"value"};
// console.log(obj.hasOwnProperty("key"));
// console.log(obj.hasOwnProperty("venkatesh"));
 //======================================================================================

 //spared operator(...)--. the spread operator expand the object and array
//  const base={
//     a:1,b:2
//  };
//  base
 // Rest operator(...)

//  const now=new Date();
//  console.log(now.getDay());

 //shallow copy  & deep copy --> copy top level properites 
//  const shallow={a:{b:1},c:2};
//  const copy={...shallow};
//  copy.c=4;
//  console.log(shallow);
//  console.log(copy)
 //deep copy is not link to the 
//  const deep=JSON.parse(JSON.stringify(shallow));
//  deep.c=40;
//  deep.a.b=20;
//  console.log(shallow);
//  console.log(deep);
 

 // creating a promise-> promises are in task queue 
//  const promise=new Promise((reslove,reject)=>{
//     setTimeout(()=>{
//         if(a%2===0) reslove("resolved");
//         else reject("rejected");
//     },3000);
//  });

 //consuming a promise
 //console.log(promise);
//  promise
//  .then((message)=>{
//     console.log("meassge:", message);
//  }
// )
// .catch((error)=>{
//     console.log("error:",error);
// }
// );

// api call in javascript

const resp= fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then()
console.log("resp",resp);

