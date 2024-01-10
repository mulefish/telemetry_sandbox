import express from 'express';
const app = express();
const port = 3030;
app.use(express.static('public'));

app.listen(port, () => {
  const msg = `Server running at http://localhost:${port}`
  console.log(msg)
});
