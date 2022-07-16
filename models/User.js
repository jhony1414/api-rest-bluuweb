import mongoose from 'mongoose'
const { Schema, model } = mongoose 
import bcrypt from 'bcrypt'

const UserSchema = new mongoose Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true },


    },
    password: {
        type: String,
        required: true

    }
})

export const User = model( 'user', UserSchema )