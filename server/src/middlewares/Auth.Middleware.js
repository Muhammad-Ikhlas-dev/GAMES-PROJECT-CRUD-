const jwt=require("jsonwebtoken");
// const { promisify } = require("util");

// const verifyToken=promisify(jwt.verify)

function AuthenticationCheck(req, res, next) {
    try {
        console.log(req)
        if (!req?.headers?.token) {
            console.log("hai hi nai header main")
            return res.status(498).json({
                message: "Invalid Auth token",
                success: false
            })
        }
        const token = req.headers.token; //because a "bearer" word is attached automatically
        //with the token when sent in header
        console.log(token)
        console.log(process.env.JWT_SECRET_KEY)

        jwt.verify(token, process.env.JWT_SECRET_KEY)
        next()
    }
    catch (error) {
       console.log(error)
       return res.status(498).json({
        message: "Invalid Auth token",
        success: false
    })
    }
}
module.exports={AuthenticationCheck}

// function AuthenticationCheck(req, res, next) {
//     const token = req.headers.authorization?.split(' ')[1]; // Extract the token from "Bearer <token>"

//     if (!token) {
//         console.log("Authorization header is missing or token is absent");
//         return res.status(498).json({
//             message: "Invalid Auth token",
//             success: false
//         });
//     }

//     jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
//         if (err) {
//             console.error("Token verification error:", err);
//             return res.status(498).json({
//                 message: "Invalid Auth token",
//                 success: false
//             });
//         }
        
//         req.user = decoded; // Attach decoded user data to the request object if needed
//         next(); // Proceed to the next middleware or route handler only after verification
//     });
// }

module.exports = { AuthenticationCheck };
