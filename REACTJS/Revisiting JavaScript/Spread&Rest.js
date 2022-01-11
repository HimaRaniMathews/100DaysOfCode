//Spread in array
const n1=[1,2,3];
const n2=[...n1,4];
console.log(n2)

//In object
const p1={name:"hima"};
const p2={...p1,age:13};
console.log(p2)

//In function
const filter=(...args)=>{
  return args.filter(el =>el===1) // '===' euals boths type and value
}
console.log(filter(1,2,3,1));
