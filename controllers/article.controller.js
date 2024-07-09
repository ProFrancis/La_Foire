const ArticleModel = require('../models/article.model')
 
// Créer un nouvel Article
const addArticle = async (req, res) => {
  try{
    const response = await ArticleModel.create(req.body)
    res.status(201).json(response)
  }catch(error){
    res.status(500).json({ error: error.message })
  }
}

// Récupérer tous les Articles
const getAllArticle = async (req, res) => {
  try{
    const response = await ArticleModel.find()
    res.status(200).json(response)
  }catch(error){
    res.status(500).json({ error: error.message })
  }
}

// Récupérer un article par son id
const getArticleByid = async (req, res) => {
  try{
    const response = await ArticleModel.findById(req.params.id)
    res.status(200).json(response)
  }catch(error){
    res.status(500).json({ error: error.message })
  }
}

// Mettre à jours un article par son id
const updateArticle = async (req, res) => {
  try{
    const response = await ArticleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(response)
  }catch(error){
    res.status(500).json({ error: error.message })
  }
}

// Supprimer un article
const deleteArticle = async (req, res) => {
  try{
    const response = await ArticleModel.findByIdAndDelete(req.params.id)
    res.status(200).json(response)
  }catch(error){
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  addArticle,
  getAllArticle,
  getArticleByid,
  updateArticle,
  deleteArticle
}