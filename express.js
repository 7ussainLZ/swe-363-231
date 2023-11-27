const express = require("express");
const app = express();
const path = require('path')
// const proposal = require('./prop')
app.use(express.static(path.join(__dirname,"")))

app.get('/', (request,response) =>{
    const fileP = path.join(__dirname,"index.html")
    response.status(200).sendFile(fileP)
})

app.get('/forms', (request,response) =>{
    const fileP = path.join(__dirname,"forms.html")
    response.status(200).sendFile(fileP)
})

app.get('/contact', (request,response) =>{
    const fileP = path.join(__dirname,"contact.html")
    response.status(200).sendFile(fileP)
})

//....

app.all('*', (request,response) =>{
    response.status(200).send("<h1>404 <br> <br>The page you are looking for does not exist!</h1>")
})



app.listen(3000, () =>{ 
    console.log(
        "Server is running on port 3000"
    )
})
