const {MongoClient,ObjectID} = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

//   const collection = db.collection('Todos');
//   collection.insertOne({
//       text:'something to do',
//       completed:false
//   },(err,result)=>{
//       if(err){
//           return console.log('unable to insert',err);
//       }

//       console.log(JSON.stringify(result.ops, undefined, 2))
//   })

// const userCollection=db.collection('Users');
// userCollection.insertMany([{
//     name:'sengu',
//     age:28,
//     location:'singapore'
// },{
//     name:'andrew',
//     age:28,
//     location:'poland'
// }], function(err, result) {

//     if(err){
//         return console.log('unable to insert',err);
//     }

//     console.log("Inserted 3 documents into the collection");
//     console.log(JSON.stringify(result.ops));
// })

  // client.close();
});