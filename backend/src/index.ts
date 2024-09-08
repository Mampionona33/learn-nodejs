import express, { Request, Response } from "express";
const app = express();
app.use(express.json());
const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/product", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
