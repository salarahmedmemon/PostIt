const { body } = require("express-validator");

const userValidationRules = [
  body("name")
    .notEmpty().withMessage("Name is required.")
    .isLength({ min: 3 }).withMessage("Name must be at least 3 characters long."),

  body("username")
    .notEmpty().withMessage("Username is required.")
    .isAlphanumeric().withMessage("Username must be alphanumeric.")
    .isLength({ min: 4, max: 20 }).withMessage("Username must be 4-20 characters long."),

  body("age")
    .notEmpty().withMessage("Age is required.")
    .isInt({ min: 1, max: 120 }).withMessage("Age must be a valid number between 1 and 120."),

  body("email")
    .notEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Must be a valid email."),

  body("password")
    .notEmpty().withMessage("Password is required.")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long.")
    .matches(/\d/).withMessage("Password must contain a number.")
];

module.exports = userValidationRules;