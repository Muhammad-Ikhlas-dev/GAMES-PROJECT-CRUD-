const { z: zod } = require('zod');
function validateSchema(bodySchema, querySchema, paramsSchema) {
    return function (req, res, next) {
        try {
            if (bodySchema) {
               bodySchema.parse(req.body)
            }
            if (querySchema) {
                querySchema.parse(req.query)
            }
            if (paramsSchema) {
                paramsSchema.parse(req.params)
            }
            next();
        }
        catch (error) {
            console.log("schema validation error")
            return res.status(400).json({
                message:"some error in validation",
                success:false,
                issue:error.errors
            })
        }

    }
}
module.exports = { validateSchema }