function extractNameAndStreet({ name, address: { street } }) {
    return { name, street };
}

const person = {
    name: "Sunilkumar",
    age: 21,
    address: {
        street: "Nagpur city.",
        city: " Nagpur",
        state: "Maharashtra"
    }
};

const { name, street } = extractNameAndStreet(person);
console.log(name);    // "Sunilkumar"
console.log(street);  // Nagpur city."
