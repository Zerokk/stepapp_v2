export class Hi{

  public property: string;

  constructor(property:string){ 
      this.property = property;
  }
}


const hi = new Hi("hi, test");
console.log("Result: ", hi.property);
