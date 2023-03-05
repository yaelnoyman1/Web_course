const { MongoClient, ObjectId } = require("mongodb");
require('dotenv').config()

//ADD YOUR CONNECTION STRING IN .env FILE!
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

const getAllArtistsWhoStartingWithSpecificChar = async (req, res) => {
    try {
        await client.connect();
        const database = client.db("ex3");
        const artists = database.collection("artists");

        const searchString = req.body.startName

        const regex = new RegExp("^" + searchString + ".*|.*\\s+" + searchString + ".*", "i");

        const query = {"DisplayName": { "$regex": regex }};
        const options = {
            projection: { _id: 0, DisplayName: 1 },
        };

        const result = await artists.find(
            query, options
        ).limit(20).toArray()


        if (result) { res.status(200).json(result) }
    } catch (err) {
        res.status(500).send("error").json(err)
    }
    

}
module.exports = {
    getAllArtistsWhoStartingWithSpecificChar
}



