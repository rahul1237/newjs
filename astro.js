const express = require('express')
const bodyparser= require('body-parser')

const app = express()
app.use(bodyparser.urlencoded({extended: true}))

app.get('/',function (req,res) {

        res.sendFile(__dirname+'/index.html')
})

// app.post('/',function(req,res){
//     nam=req.body.Name
//     w=parseFloat(req.body.Weight)
//     h=parseFloat(req.body.Height)
//     bmi=(w/(h*h))
    
//     // res.send()

//     if(19<=bmi<25){
//         res.send('hey '+nam+'! your BMI(Body Mass Index) is: '+bmi+'<center><h1>You are Normal Weight!</h1>')
//     }else if(25<=bmi<30){
//         res.send('hey '+nam+'! your BMI(Body Mass Index) is: '+bmi+'<center><h1>You are Over Weight!</h1>')
//     }else if(30<=bmi<40){
//         res.send('hey '+nam+'! your BMI(Body Mass Index) is: '+bmi+'<center><h1>You are Obese!</h1>')
//     }
// })

app.post('/',function(req,res){
    res.send('<style> .css-input{margin-top: 2%;font-size:16px; border-color:#cccccc; border-style:solid; border-width:0px; border-radius:50px; text-align:center; padding:7px; box-shadow: 0px 0px 13px 0px rgba(125,51,125,.76); text-shadow:0px 0px 5px rgba(42,42,42,.0); font-weight:bold; font-style:none; font-family:sans-serif;}.css-input:focus{outline:none;}  </style><br><br><form><label for="nam">Name:</label><br><input class="css-input" type="text" placeholder="Name" name="nam" id=""><br><br><label for="DOB">Date Of Birth:</label><br><input class="css-input" type="date" placeholder="Date Of Birth" name="DOB" id=""><br><br><label for="TOB">Time Of Birth:</label><br><input class="css-input" type="time" placeholder="Time Of Birth" name="TOB" id=""><br><br><label for="POB">Place Of Birth:</label><br><input class="css-input" type="text" placeholder="Place Of Birth" name="POB" id=""><br><br><label for="Lat">Latitude:</label><br><input class="css-input" type="text" placeholder="Latitude" name="Lat" id=""><br><br><label for="Lon">Longitude:</label><br><input class="css-input" type="text" placeholder="Longitude" name="Lon" id="">')
})
app.listen(5555,function () {
    console.log('port number 5555');
})




