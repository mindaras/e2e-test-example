const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const invoices = [
  { id: 1, name: "Invoice 1" },
  { id: 2, name: "Invoice 2" },
  { id: 3, name: "Invoice 3" },
  { id: 4, name: "Invoice 4" },
];

app.get("/invoices", (_, res) => {
  res.json({ data: invoices });
});

app.get("/invoices/:id", (req, res) => {
  const { id } = req.params;
  res.json({ data: invoices.find((invoice) => invoice.id === parseInt(id)) });
});

app.post("/invoices/:id/payment", (_, res) => {
  res.send();
});

app.listen(4000, () => console.log(`Listening on port: 4000`));
