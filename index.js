import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

app.post('/ia', async (req, res) => {
    const { text } = req.body;

    const response = await axios.post('http://localhost:11434/api/generate', 
        {
            "model": "ollama3", // Alterado para usar o modelo correto
            "prompt": text,
            "stream": false,
        });

    res.send(response.data.response.toString());
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});