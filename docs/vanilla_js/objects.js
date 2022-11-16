// animal = {key:value, key:value, key:value}
let animal = { name: "juju", species: "cat" };

console.log(animal.name);

let animal_keys = Object.keys(animal);
for (let key of animal_keys) {
  console.log(`${key} : ${animal[key]}`);
}

console.log();

const animals_obj = [
  animal,
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];
