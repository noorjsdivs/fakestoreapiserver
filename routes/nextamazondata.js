const express = require("express");
const router = express.Router();

const nextamazonproducts = [
  {
    id: 9001,
    title: "Acer Nitro 5 AN515-57-79TD Gaming Laptop",
    price: 739.99,
    oldPrice: 1000.99,
    description:
      "Acer Nitro 5 AN515-57-79TD Gaming Laptop | Intel Core i7-11800H | NVIDIA GeForce RTX 3050 Ti Laptop GPU | 15.6 FHD 144Hz IPS Display | 8GB DDR4 | 512GB NVMe SSD | Killer Wi-Fi 6 | Backlit Keyboard",
    category: "Electronics",
    image: "https://i.ibb.co/jTMbP5r/nextamazon1.jpg",
    isNew: true,
    brand: "Acer",
  },
  {
    id: 9002,
    title: "Acer Aspire 5 A515-45-R74Z Slim Laptop",
    price: 399.99,
    oldPrice: 599.45,
    description:
      "Acer Aspire 5 A515-45-R74Z Slim Laptop | 15.6 Full HD IPS | AMD Ryzen 5 5500U Hexa-Core Mobile Processor | AMD Radeon Graphics | 8GB DDR4 | 256GB NVMe SSD | WiFi 6 | Backlit KB | Windows 11 Home",
    category: "Electronics",
    image: "https://i.ibb.co/2vwS6HR/nextamazon2.jpg",
    isNew: true,
    brand: "Acer",
  },
  {
    id: 9003,
    title: "2020 Apple iPad Pro",
    price: 747.07,
    oldPrice: 850.99,
    description:
      "2020 Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (Renewed)",
    category: "Electronics",
    image: "https://i.ibb.co/SybqWjf/nextamazon3.jpg",
    isNew: true,
    brand: "",
  },
  {
    id: 9004,
    title: "Smart Watches for Men",
    price: 56.99,
    oldPrice: 65.85,
    description:
      "Smart Watches for Men (Answer/Make Call) 100 Sport Modes Fitness Tracker Heart Rate Blood Oxygen Sleep Monitor IP68 Waterproof Fitness Watch Activity Tracker and Smartwatches iPhone Android Compatible",
    category: "Smart watch",
    image: "https://i.ibb.co/0Gvx3Sk/nextImg.jpg",
    isNew: true,
    brand: "ENOMIR",
  },
  {
    id: 9005,
    title: "KOORUI 24 Inch Computer Monitor -FHD 1080P Gaming Monitor",
    price: 118.9,
    oldPrice: 180.58,
    description:
      "KOORUI 24 Inch Computer Monitor -FHD 1080P Gaming Monitor 165Hz VA 1ms Build-in FreeSync™, Compatible G-sync, LED Monitors with Ultra-Thin, HDMI X2 /DP, VESA Compatible, Tilt Adjustable, Eye Care 24E4",
    category: "Electronics",
    image: "https://i.ibb.co/xD7nDq5/nextamazon5.jpg",
    isNew: true,
    brand: "KOORUI",
  },
  {
    id: 9006,
    title: "GMKtec Mini PC Window 11 Pro",
    price: 338.0,
    oldPrice: 450.0,
    description:
      "GMKtec Mini PC Window 11 Pro, AMD Ryzen 7 3750H Micro Desktop Computers 16GB DDR4 512GB PCIe SSD, 4K UHD Triple Screen Mini Computer for Light Gaming Business Office Video Editing",
    category: "Computer",
    image: "https://i.ibb.co/pv6ZG1b/nextamazon6.jpg",
    isNew: true,
    brand: "GMKtec",
  },
  {
    id: 9007,
    title: "larco Gaming PC Desktop Computer Intel i7",
    price: 499.99,
    oldPrice: 520.5,
    description:
      "Alarco Gaming PC Desktop Computer Intel i7 3.40GHz,16GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 750 4GB, 6 RGB Fans with Remote",
    category: "Computer",
    image: "https://i.ibb.co/9HPcTJv/nextamazon7.jpg",
    isNew: true,
    brand: "larco",
  },
  {
    id: 9008,
    title: "SkyTech Shadow 3.0 Gaming Computer PC",
    price: 899.99,
    oldPrice: 950.0,
    description:
      "SkyTech Shadow 3.0 Gaming Computer PC Desktop - Ryzen 5 3600 6-Core 3.6GHz, GTX 1660 Super 6G, 1TB SSD, 16GB DDR4 3000, AC WiFi, Windows 10 Home 64-bit, Black",
    category: "Computer",
    image: "https://i.ibb.co/DYmhxf8/nextamazon8.jpg",
    isNew: true,
    brand: "SkyTech",
  },
  {
    id: 9009,
    title: "Skullcandy Crusher Evo Wireless Over-Ear Bluetooth Headphones",
    price: 147.9,
    oldPrice: 190.5,
    description:
      "Skullcandy Crusher Evo Wireless Over-Ear Bluetooth Headphones for iPhone and Android with Mic / 40 Hour Battery Life / Extra Bass Tech / Best for Music, School, Workouts, and Gaming - Black",
    category: "Electronics",
    image: "https://i.ibb.co/ZG9t4RL/nextamazon9.jpg",
    isNew: true,
    brand: "Skullcandy ",
  },
  {
    id: 9010,
    title: "Garmin 010-02430-01 Venu 2",
    price: 319.98,
    oldPrice: 450.5,
    description:
      "Garmin 010-02430-01 Venu 2, GPS Smartwatch with Advanced Health Monitoring and Fitness Features, Slate Bezel with Black Case and Silicone Band",
    category: "Smart watch",
    image: "https://i.ibb.co/z7yV4zf/nextamazon10.jpg",
    isNew: true,
    brand: "Garmin",
  },
  {
    _id: 9011,
    title: "Canon EOS Rebel T100",
    description:
      "Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live View Shooting",
    price: 559.99,
    oldPrice: 700.0,
    image: "https://i.ibb.co/1r28gMk/1.webp",
    isNew: true,
    category: "Electronics",
    brand: "Canon",
  },
  {
    _id: 9012,
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
    _id: 9013,
    title: "Apple 10.2-inch iPad",
    description:
      "2021 Apple 10.2-inch iPad Wi-Fi 64GB - Space Gray (9th Generation)",
    oldPrice: 329.0,
    price: 269.0,
    image: "https://i.ibb.co/VL1Dnv1/4.webp",
    isNew: true,
    category: "Electronics",
    brand: "Apple",
  },
  {
    _id: 9014,
    title: "iPhone 14",
    description: "AT&T iPhone 14 128GB Midnight",
    oldPrice: 1745.99,
    price: 1200.0,
    image: "https://i.ibb.co/5F3nWv6/7.webp",
    isNew: true,
    category: "Electronics",
    brand: "Apple",
  },
  {
    _id: 9015,
    title: "Apple Watch SE",
    description:
      "Apple Watch SE (2nd Gen) GPS 40mm Midnight Aluminum Case with Midnight Sport Band - S/M",
    price: 249.0,
    oldPrice: 350.0,
    image: "https://i.ibb.co/xgZWmdq/8.jpg",
    isNew: true,
    category: "Smart watch",
    brand: "Apple",
  },
  {
    _id: 9016,
    title: "Beats Solo3",
    description:
      "Beats Solo3 Wireless On-Ear Headphones with Apple W1 Headphone Chip, Black, MX432LL/A",
    oldPrice: 120.99,
    price: 130.09,
    image: "https://i.ibb.co/rQKjVC2/5.webp",
    isNew: true,
    category: "Electronics",
    brand: "Beats by Dr. Dre",
  },
  {
    _id: 9017,
    title: "uhomepro TV Stand Cabinet",
    description:
      "uhomepro TV Stand Cabinet for Living Room up to 55 Television, Entertainment Center with RGB LED Lights and Storage Shelves Furniture, Black High Gloss TV Cabinet Console Table, Q15709",
    oldPrice: 219.99,
    price: 125.99,
    image: "https://i.ibb.co/Ycz8hkV/6.webp",
    isNew: true,
    category: "Home Decoration",
    brand: "uhomepro",
  },
  {
    _id: 9018,
    title: "Pupuskyer Smart Watch",
    description:
      "Pupuskyer Smart Watch, 1.7inchs Fitness Tracker with Heart Rate Monitor,Blood Oxygen Tracking, Sleep Tracking for Android iPhone Samsung,Water Resistant Smart Watches for Men Women with Watch Talking",
    oldPrice: 49.99,
    price: 55.9,
    image: "https://i.ibb.co/VC2VWGL/nextamazon11.jpg",
    isNew: true,
    category: "Smart watch",
    brand: "Pupuskyer",
  },
  {
    _id: 9019,
    title: "SAMSUNG Galaxy S23 Ultra Cell Phone",
    description:
      "SAMSUNG Galaxy S23 Ultra Cell Phone, Factory Unlocked Android Smartphone, 512GB Storage, 200MP Camera, Night Mode, Long Battery Life, S Pen, US Version, 2023, Cream",
    oldPrice: 1279.99,
    price: 1500.0,
    image: "https://i.ibb.co/THwjSTK/nextamazon12.jpg",
    isNew: true,
    category: "Smart Phones",
    brand: "SAMSUNG",
  },
  {
    _id: 9020,
    title: "Apple iPhone 12 Mini 5G",
    description:
      "Apple iPhone 12 Mini 5G, US Version, 128GB, Blue - Unlocked (Renewed)",
    oldPrice: 344.0,
    price: 365.0,
    image: "https://i.ibb.co/nry7WRZ/nextamazon13.jpg",
    isNew: true,
    category: "Smart Phones",
    brand: "Apple",
  },
];

router.get("/nextamazon", (req, res) => {
  res.send(nextamazonproducts);
});

module.exports = router;
