class C1{
  name="Hima";
  printName =()=>{
    console.log(this.name);
  }
}

class C2 extends C1{
   Gender="Female";
 name="Rani";
  printGender=()=>{
    console.log(this.Gender);
  }
}

const a=new C2();
a.printGender();
a.printName();
