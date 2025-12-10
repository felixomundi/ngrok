const express = require("express");
const ngrok = require('ngrok');
const app = express();
require('dotenv').config()
const PORT = 3000;

app.use(express.json());

async function Connect() {
    const url = await ngrok.connect({
        proto: 'http',
        addr: 8049,
        authtoken: process.env.NGROK_AUTHTOKEN,
    });
    console.log(url)
};

Connect();

app.use("/", async (req, res) => {
    res.send("Welcome Home")
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is Successfully Running on port ${PORT}`)
    }
    else {
        console.log("Error occurred", error);
    }
}
);