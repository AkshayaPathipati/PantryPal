const { MongoClient } = require("mongodb");
require('dotenv').config({ path: "./config.env" });

async function main() {
    const db = process.env.ATLAS_URI;
    console.log(process.env.ATLAS_URI);
    const client = new MongoClient(db);

    try {
        await client.connect();

        //const dbList = await client.db().admin().listDatabases();

        //console.log("Databases:");
        //dbList.databases.forEach(db => console.log(` - ${db.name}`));

        //const collections = await client.db("pantrypal").collections();
        //collections.forEach((collection) => console.log(collection.s.namespace.collection));
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }

};

main();