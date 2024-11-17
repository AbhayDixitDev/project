const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res , next) => {
    const token = req.header('x-auth-token');
    if(!token) 
        return res.status(401).send({message: "Access Denied,no token provided"});
    jwt.verify(token, process.env.JWTPRIVATEKEY, (err, validToken) => {
        if(err) {
            return res.status(401).send({message: "Invalid Token"});
        }
        else {
            req.user = validToken;
            next();
        }
    })
}
