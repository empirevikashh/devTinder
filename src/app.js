// console.log("Starting a new project");

const express = require('express');

const app = express(); // this is an insatnce of your exprssjs server

app.use("/", (req, res)=>{
    res.send("Hello from the dashboard"); // This functions known is request handler
});

app.use("/test", (req, res)=>{
    res.send("Hello from the test router"); // This functions known is request handler
});

app.use("/hello", (req, res)=>{
    res.send("Hello from the Hello router"); // This functions known is request handler
});

app.listen(3000, ()=>{
    console.log("Server is successfully listiningon port 3000...");
});

// It is very annoying to stop server and re-run again so we have to download Nodemon instal globally in system level it will work for every project And instead of write Node before any file write nodemon

// Whnever we make any changes then we have to stop running code and laund again