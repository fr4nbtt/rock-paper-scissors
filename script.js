function getRandomInt() {
  // Generate a random integer between 0 and 2
  let choice = Math.floor(Math.random() * 3);
  console.log(choice);

  // Determine the response based on the random choice
  switch (choice) {
    case 0:
      console.log("Rock!");
      break;
    case 1:
      console.log("Paper!");
      break;
    default:
      console.log("Scissors!"); // Covers the case when choice is 2
  }
}
