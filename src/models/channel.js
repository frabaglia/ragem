import mongoose from 'mongoose'

const Schema = mongoose.Schema

const channelSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  messages: {
    type: [Schema.Types.ObjectId],
    default: []
  }
}, {
  collection: 'channel',
  timestamps: true
})

export default mongoose.model('channel', channelSchema)
