const express      = require('express')
const bodyParser   = require('body-parser')
const app          = express()

const pgConnect    = require('./connect')
const UserModel    = require('./models/UserModel')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.get('/', (req , res)=>{
    res.send('Hello World Node Express .')
})

//check connection
app.get('/testConnection', async (req , res)=>{
    
    try {
        await pgConnect.authenticate();
        res.send('Connection has been established successfully.');
      } catch (error) {
        res.send('Unable to connect to the database:', error);
      }
})

// post row data 
app.post('/insertAPI' , async (req , res)=>{
    const Created = await UserModel.create(req.body)
    res.send({status: Created})
})

// delete row data
app.delete('/deleteAPI/:id' , async (req , res)=>{
    const del = await UserModel.destroy({
        where: {
            id: req.params.id
        }
    })
    res.send({statusDel: del})
})



app.listen(3000,()=>{
    console.log('start my server port 3000......');
})