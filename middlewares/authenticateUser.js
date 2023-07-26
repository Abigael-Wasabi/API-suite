const jwt = require('jsonwebtoken');
const secretKey = 'emergency-secret-kit'; // Same as used in userController
 
const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');
 
  if (!token) {
    return res.status(401).json({ error: 'Authorization token not provided' });
  }
 
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
 
module.exports = authenticateUser;
