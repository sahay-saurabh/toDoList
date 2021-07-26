const express=require("express");
const app=express();
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));

var listItems=['Buy food','Cook Food','Eat Food'];

app.get("/",function(req,res){
    var today=new Date();
    var options={
        weekday:'long',
        day:'numeric',
        month:'long',
    };

    var day=today.toLocaleDateString('en-US',options);

    res.render('list',{weekDay:day,listItems:listItems});
});

app.post('/',function(req,res){
    var item=req.body.Text;
    listItems.push(item);
    res.redirect('/');

});

app.listen(3000,function(){
    console.log("server started on port 3000");
});


// we can render only once
