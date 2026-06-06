const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res)=> {
    res.json({
      status : "autonomous release platform"
  });
});

app.get("/health", (req, res) => {
    res.json({
        status: "super-healthy"
    });
});

app.listen(PORT,()=> {
    console.log(`Server running on port ${PORT}`);
});
