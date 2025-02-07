const express = require('express')
const articleController = require('../controllers/articles')
const router = express.Router()

router.get('/', articleController.getAllArticles)
router.get('/article/:slug', articleController.getArticlesBySlug)

module.exports = router