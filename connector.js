let express = require ("express")
let path = require("path")
let app = express()

// let myfile = path.join(__dirname, "about.html")

app.get("/", (req,res)=>{
res.sendFile(path.join(__dirname, "EasyPg1.html")
)
})

app.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname, "Login.html")
    )
    })

    app.get("/about", (req,res)=>{
        res.sendFile(path.join(__dirname, "about.html")
        )
        })
        
    
app.listen("3000", ()=>{
  
console.log('connected to the server')
console.log(__dirname)
let file = path.join(__dirname, "EsayPg.html")
console.log(file)
})