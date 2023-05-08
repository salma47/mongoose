const router=require("express").Router()
const controller=require("../controllers/product")

router.post('/api/create/product',controller.createproduct)

module.exports={reouterpost:router}