const express   = require("express")
const app = express();
const path = require('path')
const port  = 8001;
const  urlRoute = require('./routes/url') 
const  staticRoute = require('./routes/staticRouter') 
const URL = require('./models/url')
const { ConnectToMongoose } = require('./connect')

ConnectToMongoose('mongodb://127.0.0.1:27017/lala_5')
.then(()=>{
    console.log("mongo db connect ");
})

app.set('view engine',"ejs")
app.set('views',path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/url', urlRoute)
app.use('/', staticRoute)


app.get('/test', async(req,res)=>{
    const allurls = await URL.find({})
    return res.render("home",{
        urls: allurls,
    })
})








app.get('/url/:shortId', async(req,res)=>{
    const shortId  = req.params.shortId;
   const entry =  await URL.findOneAndUpdate({
        shortId
    },{
        $push:{
           visitHistory: {
              timestamp: Date.now(),
           }
        }
    }
);
res.redirect(entry.redirectURL)
})














app.listen(8001,(req,res)=>{
    console.log(`sever is running at http://localhost:8001`);
    
})