const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req,res) => {
    res.send("Backend is running!");
});

app.listen(3000, ()=>{
    console.log("Server running on http://localhost:3000");
});

