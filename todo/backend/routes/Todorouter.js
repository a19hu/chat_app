const {Router}= require('express')
const {gettodo,savetodo,updatetodo,deletetodo} = require('../controller/Todocontroller')
const router = Router()


router.get("/get",gettodo)
router.post("/save",savetodo)
router.put("/update/:id",updatetodo)
router.delete("/delete/:id",deletetodo)



module.exports = router