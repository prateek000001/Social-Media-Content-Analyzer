const express = require('express');
const cors = require('cors');
const extractRoutes = require('./routes/extractRoutes');
const dotenv =require('dotenv');
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/extract', extractRoutes);

app.get('/ping', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
