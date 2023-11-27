const express = require("express");
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser');

// const proposal = require('./prop')

router.get('/', (request,response) =>{
    const fileP = path.join(process.cwd(),"index.html")
    response.status(200).sendFile(fileP)
})
router.get('/en', (request,response) =>{
    const fileP = path.join(process.cwd(),"index.html")
    response.status(200).sendFile(fileP)
})
router.get('/ar', (request,response) =>{
    const fileP = path.join(process.cwd(),"index_ar.html")
    response.status(200).sendFile(fileP)
})

router.get('/forms', (request,response) =>{
    const fileP = path.join(process.cwd(),"forms.html")
    response.status(200).sendFile(fileP)
})
router.get('/formsar', (request,response) =>{
    const fileP = path.join(process.cwd(),"forms_ar.html")
    response.status(200).sendFile(fileP)
})

router.get('/contact', (request,response) =>{
    const fileP = path.join(process.cwd(),"contact.html")
    response.status(200).sendFile(fileP)
})
router.get('/contactar', (request,response) =>{
    const fileP = path.join(process.cwd(),"contact_ar.html")
    response.status(200).sendFile(fileP)
})

router.get('/xo', (request,response) =>{
    const fileP = path.join(process.cwd(),"ttt.html")
    response.status(200).sendFile(fileP)
})
router.get('/xoar', (request,response) =>{
    const fileP = path.join(process.cwd(),"ttt_ar.html")
    response.status(200).sendFile(fileP)
})




router.use(bodyParser.urlencoded({ extended: true }));


router.post('/submit-form', (req, res) => {
    // Access the form data from req.body
    console.log(req.body); // This will log the form data to the console

    // Send a response to the user confirming form submission
    res.send('Form submission processed');
});
//....

router.all('*', (request,response) =>{
    response.status(200).send("<h1>404 <br> <br>The page you are looking for does not exist!</h1>")
})


module.exports = router
