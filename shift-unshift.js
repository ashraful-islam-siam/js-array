const friends = [
  "Humayun Faridi",
  "Razzak",
  "Siam Ahmed",
  "Alamgir",
  "Bulbul Ahmed",
];

// Remove first element from an array
friends.shift();
friends.shift();
console.log(friends);

// Add element from first index
friends.unshift("Siam Hawlader");
friends.unshift("Ashraful Islam");
friends.unshift("Ashraful Islam Siam");
console.log(friends);
