var path = require("path");

module.exports = function(app) {

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../app/survey.html"));
});

app.get("/", function(req, res) {
	console.log("hello");
  res.sendFile(path.join(__dirname, "../app/home.html"));
});

};