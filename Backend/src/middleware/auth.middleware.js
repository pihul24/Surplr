const jwt = require('jsonwebtoken')

async function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization

        console.log("HEADER:", authHeader)

        if (!authHeader) {
            return res.status(401).json({ message: "Token not found" })
        }

        const token = authHeader.split(" ")[1]

        console.log("TOKEN:", token)

        const decoded = jwt.verify(token, process.env.JWT_SECRET) 

        req.user = decoded

        next()
    } catch (error) {
        console.log("ERROR:", error.message)
        return res.status(401).json({ message: "Invalid token" })
    }
}

module.exports = authMiddleware