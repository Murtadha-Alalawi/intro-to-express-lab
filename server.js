const express = require("express")

const app = express()


app.get("/user/:name",(req,res)=>{

    res.send(`greeting ${req.params.name}`)

})

//--------------------------------------------------------------------------------------------------

app.get("/roll/:number",(req,res)=>{

    const number = req.params.number
    if(Number(number)){
        let randomroll = Math.floor(Math.random() * 14) +1;
        res.send(`You rolled ${randomroll}`)
    }
    else{
        res.send("You must specify a number")
    }
})
//-------------------------------------------------------------------------------------------------

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get("/collectibles/:id", (req,res)=>{
let object = ""

    collectibles.forEach((item,index) =>{
        if (index == req.params.id){
            object = `Name: ${item.name}, 
            Price: ${item.price}`
        }
    })
   
    res.send(object)
    
})

//--------------------------------------------------------------------------------------


const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];



app.get ("/shoes", (req,res)=>{

 
   let shoe = shoes.filter((tag)=>{

        
        
        if(req.query.minprice <= tag.price){
            return tag.price
        }
        if(req.query.maxprice >= tag.price){
            return tag.price
        }
        if(req.query.type == tag.type){
            return tag.type
        }
        
        
    })

    

    res.send(shoe)
    
})



app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
