import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi.string().max(15).min(3)
        .required()
        .messages({
            "string.min": "Title must be at least 3 characters",
            "string.max": "Title must be 15 characters maximum",
            "string.empty": "Title is required",
        }),
    body: Joi.string().min(3).max(60).required().messages({
        "string.min": "message must be at least 3 characters",
        "string.max": "message must be no longer 6o characters",
        "string.empty": "Massage is required"
    }),
    userId: Joi.number().min(1).max(10).required().messages({
        "number.min": "ID must be at least 1",
        "number.max": "ID must be not larger  10",
        "number.empty": "ID is required"

    }),
});