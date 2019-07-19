var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('hi');
});

app.listen(PORT, function() {
   console.log('App listening on http://localhost:' + PORT);
});