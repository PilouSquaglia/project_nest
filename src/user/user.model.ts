import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    nom: {type: String, required: true},
    prenom: String,
    age: Number,
});

export class User {
    constructor(
        public id: string,
        public nom: string,
        public prenom: string,
        public age: number,
    ){}
}