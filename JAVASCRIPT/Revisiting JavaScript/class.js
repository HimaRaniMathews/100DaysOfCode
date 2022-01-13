class C1{
  constructor(){
    this.name="Hima";
  }
  printName(){
    console.log(this.name);
  }
}

class C2 extends C1{
  constructor(){
        super();
    this.Gender="Female";
  }
  printGender(){

    console.log(this.Gender);
  }
}

const a=new C2();
a.printGender();
a.printName();
