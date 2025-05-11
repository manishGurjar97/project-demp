const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/about", (req, res) => {
    res.render("about.ejs"); // make sure this file is in views folder
});
app.get("/home",(req,res)=>{
    res.redirect("index.html")
})
app.get("/contect",(req,res)=>{
    res.render("contect.ejs")
})
app.get("/course",(req,res)=>{
    res.render("course.ejs")
})
app.get("/coursevisite",(req,res)=>{
    res.render("coursevisite.ejs")
})

app.listen(port, () => {
    console.log("server is on at port", port);
});
