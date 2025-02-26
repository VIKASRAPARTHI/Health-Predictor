const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const healthRoutes = require('./routes/healthRoutes');
const predictRoutes = require("./routes/predict")

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/health', healthRoutes);
app.use("/predict",predictRoutes)


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/healthDB").then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
