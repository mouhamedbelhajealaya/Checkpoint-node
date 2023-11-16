var fs = require("fs")

fs.readFile('welcome.txt','Hello Node',(req,res) => {
  if (err) {
    console.error('Error reading welcome.txt:', err);
  } else{
    console.log('welcome.text');
  }

  fs.readFile('welcome.txt',function(err,data){
    if(err){
      return console.error(err);
    }
    console.log('reading welcome.txt : '+data.toString())
  })
});