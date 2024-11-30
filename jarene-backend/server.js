const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jarene', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/forum', require('./routes/forum'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/farmers', require('./routes/farmers'));
app.use('/api/consumers', require('./routes/consumers'));

// Serve frontend build files
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'jarene-frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'jarene-frontend', 'build', 'index.html'));
    });
}cd

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Access the server variable to confirm it's defined
//open jarene-agriculture
console.log(server);
// Trigger new build
// Minor change to trigger new build
