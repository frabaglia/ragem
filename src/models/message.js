import mongoose from 'mongoose'

const Schema = mongoose.Schema

const messageSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  channel: {
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  collection: 'message',
  timestamps: true
})

export default mongoose.model('message', messageSchema)
