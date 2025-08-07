import {connectToMongo,db} from '../db/connect.js'

export async function getAll(){
    const complains = await db.collection('complains')
    .find().toArray()
    return complains
}
export async function add(complains){
    await db.collection('complains')
    .insertOne(complains)
}
