const express = require("express");

const app = express();

// Route to handle GET requests
app.get("/getUserData", (req, res) => {
//   try {
    // Simulating an error
    
    // This line will not be executed due to the error above
    // throw new Error("error");
    res.send("user data sent");
//   } catch (err) {
    // Send an error response with a proper message and status code
    // res.status(500).send("Something went wrong: " + err.message);
//   }
});

/**
 * (req,res)
 * (req,res,next)
 * (error,req,res,next)
 * this is how its work orders matters a lot
 */

/**
 * Middleware for handling errors globally
 * This gets triggered if `next(err)` is called in any route.
 */
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send("Global error handler: Something went wrong");
  }
});

// Start the server
const PORT = 7777;
app.listen(PORT, () => {
  console.log(`Server is successfully listening on port ${PORT}...`);
});



/**
 * 

const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  // whenerever you are doing any code like DB call write insite try catch.

  try {
    throw new Error("error");

    res.send("user data send");
  } 
  
  catch (err) {
    res.status(500).send("Something went wrong in catch");
  }

//   xnsnx
});



// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("Something went wrong");
//   }
// });

app.listen(7777, () => {
    console.log("Server is successfully listing on port 7777..");
  });
  


 */