const server = require('./api/server');

const PORT = 7000;
server.listen(PORT, () => {
    console.log(`\n Listeneing on port ${PORT} \n`)
})