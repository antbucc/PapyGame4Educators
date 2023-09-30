import { OclEngine } from '@stekoe/ocl.js';

class Person {
  private parents = [];
}

// Define OCL rule
const myOclExpression = `
    context Person
        inv: self.parents->forAll(p | p <> self)
`;

// Instantiate the OclEngine here
const oclEngine = OclEngine.create();

// Add your first OCL expression here
oclEngine.addOclExpression(myOclExpression);

// Evaluate an object obj against all know OCL expressions
const oclResult = oclEngine.evaluate(new Person());

// Prints 'true' to console!
console.log(oclResult.getResult());
