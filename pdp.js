window.addEventListener("DOMContentLoaded", () => {
  let product = JSON.parse(localStorage.getItem("product"));

  if (product) {
    document.getElementById("product-img").src = product.img;
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-dis").textContent = product.dis;
  }
});





let btn = document.getElementById("btn");
 btn.addEventListener("click", function () {
    let imgSrc = document.getElementById("product-img").src;

        // let whatsappLink = `https://wa.me/6280348611?text=${imgSrc}How_Much`;
        let url = `https://wa.me/9569374626?text=${encodeURIComponent(imgSrc + " " + "Is this available")}`;
        console.log(url);
        window.open(url, "_blank");
    });