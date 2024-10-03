
const validate = async (validationSchema, request) => {
    const result = validationSchema.validate(request, {
        abortEarly: false,
        allUnknown: false
    })
    if (result.error) {
        throw new ResponseError(400, result.error.message)
    }
    else {
        return result.value
    }
}

export {
    validate
}