import { Schema, model, Document } from 'mongoose'

interface Form extends Document {
    body: any
}

const FormSchema = new Schema({
  body: {
    type: Object
  }
}, {
  timestamps: true
})

export default model<Form>('Form', FormSchema)
