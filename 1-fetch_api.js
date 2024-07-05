const url = "https://jsonplaceholder.typicode.com/users";

function fetchData() {
  fetch(url)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Response was not okay");
      }
      return resp.json();
    })

    .then((data) => {
      console.log(data);
    })

    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

fetchData();
