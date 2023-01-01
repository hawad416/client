const express = require('express')
const app = express();


app.get("/api", (req,res) => {
    res.json({
        "users": ["hawa", "adam", "katelyn", "john"]
    })
})

app.listen(8080, () => {console.log("server is running on 5k")});
