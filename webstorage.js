// Web Storage API

// It's not part of the DOM- refers to the window API
// Available to JS via the global variable: window
// We don have to write window. It's implied

// const myObject = {
//   name: "Wondwosen Asegid",
//   age: 21,
//   logName: function () {
//     console.log(this.name);
//   },
// };

const myArray = [1, 3, 5, 7];

// sesisonStorage()
sessionStorage.setItem("sessionStoreObject", JSON.stringify(myObject));
sessionStorage.setItem("sessionStoreArray", myArray);

const data_1 = sessionStorage.getItem("sessionStoreObject");
// console.log(data_1, typeof data_1);

// what if we wanted to get back the object type, then we should parse it back to object just like this

const parseBackToObject = JSON.parse(data_1);
console.log(parseBackToObject, typeof parseBackToObject);

// the localStorage

// this is unstringfified,
const myObject = {
  name: "Wondwosen Asegid",
  age: 21,
  logName: function () {
    console.log(this.name);
  },
};

const localStoreData = localStorage.setItem("localStoreObject", myObject); // result in [obj obj]

const strLocalData = JSON.stringify(localStoreData);
console.log(strLocalData, typeof localStoreData);
