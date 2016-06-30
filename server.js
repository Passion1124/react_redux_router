var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');

var app = new (require('express'))();
var port = 3000;

const initialItemState = {
  items:[{
    type:"date",
    id:1
  },{
    type:"text",
    id:2
  },{
    type:"date",
    id:3
  }],
  deleteItems:[]
};

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath , historyApiFallback: true }))
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.get("/item",function (req,res) {
  res.send(initialItemState);
});

app.get("/submit",function (req,res) {
  console.log(req.query);
  var items = [];
  var item = req.query.state.items;
  var deleteItem = req.query.state.deleteItems;
  for (var i = 0; i < item.length; i++){
    if(!item[i]["id"]){
      item[i]["id"] = item[i]["key"];
      delete item[i]["key"];
    }
    items.push(item[i]);
  }
  console.log(items);
  initialItemState.items = items;
  initialItemState.deleteItems = deleteItem;
  res.send("提交成功");
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
