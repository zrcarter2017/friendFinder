app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {
	var newfriend = req.body;
	console.log(newfriend);
	friends.push(newfriend);
});