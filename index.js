const express = require("express");
const ngrok = require('ngrok');
const app = express();
require('dotenv').config()
const PORT = 3000;
// const cors = require("cors");

 
app.use(express.json());  
// app.use(cors({ origin: ['127.0.0.1', '2394-41-209-51-2.ngrok.io'] }));

async function Connect() {
    const url = await ngrok.connect({
        proto: 'http',
        addr: 3000,
        authtoken:process.env.AUTHTOKEN,
    });
    console.log(url)
};

Connect();

app.use("/", async (req, res) => {
    res.send("Welcome Home")
});
 
app.listen(PORT, (error) =>{
if (!error) {
console.log(`Server is Successfully Running on port ${PORT}`)
}
else {
console.log("Error occurred", error);
}
}
);