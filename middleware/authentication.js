require("dotenv").config();

exports.authenticateToken = (req, res, next) => {
  const apiKey = req.query.api_key;
  const key = process.env.API_KEY;

  if (!apiKey) {
    return res.status(401).json({
      message: "API Key kosong",
      status: false,
    });
  }
  if (key !== apiKey)
    return res.status(403).json({
      message: "API KEY tidak valid",
      status: false,
    });

  next();
};
