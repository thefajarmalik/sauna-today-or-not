import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/sauna", (_req, res) => {
  const answer = Math.random() < 0.5 ? "Yes" : "No";
  res.json({ answer });
});

export const handler = serverless(app);
