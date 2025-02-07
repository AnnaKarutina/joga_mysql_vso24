const db = require('../utils/db')

const getAllArticles = (req, res) => {
    const sql = 'SELECT * FROM article'
    db.query(sql, (error, result) => {
        if(error) throw error;
        res.render('index', {
            articles: result
        })
    })
}

const getArticlesBySlug = (req, res) => {
    const sql =`SELECT * FROM article WHERE slug="${req.params.slug}"`
    db.query(sql, (error, result) => {
        if(error) throw error;
        res.render('article', {
            article: result
        })            
    })
}

module.exports = { 
    getAllArticles,
    getArticlesBySlug
}
