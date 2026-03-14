const express = require('express');
const http = require('http');
const path = require('path');
const { uvPath } = require('@titaniumnetwork-dev/ultraviolet');

const app = express();
const server = http.createServer(app);

// Serve Ultraviolet core files
app.use('/uv/', express.static(uvPath));

// Serve your website files (HTML, CSS, Logo)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Freedom Networks is live on port ${port}`);
});
