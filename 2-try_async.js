// using async/await instead of chaining then()
// it still needs error handling with try...catch

const url = "https://jsonplaceholder.typicode.com/users";
// this the bare minimum code to fetch data using async/await syntax
// handling an error is crucial in every aspect of the code
// so use try catch in this

async function fetchData() {
  const response = await fetch(url);
  try {
    if (!response.ok) {
      throw new Error("response gone wrong!", response.status, response.text);
    } else {
      console.log(response); //unformatted response from the api call
    }

    //parse repsone to JSON  format
    const dataObj = await response.json();
  } catch (error) {
    console.error("Error encounterd", error.message);
  }
}

fetchData();
