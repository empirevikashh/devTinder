// HERE IS THE ADVANCE ROUTER CONCEPTS

const express = require("express");

const app = express(); // this is an insatnce of your exprssjs server

// ## ORDER IS VERY MUCH MATTER

// /ac /abc is also work

// /ab*cd it will work fine only the thing is it should be start with 'a' and end's with 'd' i.e. First and Last letter is always should be same
// Group together "/a(bc)?d  bc is optainal but it will work"
// app.get("/ab*cd", (req, res) =>{
//     res.send({firstName:"Akshya", lastame:"Saini"});
// })

//  We will get query params

// /user?userId=101&password=tester // this is how we can use params and query parameters
// app.get("/user", (req, res) =>{
//     // we will get query params
//     console.log(req.query);
//     res.send({firstName:"Akshya", lastame:"Saini"});
// })

// colon : means dynamic route
// http://localhost:3000/user/707/vikash/empire
app.get(
  "/user/:userId/:name/:password",
  (req, res, next) => {
    // we will get query params
    console.log(req.params);
    console.log("res 1");
    // res.send({ firstName: "Akshya", lastame: "Saini" }); 
    // If we remove this res.send request it will bejust load & load & load .....etc it will not goes into 2nd function your request will hang

    // If we wants to execute 2nd function so we have to write next() function nd it will only work when we doesn't send any request in first function

    // and we can also wrp up into array whole or few funtions
    next();
  },
  (req, res) => {
    console.log("res 2");
    res.send({ firstName: "Vikash", lastame: "Saini" });
  }
);

app.listen(3000, () => {
  console.log("Server is successfully listiningon port 3000...");
});

/**
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


// It is very annoying to stop server and re-run again so we have to download Nodemon instal globally in system level it will work for every project And instead of write Node before any file write nodemon

// Whnever we make any changes then we have to stop running code and laund again

 */
