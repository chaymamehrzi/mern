const itemSchema = require("../Validator/itemvalidator");

const itemmiddleware = async (req, res, next) => {
    try {
      await itemSchema.validate(req.body);
      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      res.status(400).json({ item: error.message }); // Return validation error to the client
    }
  };

  module.exports = itemmiddleware;