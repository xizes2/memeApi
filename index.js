const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("pokemon.json");
const port = process.env.PORT || 3001;

server.use(cors());
server.use(router);
server.listen(port);
