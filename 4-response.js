const jsonstr = "http://127.0.0.1:5500/local-sample.json"; // json file
const imgstr = "https://picsum.photos/id/237/300/200"; // image file
const fontstr =
  "https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXp-p7K4KLg.woff2"; // font file
const htmlstr = "http://127.0.0.1:5500/"; //html file

let obj = {
  id: crypto.randomUUID(),
  name: "the one who knocks",
  favoriteColor: "blue",
};

const getData = function () {
  // convert obj to string
  const jsonStr = JSON.stringify(obj);

  // use the converted str to make a new file
  const file = new File([jsonStr], "mydata.json");

  // make a response object from the file
  const response = new Response(file, {
    status: 200,
    headers: {
      "content-type": "application/json",
      "content-length": file.size,
    },
  });

  return response;
};
