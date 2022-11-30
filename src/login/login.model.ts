import * as mongoose from 'mongoose'

export const LoginSchema = new mongoose.Schema({
    email: String,
    password: String,
});

export interface Login extends mongoose.Document{
    email: string;
    password: string;
}