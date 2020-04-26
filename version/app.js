const express = require('express');
app = express();

var response;
var response2;
app.get('/', function (req, res) {

    response = 'This is version 3 of the app.' + '\n';
    response2="V3\nRelase: Ape 26";


    //send the response to the client
    res.send(response);
    res.send(response2);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
