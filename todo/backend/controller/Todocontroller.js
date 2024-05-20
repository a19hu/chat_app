const TodoModule = require('../models/Todomodel')

module.exports.gettodo = async (req, res) => {

    const todo = await TodoModule.find()
    res.send(todo)
}

module.exports.savetodo =  (req, res) => {
   
    const {todo} = req.body;
    TodoModule.create({todo})
    .then((data)=>{
        console.log('save successfully');
        res.status(201).send({data})
    })
    .catch((err)=>console.log(err))

}

module.exports.updatetodo =  (req, res) => {
    const {id}= req.params
    const {todo} = req.body;
    TodoModule.findByIdAndUpdate(id,{todo})
    .then((data)=>{
        res.send('update successfully')
    })
    .catch((err)=>{

        console.log(err);
    res.send('update successfully')
    })

}

module.exports.deletetodo =  (req, res) => {
    const {id}= req.params
    TodoModule.findByIdAndDelete(id)
    .then((data)=>{
        res.send('delete successfully')
    })
    .catch((err)=>{

        console.log(err);
    res.send('delete successfully')
    }
)

}