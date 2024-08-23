const people = [{name: "Salman", age: 20, gpa:3.6},
                {name: "Jawad", age: 18, gpa:3.8},
                {name: "Taimoor", age: 17, gpa:3.4},
                {name: "Ahmad", age: 19, gpa:3.0}];

people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);