// const boxes = document.querySelectorAll(".containt .box");

// data.forEach((item, index) => {
//   if (boxes[index]) {
//     // image set
//     const img = boxes[index].querySelector("img");
//     img.src = item.url;
//     img.alt = item.title;
//     // title set
//     const title = boxes[index].querySelector("h2");
//     title.textContent = item.title;
//     // price and description set
//     const price = boxes[index].querySelector("p b");
//     const dis = boxes[index].querySelector("p span");
//     price.textContent = item.price + " ";
//     dis.textContent = item.dis;
//   }
// });


let btns = document.querySelectorAll(".box button");
btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let img = this.parentElement.querySelector(".box-img img");
        let imgSrc = img.src;
        // let whatsappLink = `https://wa.me/6280348611?text=${imgSrc}How_Much`;
        let url = `https://wa.me/9569374626?text=${encodeURIComponent(imgSrc + " " + "Is this available")}`;
        console.log(url);
        window.open(url, "_blank");
    });
});


let hamburger = document.getElementById('hamburger');
let navul = document.getElementById('nav-ul');
hamburger.addEventListener('click', () => {
    if (navul.style.display === 'flex') {
        navul.style.display = 'none';
    } else {
        navul.style.display = 'flex';
    }
});
navul.addEventListener('click', () => {
    navul.style.display = 'none';
});
//   if(navul.style.display="none"){
//     hamburger.addEventListener("click",() =>{
//         navul.style.display="flex";
//     })
//   } else {
//     hamburger.addEventListener("click",() =>{
//         navul.style.display="none";
//     })
//   }







//     let clicked = false;
//     if (clicked == false) {
//     let hamburger = document.getElementById('hamburger');
//     let navul = document.getElementById('nav-ul');
//     hamburger.addEventListener("click",() =>{
//         navul.style.display="flex";
//         clicked = true;
//         if(clicked == true){
//             hamburger.addEventListener("click",() =>{
//                 navul.style.display="none";
//                 clicked = false;
//                 console.log(clicked);
//                 return;
//             })
//         }
//         return;
//     })

// }
// hamburger.addEventListener()


document.getElementById('contact-p-email').addEventListener('click', function () {
    window.location.href = 'mailto:ayushbatham34@gmail.com?subject=Hi&body=Hello%20there';
});
document.getElementById('contact-p-instagram').addEventListener('click', () => {
    window.location.href = 'https://instagram.com/yourprofile', '_blank'
})
document.getElementById('contact-p-number').addEventListener('click', () => {
    window.open = 'www.google.com', '_blank'
})






document.getElementById('contact-p-email').addEventListener('click', ()=>{
    window.location.href = "mailto:ayushbatham34@gmail.com?subject=Inquiry&body=Hello Ayush, I want to know about your products.";
});
document.getElementById('contact-p-instagram').addEventListener('click', ()=>{
    window.location.href = "https://instagram.com/ayush_.ab._";
});
document.getElementById('contact-p-number').addEventListener('click', ()=>{
      window.location.href = "tel:+919876543210";
});