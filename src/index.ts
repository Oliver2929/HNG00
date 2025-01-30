import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // CORS Handling

app.get("/", (req, res) => {
  const response = {
    email: "fowosereademola@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Oliver2929/HNG00",
  };

  res.status(200).json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
