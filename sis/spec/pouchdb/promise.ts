import * as PouchDB from "pouchdb";

// PouchDB.debug.enable("*");
var db = new PouchDB("kittens");

//insert
var doc = {
  _id: "mittens",
  name: "Mittens",
  occupation: "kitten",
  age: 3,
  hobbies: [
    "playing with balls of yarn",
    "chasing laser pointers",
    "lookin' hella cute"
  ]
};
db.put(doc);

//update data
// fetch mittens
db
  .get("mittens")
  .then(function(doc: any) {
    debugger;
    // update their age
    doc.age = 7;
    // put them back
    db.put(doc);
  })
  .then(function() {
    // fetch mittens again
    return db.get("mittens");
  })
  .then(function(doc) {
    debugger;
    console.log("doc 2");
    console.log(doc);
  });
