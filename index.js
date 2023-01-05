const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
const {readdirSync} = require('fs')


// =============== Dynamic Routes Start here ==================
readdirSync("./routes").map((file)=> app.use("/", require("./routes/"+file)))
// =============== Dynamic Routes End here ====================

require('dotenv').config()
const port =process.env.PORT || 8000



app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
});
