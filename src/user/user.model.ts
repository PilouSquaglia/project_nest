import { SrvRecord } from 'dns';
import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    age: Number,
});

export interface User extends mongoose.Document{
    id: string;
    nom: string;
    prenom: string;
    age: number;
}