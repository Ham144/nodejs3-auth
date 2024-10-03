import { ResponseError } from "../error/response-error.js"

const errorMiddleware = (err, req, res, next) => {
    if (!err) {
        return next()
    }

    if (err instanceof ResponseError) {
        return res.status(err.status).json({
            errors: err.message
        }).end()
    }
    else {
        res.status(500).json({
            errors: err.err.message
        }).end()
    }
}

export default errorMiddleware 