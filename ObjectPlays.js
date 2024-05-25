const person = {
  name: "Kartik Sharma",
  age: "23",
  occupation: "Software Developer",
};

function introducePerson(person) {
  return `Hello my name is ${person["name"]} and i am ${person["age"]} years old, i am a ${person["occupation"]}.`;
}

console.log(introducePerson(person));
