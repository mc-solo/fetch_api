// URL and request objects

const str = "https://github.com/mc-solo/weather/src";

function getData() {
  const url = new URL(str);
  console.log(`
    host: ${url.host}
    hostname: ${url.hostname}: 
    origin: ${url.origin}: 
    protocol: ${url.protocol}
    prot number: ${url.port}
    pathname: ${url.pathname}

`);
}

getData();

const req = new Request("https://jsonplaceholder.typicode.com/users", {
  method: "GET",
  headers: new Headers({
    "Content-Type": "application/json",
  }),
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
});

async function fetchData() {
  try {
    const resp = await fetch(req);
    if (!resp.ok) {
      throw new Error("Response went wrong XD", resp.status, resp.text);
    } else {
      const data = await resp.json();
      console.log(data);
    }
  } catch (err) {
    console.error(err, err.message);
  }
}

fetchData();
