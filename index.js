import express from 'express'

//creating an instance of an express application
const app = express();


//define the oort we want to listen
const port = process.env.PORT || 3001

const fruits = {
    banana: {
        color: "yellow"
    }, 
    orange: {
        color: "orange"
    }, 
    apple: {
        color: "green"
    }, 
    pear: {
        color: "green"
    }
}

//setting up a response for the root path of our application 
// app.get('/',(req,res) => {
// res.send("hello!")

// //printing the request
// console.log(req.query)
// //send request back to client
// res.send(`Your value was${req.query.color}`)

// //get color for query
// const requestedColor = req.query.color;

// //set up the array
// const matchingFruits = [];

// for (const fruit in fruits){
//     if(fruits[fruit].color == requestedColor){
//         matchingFruits.push(fruit)
//     }
// }

// console.log(matchingFruits)
// //send request back to the client
// res.send(matchingFruits)
// })

//})

app.get('/fruit/:fruit',(req,res) => {
    console.log(req.params)
    console.log('test')
    res.send("hi jessica ")

    for (const fruit in fruits){
        if(fruit == req.params.fruit){
            console.log(`The color if this fruit is ${fruits[fruit].color}`)
        }
    }

})





//setting up our application to listen to the port we defined above
app.listen(port, () => {
    console.log(`hello ${port}`)
})