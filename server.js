const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post('/', function(req, res){ 
    console.log(req.body); 
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let result = weight/(height * height);
    
    let lowBodyMass = 19;
    let standardBodyMass = 24.9;
    let overWeight = 29.9;
    let obeseWeight = 30;
    
    if (result < lowBodyMass) {
        res.send(`Your BMI is ${result.toFixed(2)}. You are underweight!`);
    } else if (result > lowBodyMass && result < standardBodyMass) {
        res.send(`Your BMI is ${result.toFixed(2)}. You are standard weight!`);
    } else if (result > standardBodyMass && result < obeseWeight){
        res.send(`Your BMI is ${result.toFixed(2)}. You are overweight!`);
    }
    else{
        res.send(`Your BMI is ${result.toFixed(2)}. You are OBESE!!`);
    }

});

app.listen(3000, function(){ 
    console.log("Server is running on port 3000.")
});