const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
 
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
 
 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
 
app.listen(3000, '0.0.0.0', () => {
  console.log("Server running at http://0.0.0.0:3000");
});


 
