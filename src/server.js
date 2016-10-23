import 'babel/polyfill';
import path from 'path';
import express from 'express';

let config = require('./config/config');
let app = express();

//Serve static files from main folder.
app.set('port', config.port);
app.use(express.static(path.join(__dirname)));
app.listen(app.get('port'), ()=> {
if(process.send){
process.send('online');
} else {
console.log('The server is running smoothly at http://localhost:' + app.get('port'));
}
});

//Launch the server
//-----------------------------------------------------------
// default routes

if(process.env.ZOOKEEPER_ADDRESS) {
require('./routes/zookeeper')(app);
} else if(process.env.MESOS_ENDPOINT){
	require('./routes/dev')(app);
}

//If we're in development mode spin up a mock server as we may not have a 
// running Mesos cluster, so lets just use the stub API in ./stub.json
if(process.env.NODE_ENV=='development') {
	
	//launch express server
	let jsonServer = require('json-server');

	//Set default middlewares(logger, static, cors, and no-cache)
	server.use(jsonServer.defaults());

	const stubFile = './src/stub.json';
	server.use(router);

	server.listen(8000);
}
