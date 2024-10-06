const info = require("geoip-lite");

exports.tracking = (req, res) => {
  function tracking(ip) {
    const hasil = info.lookup(ip);
    return hasil;
  }

  const ip = req.query.ip;
  const geoip = tracking(ip);
  if (!ip) {
    return res.status(400).json({
      message: "parameter belum diisi",
      status: false,
    });
  }
  res.json({
    message: `${ip}`,
    data: geoip,
    status: true,
  });
};

/* #swagger.tags = ['User']
#swagger.description = 'Endpoint to createUser' */
/* #swagger.parameters['body'] = {
name: 'user',
in: 'body',
description: 'User information.',
required: true,
schema: { $ref: '#/definitions/UserRequestFormat' }
} */
/* #swagger.security = [{
"apiKeyAuth": []
}] */
