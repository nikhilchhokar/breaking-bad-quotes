import express from "express";
import axios from "axios";
import fetch from "node-fetch";

const app = express();
const port = 3000;




app.use(express.static("public"));


app.get('/', async (req, res) => {
  try {
    const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await response.json();
    const quote = data[0].quote;
    const author = data[0].author;

    res.render("index.ejs", {
        secret:quote,
        user: author,
    })
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () =>{
    console.log(`your server is running on ${port}`);
})
