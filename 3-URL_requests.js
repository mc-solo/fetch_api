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
