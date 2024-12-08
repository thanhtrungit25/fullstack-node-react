import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()

const post = new Post({
  title: 'Hello Mongoose',
  author: 'Danial Bugl',
  contents: 'This post is stored in a MongoDB Mongoose.',
  tags: ['mongoose', 'mongodb'],
})

const createdPost = await post.save()

await Post.findByIdAndUpdate(createdPost._id, {
  $set: { title: 'Hello again, Mongoose!' },
})

const posts = await Post.find()
console.log(posts)