import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import Reach from 'react';
import Router from 'react-router';
import proxy from 'express-http-proxy';
import express from 'express';

module.exports = function(app) {
	
	var config = require('../config/config');
	var router = express.Router();

	//React Templateing 
	let leader = process.env.MESOS_ENDPOINT;
	setRoutes(app, leader);

	function setRoutes(app, leader){
		const templateFile = path.join(__dirname, 'master/static/index.html');
		const template = _.template(fs.readFileSync(templateFile, 'utf8'));

	var config = require('../config/config');


	app.get(config.proxyPath + '/*', proxy(leader, {
		forwardPath: function(req,res){
		//Obtain the ending
		let path = require('url').parse(req.url).path;
		//here it is
		return path.slice (config.mesosEndpoint.length)};


}));


	app.get('*', function(req, res, next) {

	try{

	let data = { title: '', description: '', css:'', body:''};
	let css = [];
	Router.run(routes, req.url, function(Handler) {
	
	let application = (<Handler
	context={{
		onInsertCss: value => css.push(value), 
		onSetTitle: value => data.title = value,
		onSetMeta: (key, value) => data[key] = value
	}} />
	);
	data.body = React.renderToString(application);
	data.css = css.join('');
	let html = template(data);
	res.send(html);
	});
    }

});
} catch(err) {
next(err);}
});
}
};
