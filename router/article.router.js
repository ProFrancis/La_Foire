const express = require("express");
const ArticleController = require("../controllers/article.controller");
const verifieToken = require("../middlewares/auth");

const router = express();

router.post("/post", verifieToken, ArticleController.addArticle);

router.get("/get", ArticleController.getAllArticle);
router.get("/id/:id", ArticleController.getArticleByid);
router.put("/update/:id", ArticleController.updateArticle);
router.delete("/delete/:id", ArticleController.deleteArticle);

module.exports = router;
