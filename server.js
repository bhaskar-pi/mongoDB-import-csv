const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');
const Profile = require('./schema')
const dotenv = require('dotenv')

const app = express();
dotenv.config()

const uri = process.env.URI

const connectDb = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB error', error);
    }
};

app.use(express.json());

app.post('/import-csv', async (req, res) => {
    try {
        const filePath = req.body.filePath; 
        const results = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async () => {
                for (const result of results) {
                    console.log(result)
                    await Profile.create(result);
                }
                console.log('CSV data imported successfully');
                res.status(200).json({ message: 'CSV data imported successfully' });
            });
    } catch (error) {
        console.error('Error importing CSV data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

Promise.resolve(connectDb());

app.listen(4001, () => {
    console.log('Server is running at port 4001');
});
