const express = require("express");
const app = express();

app.get("/", (res, req) => res.send("API RUNING"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
