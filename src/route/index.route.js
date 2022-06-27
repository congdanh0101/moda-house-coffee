const drinkRouter = require('./drink.route')


function route(app){
    app.use('/drink',drinkRouter)
    app.get('/',(req,res)=>{
        res.json({mess:'Hello world'})
    })
}

module.exports = route