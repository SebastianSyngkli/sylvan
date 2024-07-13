const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token) 
        return res.status(401).send("Access denied. No authentication token provided.");

    try {
        const secretKey = 'YourSecretKey'; // Corrected variable name
        const user = jwt.verify(token, secretKey);

        req.user = user;

        next();
    } catch (err) {
        res.status(400).send("Access denied. Invalid authentication token.");
    }
};

const isUser = (req,res,next) => {
    auth (req,res, () => {
        if(req.user._id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(404).send("Access denied.Not authorized")
        }
    })
}

const isAdmin = (req, res, next) => {
    auth(req, res, () => {
        if (req.user && req.user.isAdmin) {
            next();
        } else {
            res.status(403).send("Access denied. Not authorized.");
        }
    });
};

module.exports = { auth, isAdmin,isUser};