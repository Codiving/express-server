import express from "express";

const PORT = 3000; // 서버에 사용할 포트 번호
const app = express();

app.listen(PORT, () =>
  console.log(`Express server : http://localhost:${PORT}`)
);
