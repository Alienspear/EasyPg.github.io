let express = require('express');
//let port = 3000;
let path = require('path');
let app = express();

app.listen(3000);

app.use(express.static(path.join(__dirname , "public")))

app.get('/' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/EasyPg.html"));
})
app.get('/about.html' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/about.html"));
})
app.get('/book.html' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/book.html"));
})
app.get('/gallery2.html' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/gallery2.html"));
})
app.get('/LogIn.html' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/LogIn.html"));
})
app.get('/services.html' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/services.html"));
})
app.get('/sign.html' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/sign.html"));
})
app.get("*" , (req,res) =>{
    res.send("<h1>404 Error</h4>")
})