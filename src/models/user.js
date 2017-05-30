import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  collection: 'user',
  timestamps: true
})

export default mongoose.model('user', userSchema)
