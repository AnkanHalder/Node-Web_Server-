const express=require('express');
const hbs =require('hbs');

var app=express();


app.set('view engine','hbs');

app.use(express.static(__dirname+'/Public'));

app.get('/',(req,res)=>{
  //res.send('<h1>Hello Express!!</h1>');
  // res.send({
  //   name:'Sam_Scots',
  //   type:'shit',
  //   likes:['bla','bla','bla','bla','bla']
  // });
  res.render('home.hbs',{
    pageTitle: 'Home',
    welcome:'Welcome',
    currentYear:new Date().getFullYear()
  });
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Page',
    currentYear:new Date().getFullYear()
  });
});

app.get('/bad',(req,res)=>{
  res.send({
    type:'UNABLE_TO_SOLVE',
    status:'ERROR'
  });
});

app.listen(3000);
