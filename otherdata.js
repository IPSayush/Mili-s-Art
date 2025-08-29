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
  }
];

const container = document.querySelector(".containt");

// har item ke liye ek box banao
data.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box");

    box.innerHTML = `
    <div class="box-img">
      <img class="clip-path" src="${item.url}" alt="${item.title}">
    </div>
    <div class="third-heading" style="padding: 0;">
      <h2 style="margin-bottom: 0;">${item.title}</h2>
    </div>
    <p><b>${item.price}</b> <span>${item.dis}</span></p>
    <button>Get On Whatsapp</button>
  `;
    const btn = box.querySelector("button");
    btn.addEventListener("click", () => {
        let img = box.querySelector(".box-img img");
        let imgSrc = img.src;
        // let whatsappLink = `https://wa.me/6280348611?text=${imgSrc}How_Much`;
        let url = `https://wa.me/9569374626?text=${encodeURIComponent(imgSrc + " " + "Is this available")}`;
        console.log(url);
        window.open(url, "_blank");
    });

    container.appendChild(box);
});