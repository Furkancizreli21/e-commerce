const express = reuqire("express");
const router = express.Router();

const products =[
    {id:1,
    name:"Rebel Sweater – Classic Comfort Fit",
    price:399
    },{id:2,
    name:"Northern Ridge Chinos – Slim Fit",
    price:279
    },
    {id:3,
    name:"Brown Leather Jacket – Timeless Fit",
    price:399
    },
    {id:4,
    name:"Rebel Sweater – Classic Comfort Fit",
    price:399
    },
    {id:5,
    name:"Rebel Sweater – Classic Comfort Fit",
    price:399
    },
]

router.get("/products", (req, res) => {
  res.send("products");
});
