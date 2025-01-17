const adminAuth = (req, res , next) => {
    // This is our Middleware
  console.log("Admin authis getting cheked"); 
  // Logic of cheking if the request is authorized
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized requet");
  } else {
    next();
  }
}

module.exports = {
    adminAuth,
}