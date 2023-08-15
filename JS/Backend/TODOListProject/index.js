import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const todoLists = [
    
    {name: "Yazilim calis"},
    {name: "Ingilizce calis",}
]

app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.post("/", (req,res) => {
    const todoName = req.body["newItem"];
    res.render("index.ejs", {
        newItem : todoName,
    })
});

app.listen(port, (req,res) => {
    console.log(`Listening port on ${port}`);
});