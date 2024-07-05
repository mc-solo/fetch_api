// using async/await instead of chaining then()
// it still needs error handling with try...catch

const url = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  const response = await fetch(url); // Wait until fetch completes
  const data = await response.json(); //wait until JSON parsing completes

  console.log(data); //log the parsed data
}

getData();
