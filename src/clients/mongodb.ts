import { MongoClient, ServerApiVersion } from "mongodb";

export default class MongoDBClient extends MongoClient {
    constructor(uri: string) {
        super(uri,
            {   
                serverApi: ServerApiVersion.v1,
                
            }
        );
    }

    collection(collection_name: string) {
        return this.db('rs-portfolio').collection(collection_name);
    }
}