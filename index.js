const express   = require("express")
const app = express();
const port  = 8001;
const  urlRoute = require('./routes/url') 
const URL = require('./models/url')
const { ConnectToMongoose } = require('./connect')

ConnectToMongoose('mongodb://127.0.0.1:27017/lala_5')
.then(()=>{
    console.log("mongo db connect ");
})
app.use(express.json())
app.use('/url', urlRoute)

app.get('/:shortId', async(req,res)=>{
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