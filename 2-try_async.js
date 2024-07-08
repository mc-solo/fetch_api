// using async/await instead of chaining then()
// it still needs error handling with try...catch
// the response var holds a response object that is returened from the fetch api, and we can apply lots of methods to this object like:
// .json: parses the response into a json format
// .text: returns the response body as text str
// .blob: returns a blob object representing the response body...

const url = "https://jsonplaceholder.typicode.com/users";
// this the bare minimum code to fetch data using async/await syntax
// handling an error is crucial in every aspect of the code
// so use try catch in this

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Response was not okay!");
    } else {
      const dataObj = await response.json();
      console.log(dataObj);
    }
  } catch (err) {
    console.warn(`Error encountred during fetch, ${err.message},`);
  }
}

fetchData();
