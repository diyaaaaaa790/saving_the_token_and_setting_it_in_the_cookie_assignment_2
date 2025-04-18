const jwt = require('jsonwebtoken');

// Step 1: Define secret key and payload
const secretKey = 'mySecretKey123'; // NEVER share this in public apps
const payload = {
    username: 'kalvian_user',
    role: 'student'
};

// Step 2: Generate JWT with expiry (e.g., 60 seconds)
const token = jwt.sign(payload, secretKey, { expiresIn: '60s' }); // 60 seconds

console.log("Generated JWT Token:", token);

// Step 3: Simulate token validation
setTimeout(() => {
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log("✅ Token is valid:", decoded);
    } catch (err) {
        console.log("❌ Token expired or invalid:", err.message);
    }
}, 70000); // wait for 70 seconds to let token expire
