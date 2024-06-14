import { env } from '$env/dynamic/private';
import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(env.MONGODB_URI);

await client.connect();

const db = client.db('mnatravel');

export default db;
