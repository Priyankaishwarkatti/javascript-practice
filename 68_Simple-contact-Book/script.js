let contacts = [];

function addContact(name, phone) {
  contacts.push({ name, phone });
}

function searchContact(name) {
  return contacts.find(contact => contact.name === name);
}

addContact("Priyanka", "1234567890");
addContact("Nikhil", "9876543210");

console.log(contacts);
console.log("Search:", searchContact("Priyanka"));
