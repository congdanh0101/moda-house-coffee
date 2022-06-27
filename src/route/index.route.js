const drinkRouter = require('./drink.route')


function route(app){
    app.use('/drink',drinkRouter)
    app.get('/',(req,res)=>{
        res.send("Hello World")
    })
}

module.exports = route