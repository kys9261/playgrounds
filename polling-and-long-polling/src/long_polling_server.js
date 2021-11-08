const loremIpsum = require("lorem-ipsum").loremIpsum;

module.exports = function (app) {
  // page open
  app.get("/long_polling", function (req, res) {
    res.render("long_polling.html");
  });

  // long polling api
  app.get("/xhr_long_polling", function (req, res) {
    setTimeout(function () {
      var message = loremIpsum();
      res.json({ msg: message, status: 200 });
    }, 5000);
  });
};
