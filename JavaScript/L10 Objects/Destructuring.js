console.log("Learn Object Destructuring....");

const student = {
  name: "John Williamson",
  age: 9,
  std: 3,
  subjects: ["Maths", "English", "EVS"],
  parents: {
    father: "Brown Williamson",
    mother: "Sophia",
    email: "john-parents@abcde.com",
  },
  address: {
    street: "65/2, brooklyn road",
    city: "Carterton",
    country: "New Zealand",
    zip: 5791,
  },
};

// Object destructuring
const { name, age, meal = "bread" } = student;
console.log(name, age, meal);

const { subjects, numberOfSubjects = subjects.length } = student;
console.log("no. of subjects:", numberOfSubjects); // 3

// aliasing
/* In case we want to use a different variable name than the property name, we can use aliasing. We can use 
the syntax: propertyName: variableName to assign the value of the property to a variable with a different name. */  
const { std: standard } = student;
console.log("standard:", standard);

// nested destructuring
const {
  address: { zip },
} = student;
console.log("zip:", zip);

function sendEmail({ parents: { email } }) {
  console.log(`Sent an email to ${email}`);
}

sendEmail(student);

const getStudent = () => {
  return {
    name: "John Williamson",
    age: 9,
    std: 3,
    subjects: ["Maths", "English", "EVS"],
    parents: {
      father: "Brown Williamson",
      mother: "Sophia",
      email: "john-parents@abcde.com",
    },
    address: {
      street: "65/2, brooklyn road",
      city: "Carterton",
      country: "New Zealand",
      zip: 5791,
    },
  };
};

const { name: anotherName, subjects: anotherSubs } = getStudent();
console.log(anotherName, anotherSubs);

// Destructuring in for...of loop
const students = [
  {
    name: "William",
    grade: "A",
  },
  {
    name: "Tom",
    grade: "A+",
  },
  {
    name: "Bob",
    grade: "B",
  },
];

console.log("Destructuring in for...of loop");
for (let { name, grade } of students) {
  console.log("name:", name, "and" ,"grade:", grade);
}
