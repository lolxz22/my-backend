const express = require('express');
const cors = require('cors');
const app = express();

// 1. Setup (The essentials)
app.use(express.json());
app.use(cors()); // Allows your website to call this API

// Use the port the host gives us, or 3000 if we are working locally
const PORT = process.env.PORT || 3000;

// 2. The "Is it working?" Route
app.get('/api/status', (req, res) => {
    res.json({ status: "online", message: "Backend is ready!" });
});

// 3. The "Calculator" Route (The one you tested)
app.get('/api/calculate', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Please use ?num1=10&num2=5" });
    }

    res.json({
        success: true,
        result: num1 + num2
    });
});

// 4. Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`Test it: http://localhost:${PORT}/api/calculate?num1=10&num2=5`);
});