global.lift = function (app) {
  var server = app.listen(app.get('port'), function () {
    var url = 'http://127.0.0.1:' + server.address().port;
    console.log('Express server listening  on ' + url);
  });
};