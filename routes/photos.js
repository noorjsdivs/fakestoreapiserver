const express = require('express')
const router = express.Router()


const photosData = [
  {
    _id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnailUrl: "https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnailUrl: "https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600",
    thumbnailUrl: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&w=600",
    thumbnailUrl: "https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=600",
    thumbnailUrl: "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://images.pexels.com/photos/2747600/pexels-photo-2747600.jpeg?auto=compress&cs=tinysrgb&w=600",
    thumbnailUrl: "https://images.pexels.com/photos/2747600/pexels-photo-2747600.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600",
    thumbnailUrl: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://images.pexels.com/photos/2481177/pexels-photo-2481177.jpeg?auto=compress&cs=tinysrgb&w=600",
    thumbnailUrl: "https://images.pexels.com/photos/2481177/pexels-photo-2481177.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: 9,
    title: "qui eius qui autem sed",
    url: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600",
    thumbnailUrl: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: 10,
    title: "beatae et provident et ut vel",
    url: "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compres",
    thumbnailUrl: "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compres",
  },
  {
    _id: 11,
    title: "nihil at amet non hic quia qui",
    url: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600",
    thumbnailUrl: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: 12,
    title:
      "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    url: "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600",
    thumbnailUrl: "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: 13,
    title: "repudiandae iusto deleniti rerum",
    url: "https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg?auto=compress&cs=tinysrgb&w=600",
    thumbnailUrl: "https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: 14,
    title: "est necessitatibus architecto ut laborum",
    url: "ges.pexels.com/photos/409127/pexels-photo-409127.jpeg?auto=compress&cs=tinysrgb&w=600",
    thumbnailUrl: "ges.pexels.com/photos/409127/pexels-photo-409127.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: 15,
    title: "harum dicta similique quis dolore earum ex qui",
    url: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=600",
    thumbnailUrl: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=600",
  },
];

router.get("/photos",(req,res)=>{
    res.send(photosData)
})

module.exports = router