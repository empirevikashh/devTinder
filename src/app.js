const express = require("express");
const app = express();
const {adminAuth} = require("./middlewares/auth")

//Handle Auth Middleware for all  GET requests GET, POST,Patch....

app.use("/admin/getAllData", adminAuth); // I have keep this midleware in saprate folder

app.get("/admin/getAllData", (req, res) => {
  console.log("resp 1");
  res.send("All Data send");
  // Logic of cheking if the request is authorized
  /**
  { // This code would be manage in app.use
     const token = "xyz";
     const isAdminAuthorized = token === "xyz";
  if(isAdminAuthorized){
    res.send("All Data send")
  }
  else{
    res.status(401).send("Unauthorized requet")
  }

}
   */
});

app.get("/admin/deletUser", (req, res) => {
  console.log("resp 2");
  res.send("Deleted the user");
});

app.listen(7777, () => {
  console.log("Server is successfully listing on port 7777...");
});
