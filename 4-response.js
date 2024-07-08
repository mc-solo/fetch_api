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

function getData() {
  let file = new File([JSON.stringify(obj)], "mydata.json");
  let response = new Response(file, {
    status: 200,
    header: {
      "content-type": "applicaiton/json",
      "content-length": file.size,
    },
  });
}
