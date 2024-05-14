const express = require("express");

const port = 5001;
const app = express();
app.use(express.json());
let data = [
  {
    id: 2,
    description: "Sweet and savory sauces relishes spreads and seasonings",
    name: "Condiments",
  },
  {
    id: 1,
    description: "Soft drinks coffees teas beers and ales",
    name: "Beverages",
  },
  {
    id: 3,
    description: "Desserts candies and sweet breads",
    name: "Confections",
  },
  {
    id: 4,
    description: "Cheeses",
    name: "Dairy Products",
  },
  {
    id: 5,
    description: "Breads crackers pasta and cereal",
    name: "Grains/Cereals",
  },
  {
    id: 6,
    description: "Prepared meats",
    name: "Meat/Poultry",
  },
  {
    id: 7,
    description: "Dried fruit and bean curd",
    name: "Produce",
  },
  {
    id: 8,
    description: "Seaweed and fish",
    name: "Seafood",
  },
];
let counter = 1000;

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = data.find((x) => x.id == +id);
  res.send(result);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const{name,description}=req.body;
  counter++;
  const index= data.findIndex(x=>x.id ===+id);
  data[index]={id:+id,name,description}
  // const result = data.push({name,description,id:counter});
  
  res.send("Got a PUT request at /user");
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  data = data.filter((x) => x.id !== +id);
  res.send("Ugurla silindi");
});

app.post("/", (req, res) => {
  const { name, description } = req.body;
  const result = data.push({ name, description, id: counter });
  counter++;
  console.log(result);
  res.send("success");
});

app.listen(port, () => {
  console.log(`This app running this port ${port}`);
});
