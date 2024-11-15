const express = require("express");
const app = express();

const checkToken = (req,res,next)=> {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    res.send("ACCESS DENIED!");
};

app.get("/api",checkToken,(req,res)=> {
    res.send("data");
});

// API token with query string
// app.use("/api",(req,res,next)=> {
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED!");
// });

// app.get("/api",(req,res)=> {
//     res.send("data");
// })

app.use("/random",(req,res,next)=> {
    console.log("I am only for random");
    next();
});

// app.use((req,res,next)=> {
//     console.log("Hi, I am first middleware");
//     return next();
// });

// app.use((req,res,next)=> {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname,req.path,req.time);
//     next();
// });


// app.use((req,res,next)=> {
//     console.log(req.method, req.hostname,req.path);
//     next();
// });

// app.use((req,res,next)=> {
//     console.log("Hi, I am second middleware");
//     next();
// });

// app.use((req,res)=> {
//     let {query} = req.query;
//     console.log(query);
//     console.log("Hi, I am a middleware");
//     res.send("middleware finifshed");
// });

app.get("/",(req,res)=> {
    res.send("Hi, I am root.");
});

app.get("/random",(req,res)=> {
    res.send("This is a random page");
});

app.use((req,res)=> {
    res.status(404).send("PAGE NOT FOUND!");
});

app.listen(8080,()=> {
    console.log("server listening to port 8080");
});