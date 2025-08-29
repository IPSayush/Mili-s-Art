export const data = [
  {
    title: "Abstract Art",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    dis: "A colorful abstract design full of creativity.",
    price: "Price: ₹399",
  },
  {
    title: "Mountain View",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    dis: "Beautiful mountain landscape for your wall.",
    price: "Price: ₹499",
  },
  {
    title: "Ocean Waves",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    dis: "Calming ocean waves captured in a frame.",
    price: "Price: ₹599",
  },
  {
    title: "City Lights",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    dis: "Modern city lights glowing at night.",
    price: "Price: ₹699",
  },
  {
    title: "Vintage Street",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    dis: "Aesthetic vintage street artwork.",
    price: "Price: ₹799",
  },
  {
    title: "Floral Beauty",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    dis: "Fresh blooming flowers with vibrant colors.",
    price: "Price: ₹899",
  },
  {
    title: "Desert Dunes",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    dis: "Golden sand dunes under sunlight.",
    price: "Price: ₹999",
  },
  {
    title: "Forest Path",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    dis: "A peaceful path through the forest.",
    price: "Price: ₹1099",
  },
  {
    title: "Sunset Glow",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    dis: "Orange sunset glow captured on horizon.",
    price: "Price: ₹1199",
  },
  {
    title: "Classic Bridge",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    dis: "An elegant old bridge crossing the river.",
    price: "Price: ₹1299",
  },
  {
    title: "Snowy Peaks",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    dis: "Cold snowy mountains touching the clouds.",
    price: "Price: ₹1399",
  },
  {
    title: "Modern Sculpture",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    dis: "A modern sculpture that inspires thought.",
    price: "Price: ₹1499",
  },
];

const boxes = document.querySelectorAll(".containt .box");

data.forEach((item, index) => {
  if (boxes[index]) {
    // image set
    const img = boxes[index].querySelector("img");
    img.src = item.url;
    img.alt = item.title;
    // title set
    const title = boxes[index].querySelector("h2");
    title.textContent = item.title;
    // price and description set
    const price = boxes[index].querySelector("p b");
    const dis = boxes[index].querySelector("p span");
    price.textContent = item.price + " ";
    dis.textContent = item.dis;
  }
});