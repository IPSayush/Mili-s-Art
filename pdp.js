// If on index.html, set up button click to store data and redirect
if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
    let btns = document.querySelectorAll(".box button");
    btns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            let box = btn.closest(".box");
            let img = box.querySelector(".box-img img");
            let imgSrc = img.src;
            let h2 = box.querySelector("h2").textContent;
            let b = box.querySelector("b").textContent;
            // let p = box.textContent;
            let p = box.querySelector("span").textContent;

            // Save data to localStorage
            localStorage.setItem('product', JSON.stringify({
                img: imgSrc,
                title: h2,
                price: b,
                desc: p
            }));
            // Redirect to pdp.html
            window.location.href = 'pdp.html';
        });
    });
}

// If on pdp.html, load data from localStorage
if (window.location.pathname.endsWith('pdp.html')) {
    const data = JSON.parse(localStorage.getItem('product'));
    console.log(data);
    if (data) {
        const img = document.getElementById('product-img');
        if (img) img.src = data.img;
        const title = document.getElementById('product-title');
        if (title) title.textContent = data.title;
        const price = document.getElementById('product-price');
        if (price) price.textContent = data.price;
        const desc = document.getElementById('product-dis');
        if (desc) desc.textContent = data.desc;
    }
}
let btn = document.getElementById("btn");
 btn.addEventListener("click", function () {
    let imgSrc = document.getElementById("product-img").src;

        // let whatsappLink = `https://wa.me/6280348611?text=${imgSrc}How_Much`;
        let url = `https://wa.me/9569374626?text=${encodeURIComponent(imgSrc + " " + "Is this available")}`;
        console.log(url);
        window.open(url, "_blank");
    });