const fs = require('fs');
var express = require('express');
var router = express.Router();
const readline = require('readline')
var alert = require('alert-node');



router.get('/',(req,res) => {
    res.render('index');
})

router.post('/keys/find',(req,res) => {
 const {keys} = req.body;
 console.log("value"+keys);

 var rd = readline.createInterface({
    input: fs.createReadStream('.env'),
    
});
var value;var count=0;
rd.on('line', function(line) {
   var arr = line.split(" ");
    console.log(arr);
    if(keys.toUpperCase() == arr[0])
    {
        value = arr[2];count++;
        console.log("val "+value);
        alert(`${keys}\n`+value);   

    }
  
});
res.redirect('/');
if(count==0)
{
    alert("no value found")
}
})


router.post('/keys/add',(req,res) => {
    const {keys,value} = req.body;

    fs.appendFile('.env',`\n${keys.toUpperCase()} = ${value.toUpperCase()}`,(err,data)=>{
        if(err)
          throw err;
  })

  res.redirect('/');
  alert("value added successfully");  

})


module.exports = router;