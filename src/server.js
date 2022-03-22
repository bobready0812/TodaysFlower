import express from "express";

const PORT = 3002;

const handleHome = (req,res) => {
    return res.send("haha");
}

const app = express();

app.get("/", handleHome);
const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening)

