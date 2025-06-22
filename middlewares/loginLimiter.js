const rateLimit = require("express-rate-limit");

// Limit: Max 5 login attempts per 10 minutes
const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many login attempts. Please try again after 10 minutes.",
  standardHeaders: true, // Return rate limit info in the headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

module.exports = loginLimiter;