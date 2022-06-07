import { Schema, model, Document } from 'mongoose'

interface User extends Document {
    name?: string
    email?: string
    password?: string
}

const UserSchema = new Schema({
  email: String,
  fistName: String,
  lastName: String
}, {
  timestamps: true
})

export default model<User>('User', UserSchema)
