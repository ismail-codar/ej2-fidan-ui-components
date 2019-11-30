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

async function test1() {
  try {
    let result = null;
    try {
      result = await db.put(doc);
      console.log("put result 1", result);
    } catch (e) {
      console.error(e);
    }

    let getDoc: typeof doc = (await db.get("mittens")) as any;
    console.log("getDoc 1", getDoc);
    getDoc.age = 8;
    result = await db.put(getDoc);
    console.log("put result 2", result);
    getDoc = (await db.get("mittens")) as any;
    console.log("getDoc 2", getDoc);
  } catch (err) {
    console.error(err);
  }
}

test1();
