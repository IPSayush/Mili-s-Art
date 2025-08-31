export const data = [
  {
    title: "Abstract Art",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    dis: "A colorful abstract design full of creativity.",
    price: "Price: ₹399",
  },
  {
    title: "Mountain View",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    dis: "Beautiful mountain landscape for your wall.",
    price: "Price: ₹499",
  },
  {
    title: "Ocean Waves",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    dis: "Calming ocean waves captured in a frame.",
    price: "Price: ₹599",
  },
  {
    title: "Ocean Waves",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    dis: "Calming ocean waves captured in a frame.",
    price: "Price: ₹599",
  },
  {
    title: "Mountain View",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    dis: "Beautiful mountain landscape for your wall.",
    price: "Price: ₹499",
  },
  {
    title: "Ocean Waves",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    dis: "Calming ocean waves captured in a frame.",
    price: "Price: ₹599",
  },
  {
    title: "Ocean Waves",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    dis: "Calming ocean waves captured in a frame.",
    price: "Price: ₹599",
  },
  {
    title: "Mountain View",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    dis: "Beautiful mountain landscape for your wall.",
    price: "Price: ₹499",
  },
  {
    title: "Ocean Waves",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    dis: "Calming ocean waves captured in a frame.",
    price: "Price: ₹599",
  },
  {
    title: "Ocean Waves",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    dis: "Calming ocean waves captured in a frame.",
    price: "Price: ₹599",
  },
  {
    title: "Mountain View",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    dis: "Beautiful mountain landscape for your wall.",
    price: "Price: ₹499",
  },
  {
    title: "Ocean Waves",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    dis: "Calming ocean waves captured in a frame.",
    price: "Price: ₹599",
  },
  {
    title: "Ocean Waves",
    url: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
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