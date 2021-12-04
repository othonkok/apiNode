const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// Get all Posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//Create One
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.params.title,
        description: req.params.description,
        markdown: req.params.markdown
    })
    const savedPost = await post.save()
    res.json(savedPost)
})

//Get One
router.get('/:postId', async(req, res) => {
    const post = await Post.findById(req.params.postId)
    res.json(post)
})

//Delete One
router.delete('/:postId', async (req, res) => {
    const removedPost = await Post.remove({ _id: req.params.postId })
    res.json(removedPost)
})

//Update One
router.patch('/:postId', async(req, res) => {
    const updatedPost = await Post.updateOne(
        { _id: req.params.postId },
        { $set: { title: req.params.title }}
    )
    res.json(updatedPost)
})
module.exports = router
