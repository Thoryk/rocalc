const express = require('express');
const path = require('path');

const app = express();
const publicDirPath = path.join(__dirname, './public');

app.use(express.static(publicDirPath, {extensions: ['html']}));

app.listen(8080, () => {
	console.log('Server is up and running on Port 8080: http://localhost:8080');
});
