let express = require("express");
let bodyParser = require("body-parser");
// let ContactRoutes = require("./routes/ContactRoutes");
// let mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.connect(
//   "mongodb://lesleysab:Murphydog1@ds261302.mlab.com:61302/resume-contact"
// );

const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
  return res.json("ho");
});

app.post("/users", function(request, response, next) {
  let newUser = {
    _id: 1,
    name: "New Person",
    occupation: "FBI Agent",
    avatar: "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"
  };
  users.push(newUser);
  response.json(newUser);
});

// app.post("/contact", function(request, response, next) {
//   let contact = request.body;
//   contact.push(newContact);
//   response.json(newContact);
// });

app.listen(3002, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3002");
});
