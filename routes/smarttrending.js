const express = require("express");
const router = express.Router();

const trendingProducts = [
  {
    _id: 1,
    title: "Long sleeve Jacket",
    isNew: true,
    oldPrice: "200",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.1.453157835.1694346094&semt=sph",
    rating: 4,
    quantity: 1,
  },
  {
    _id: 2,
    title: "Jacket with wollen hat",
    isNew: true,
    oldPrice: "70",
    price: 65,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg?size=626&ext=jpg&ga=GA1.2.453157835.1694346094&semt=sph",
    rating: 3,
    quantity: 1,
  },
  {
    _id: 3,
    title: "Compact fashion t-shirt",
    isNew: true,
    oldPrice: "70",
    price: 55.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://img.freepik.com/free-photo/young-woman-fluffy-jacket-red-sunglasses-looking-into-camera_197531-15044.jpg?size=626&ext=jpg&ga=GA1.2.453157835.1694346094&semt=sph",
    rating: 3,
    quantity: 1,
  },
  {
    _id: 4,
    title: "Blue jins",
    isNew: true,
    oldPrice: "70",
    price: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://img.freepik.com/free-photo/fashionable-woman-pink-coat-black-hat-posing_273443-2429.jpg?size=626&ext=jpg&ga=GA1.1.453157835.1694346094&semt=sph",
    rating: 3,
    quantity: 1,
  },
];

router.get("/smarttrending", (req, res) => {
  res.send(trendingProducts);
});

module.exports = router;
