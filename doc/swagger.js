const swaggerAutogen = require("swagger-autogen");
const outputFile = "./swagger.json";

const endpointsFiles = ["../router/router.js"];

const doc = {
  info: {
    title: "Documentation Trackip API",
    description: "Trackip merupakan alat pelacak berbasis ip address",
  },
};
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("../main.js"); // Your project's root file
});
