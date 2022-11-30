import { SrvRecord } from 'dns';
import * as mongoose from 'mongoose'

export const UserTestSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    age: Number,
});

export interface UserTest extends mongoose.Document{
    id: string;
    nom: string;
    prenom: string;
    age: number;
}