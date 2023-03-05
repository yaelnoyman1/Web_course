/****************************************************/
// Populate database from json file: countries and capital cities //
/***************************************************/

const { MongoClient } = require("mongodb");
const fs = require('fs');
require('dotenv').config()

//ADD YOUR CONNECTION STRING IN .env FILE!
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function run() {
    try {
        const db = client.db("ex3");
        fs.readFile('src/data/MoMA.json', (err, data) => {
            if (err) throw err;
            let artistsJSON = JSON.parse(data);    
                
            const collection = db.collection('artists');     

            //insert is deprecated!
            collection.insert(artistsJSON, function(err, result) {  
                if(err){throw err}
                console.log(result);
                client.close();
                console.log("Collection updated.")    
            });     
        });

    } catch {
        console.log("error inserting documents...")
    }

}

run().catch(console.dir);

