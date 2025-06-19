// const { createServer } = require('node:http');
// import http from 'http';

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
//  import { a, b, c, d, e } from './mymodule.js';
// console.log(a, b, c, d, e);

// import Aditya from "./mymodule.js"
// console.log(Aditya)

const a =import("./mymodule2.js")
console.log(a)
bn 