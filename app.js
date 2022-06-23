const express = require("express"),
      app     = express();

// Requiring route
var indexRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use("/", indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server started!");
});