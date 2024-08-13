// const jwt=require("jsonwebtoken");

// function AuthenticationCheck(req, res, next) {
//     try {
//         if (!req?.headers?.token) {
//             return res.status(498).json({
//                 message: "Invalid Auth token",
//                 success: false
//             })
//         }
//         const token = req.headers.token.split(' ')[1]; //because a "bearer" word is attached automatically
//         //with the token when sent in header
//         jwt.verify(token, process.env.JWT_SECRET_KEY);//throws error if token is 
//         //expired or changed
//         next();
//     }
//     catch (error) {
//        console.log(error)
//        return res.status(498).json({
//         message: "Invalid Auth token",
//         success: false
//     })
//     }
// }
// module.exports={AuthenticationCheck}