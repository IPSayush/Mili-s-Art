export const data = [
    {
        title: "Abstract Art",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "A colorful abstract design full of creativity.",
        price: "Price: ₹399",
    },
    {
        title: "Mountain View",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "Beautiful mountain landscape for your wall.",
        price: "Price: ₹499",
    },
    {
        title: "Ocean Waves",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "Calming ocean waves captured in a frame.",
        price: "Price: ₹599",
    },
    {
        title: "City Lights",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "Modern city lights glowing at night.",
        price: "Price: ₹699",
    },
    {
        title: "Vintage Street",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "Aesthetic vintage street artwork.",
        price: "Price: ₹799",
    },
    {
        title: "Floral Beauty",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "Fresh blooming flowers with vibrant colors.",
        price: "Price: ₹899",
    },
    {
        title: "Desert Dunes",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "Golden sand dunes under sunlight.",
        price: "Price: ₹999",
    },
    {
        title: "Forest Path",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "A peaceful path through the forest.",
        price: "Price: ₹1099",
    },
    {
        title: "Mountain View",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "Beautiful mountain landscape for your wall.",
        price: "Price: ₹499",
    },
    {
        title: "Ocean Waves",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "Calming ocean waves captured in a frame.",
        price: "Price: ₹599",
    },
    {
        title: "City Lights",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "Modern city lights glowing at night.",
        price: "Price: ₹699",
    },
    {
        title: "Vintage Street",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "Aesthetic vintage street artwork.",
        price: "Price: ₹799",
    },
    {
        title: "Floral Beauty",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "Fresh blooming flowers with vibrant colors.",
        price: "Price: ₹899",
    },
    {
        title: "Desert Dunes",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "Golden sand dunes under sunlight.",
        price: "Price: ₹999",
    },
    {
        title: "Forest Path",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "A peaceful path through the forest.",
        price: "Price: ₹1099",
    },
    {
        title: "Forest Path",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&s",
        dis: "A peaceful path through the forest.",
        price: "Price: ₹1099",
    }
];

const container = document.querySelector(".containt");

// har item ke liye ek box banao
data.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("nobox", "extra");

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
    // const btn = box.querySelector("button");
    // btn.addEventListener("click", () => {
    //     let img = box.querySelector(".box-img img");
    //     let imgSrc = img.src;
    //     // let whatsappLink = `https://wa.me/6280348611?text=${imgSrc}How_Much`;
    //     let url = `https://wa.me/9569374626?text=${encodeURIComponent(imgSrc + " " + "Is this available")}`;
    //     console.log(url);
    //     window.open(url, "_blank");
    // });

    const btn = box.querySelector("button");
    btn.addEventListener("click", () => {
  let img = box.querySelector(".box-img img").src;
  let price = box.querySelector("b").textContent;
  let dis = box.querySelector("span").textContent;
  let title = box.querySelector("h2").textContent;

  // Save data in localStorage
  localStorage.setItem("product", JSON.stringify({
    img, price, dis, title
  }));

  // Redirect to pdp.html
  window.location.href = "pdp.html";
});





    container.appendChild(box);
});

// This is for open gallery by clicking on open button
const galleryBtn = document.getElementById("gallery-btn");
let isOpen = false;

galleryBtn.addEventListener("click", () => {
    let extraBoxes = document.querySelectorAll(".extra"); // sirf extra wale select karo

    if (isOpen) {
        // Hide only extra boxes
        extraBoxes.forEach(box => {
            box.classList.add("nobox");
            box.classList.remove("box");
        });
        galleryBtn.textContent = "Open Gallery";
        isOpen = false;
    } else {
        // Show only extra boxes
        extraBoxes.forEach(box => {
            box.classList.add("box");
            box.classList.remove("nobox");
        });
        galleryBtn.textContent = "Close Gallery";
        isOpen = true;
    }
});
