// console.log("Starting a new project");

const express = require('express');

const app = express(); // this is an insatnce of your exprssjs server

// app.use("/", (req, res)=>{
//     res.send("Hello from the dashboard"); // This functions known is request handler
// It will take first always this router it will override all the routeer
// so we have to keep this at the bottom of all the router
// });


// ## ORDER IS VERY MUCH MATTER
// This will only handle GET call to /user 
app.get("/user", (req, res)=>{
    res.send({firstName:"Akshya", lastame:"Saini"});

})

app.post("/user", (req, res)=>{
    // Saving data to DB
    // console.log("Save Data successfuly");
    res.send("Data save successfully")
})

app.delete("/user", (req, res)=>{
    res.send("Deleted successfully !!")
})

// this will match all the HTTP methodAPI calls to /test
app.use("/test", (req, res)=>{
    res.send("Hello from the test router"); // This functions known is request handler //
});

app.use("/hello", (req, res)=>{
    res.send("Hello from the Hello router"); // This functions known is request handler
});


app.use("/", (req, res)=>{
    res.send("Hello from the dashboard"); // This functions known is request handler
// It will take first always this router it will override all the routeer
// so we have to keep this at the bottom of all the router // now it will works fine
// ## Order is very imp.
});

app.listen(3000, ()=>{
    console.log("Server is successfully listiningon port 3000...");
});

// It is very annoying to stop server and re-run again so we have to download Nodemon instal globally in system level it will work for every project And instead of write Node before any file write nodemon

// Whnever we make any changes then we have to stop running code and laund again