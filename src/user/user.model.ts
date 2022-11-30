import { SrvRecord } from 'dns';
import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    nom: String,
    email: String,
    age: Number,
    password: String,
});

export interface User extends mongoose.Document{
    id: string;
    nom: string;
    email: string;
    age: number;
    password: string;
}