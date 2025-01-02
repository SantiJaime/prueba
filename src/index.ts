import express from "express";
import type { Request, Response } from "express";

const app = express();

app.use("/", (_req: Request, res: Response) => {
  res.status(200).json("Hello World");
});

app.listen(3000, () => {
  console.log("Server started");
});
