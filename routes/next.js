const express = require("express");
const router = express.Router();

nextData = [
  {
    _id: 1020154545,
    title: "Long sleeve Jacket",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    oldPrice: 200,
    price: 150,
    brand: "next",
    image:
      "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: true,
    category: "Fashion",
  },
  {
    _id: 2025454,
    title: "Jacket with wollen hat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    oldPrice: 120,
    price: 105,
    brand: "Zara",
    image:
      "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: true,
    category: "Fashion",
  },
  {
    _id: 305455,
    title: "Skirts with full setup",
    isNew: true,
    oldPrice: 800,
    price: 695,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "Fashion",
    image:
      "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600",
    brand: "Zara",
  },
  {
    _id: 408784,
    title: "Yellow Hoody",
    isNew: false,
    oldPrice: 200,
    price: 180,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "Fashion",
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
    brand: "Hodders",
  },
  {
    _id: 507478,
    title: "Black t-shirt for women",
    isNew: false,
    oldPrice: 60,
    price: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "Fashion",
    image:
      "https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg?auto=compress&cs=tinysrgb&w=600",
    brand: "Ladyland",
  },
  {
    _id: 6043434,
    title: "Gouwn with Red velvet",
    isNew: false,
    oldPrice: 500,
    price: 350,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "Fashion",
    image:
      "https://images.pexels.com/photos/2233703/pexels-photo-2233703.jpeg?auto=compress&cs=tinysrgb&w=600",
    brand: "next",
  },
  {
    _id: 7099843,
    title: "Pink beauty",
    isNew: true,
    oldPrice: 150,
    price: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "Fashion",
    image:
      "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600",
    brand: "Hoichoi",
  },
  {
    _id: 8087873,
    title: "Jean's stylish Jacket",
    isNew: false,
    oldPrice: 250,
    price: 245,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "Fashion",
    image:
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
    brand: "Local bro",
  },
  {
    _id: 908778,
    title: "Canon EOS Rebel T100",
    description:
      "Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live View Shooting",
    oldPrice: 700.0,
    price: 559.99,
    brand: "Canon",
    image: "https://i.ibb.co/1r28gMk/1.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 10025454,
    title: "DJI Air",
    description:
      "DJI Mini 2 Fly More Combo - Ultralight Foldable Drone, 3-Axis Gimbal with 4K Camera, 12MP Photos, 31 Min Flight Time",
    oldPrice: 1050.0,
    price: 999.0,
    brand: "DJI",
    image: "https://i.ibb.co/qdfB3s6/2.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 11034545,
    title: "Apple 10.2-inch iPad",
    description:
      "2021 Apple 10.2-inch iPad Wi-Fi 64GB - Space Gray (9th Generation)",
    oldPrice: 329.0,
    price: 269.0,
    brand: "Apple",
    image: "https://i.ibb.co/VL1Dnv1/4.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 12045454,
    title: "iPhone 14",
    description: "AT&T iPhone 14 128GB Midnight",
    oldPrice: 1745.99,
    price: 1200.0,
    brand: "Apple",
    image: "https://i.ibb.co/5F3nWv6/7.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 1305354,
    title: "Apple Watch SE",
    description:
      "Apple Watch SE (2nd Gen) GPS 40mm Midnight Aluminum Case with Midnight Sport Band - S/M",
    price: 249.0,
    oldPrice: 260.4,
    brand: "Apple",
    image: "https://i.ibb.co/xgZWmdq/8.jpg",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 1406543554,
    title: "Beats Solo3",
    description:
      "Beats Solo3 Wireless On-Ear Headphones with Apple W1 Headphone Chip, Black, MX432LL/A",
    oldPrice: 120.99,
    price: 130.09,
    brand: "Beats by Dr. Dre",
    image: "https://i.ibb.co/rQKjVC2/5.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 16084554,
    title: "T-Shirt Men",
    description:
      "St Patricks Day T-Shirt Men -Image by Shutterstock, Male XX-Large",
    oldPrice: 15.0,
    price: 18.99,
    brand: "Smartprints",
    image: "https://i.ibb.co/BLCDw7v/3.webp",
    isNew: true,
    category: "Fashion",
  },
  {
    _id: 17089899,
    title: "Picnic Table Bench Set",
    description:
      "Costway Picnic Table Bench Set Outdoor Backyard Patio Garden Party Dining All Weather Black",
    oldPrice: 169.99,
    price: 298.0,
    brand: "Costway",
    image: "https://i.ibb.co/qCXcPhq/8.webp",
    isNew: true,
    category: "Home Decoration",
  },
  {
    _id: 180104545,
    title: "Grill Heavy Duty",
    description: "Expert Grill Heavy Duty 24-Inch Charcoal Grill, Black",
    price: 107.0,
    oldPrice: 120.0,
    brand: "Expert Grill",
    image: "https://i.ibb.co/TTS9wY4/9.webp",
    isNew: false,
    category: "Equipments",
  },
  {
    _id: 190115454,
    title: "Girls Cropped",
    description:
      "Free Assembly Girls Cropped Mixed Cable Knit Fair Isle Sweater, Sizes 4-18",
    oldPrice: 20.0,
    price: 15.31,
    brand: "Free Assembly",
    image: "https://i.ibb.co/BVzsqvz/10.webp",
    isNew: false,
    category: "Fashion",
  },
  {
    _id: 20012545,
    title: "Night of Olay Firming Night Cream Face Moisturizer, 1.9 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    price: 7.98,
    oldPrice: 12.0,
    brand: "Olay",
    image: "https://i.ibb.co/zPDcCQY/top4.webp",
    isNew: false,
    category: "Beauty Product",
  },
  {
    _id: 201434,
    title: "Blue jins",
    isNew: false,
    oldPrice: 710,
    price: 630,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "Fashion",
    image:
      "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=600",
    brand: "next",
  },
];

router.get("/next", (req, res) => {
  res.send(nextData);
});

module.exports = router;
