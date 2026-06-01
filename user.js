const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 }
];

function getUserData(userId) {
  console.log("Fetching user with id:", userId);

  let result = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      result = users[i];
    }
  }

  return result;
}

function printUser(userId) {
  const user = getUserData(userId);

  console.log("User details: " + user.name + " (" + user.age + ")");
}

printUser("1");
printUser(null);
printUser();
