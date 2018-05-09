const MongoClient = require('mongodb').MongoClient;
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

  const collection = db.collection('Users');

  collection.find().count().then((count)=>{
        console.log('Todos length = '+count)
    },(err)=>{
        console.log('unable to fetch');
    })

//   collection.find({name:'sengu'}).toArray().then((docs)=>{
//       console.log('Todos')
//       console.log(JSON.stringify(docs))
//   },(err)=>{
//       console.log('unable to fetch');
//   })
//   client.close();
});