
var config = require("./webpack.config.docs.js");
var path = require("path");

config.devtool = "cheap-module-eval-source-map";
// eval
// cheap-module-eval-source-map
// cheap-eval-source-map

config.devServer = {
	contentBase: path.join(__dirname, "docs"),
	host: "10.0.0.106", // "10.0.0.106", "localhost",
	port: 8090,
};

config.output.publicPath = `http://${config.devServer.host}:${config.devServer.port}/${config.output.publicPath}`;

/*
config.externals = {
	"d3": "d3",
} // removing React & ReactDOM, for testing
*/

module.exports = config;
