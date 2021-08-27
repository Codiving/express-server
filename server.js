import express from "express";

const PORT = 3000; // 서버에 사용할 포트 번호
const app = express();

app.get("/", (req, res) => {
  console.log("req.query", req.query);
  res.send(`<h1>HTML H1</h1>`);
});

app.listen(PORT, () =>
  console.log(`Express server : http://localhost:${PORT}`)
);
