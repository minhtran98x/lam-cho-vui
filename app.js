// const http = require('http');
// const fs = require('fs');

// /**
//  * Creates an HTTP server that handles incoming requests and responses.
//  *
//  * Routes:
//  * - `GET /`: Serves an HTML page with a form to submit a message.
//  * - `POST /message`: Handles form submission, writes a dummy message to a file,
//  *   and redirects back to the root route.
//  * - Any other route: Serves a default HTML page with a greeting message.
//  *
//  * Behavior:
//  * - For the root route (`/`), it serves an HTML form where users can input a message.
//  * - For the `/message` route with a POST method, it writes a dummy message
//  *   (`'DUMMY'`) to a file named `message.txt`, sets the response status to 302
//  *   (redirect), and redirects the user back to the root route.
//  * - For all other routes, it serves a simple HTML page with a greeting message.
//  *
//  * Dependencies:
//  * - `http`: Used to create the HTTP server.
//  * - `fs`: Used to write to a file (`message.txt`).
//  *
//  * Note:
//  * - The `fs.writeFileSync` method is used for writing to the file, which is
//  *   synchronous and may block the event loop. Consider using an asynchronous
//  *   alternative for better performance.
//  */
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === '/') {
//     res.write('<html>');
//     res.write('<head><title>Enter Message</title><head>');
//     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     return res.end();
//   }
//   if (url === '/message' && method === 'POST') {
//     fs.writeFileSync('message.txt', 'DUMMY');
//     res.statusCode = 302;
//     res.setHeader('Location', '/');
//     return res.end();
//   }
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>');
//   res.write('<head><title>My First Page</title><head>');
//   res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//   res.write('</html>');
//   res.end();
// });

// server.listen(3000);

const http = require("http");
const bodyParser = require("body-parser"); // Import the body-parser middleware

const express = require("express");

const app = express(); // Create an Express application

const adminRoutes = require("./routes/admin"); // Import the admin routes
const shopRoutes = require("./routes/shop"); // Import the shop routes

app.use(bodyParser.urlencoded({ extended: false })); // Use body-parser middleware to parse URL-encoded data
app.use(express.json());

app.use("/admin", adminRoutes); // Use the admin routes for any requests starting with "/admin"
app.use(shopRoutes); // Use the shop routes for any requests starting with "/shop"

// ✅ Middleware 404 - đặt CUỐI CÙNG, sau tất cả route khác
app.use((req, res, next) => {
  res.status(404).send(`
    <h1 style="font-family:sans-serif; color:crimson;">404 - Page Not Found</h1>
    <p>The page <strong>${req.originalUrl}</strong> does not exist.</p>
    <a href="/admin/add-product">← Back to Add Product</a>
  `);
});

const server = http.createServer(app); // Create an HTTP server using the Express application

server.listen(3000);
