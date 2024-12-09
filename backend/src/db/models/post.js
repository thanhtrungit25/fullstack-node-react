import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    contents: String,
    tags: [String],
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  },
  {
    timestamps: true,
  },
)

export const Post = mongoose.model('post', postSchema)
