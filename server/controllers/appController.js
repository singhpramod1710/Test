module.exports = {
  index: function(req, res){
    res.sendfile('index.html', {root: __dirname + '/../../www/'});
  },
  signin: function(req, res){
    console.log('Inside signIN');
    //console.log('Pamod input : ' + req.user.name);
    res.send('Hello from signin');
  },
};
