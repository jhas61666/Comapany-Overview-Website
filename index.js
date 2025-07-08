// === Product List ===
const products = [
  { id: 1, name: "Belt Conveyor", description: "Reliable and efficient transport solution.", img: "https://i0.wp.com/www.yuhaitechnology.com/wp-content/uploads/2023/06/Belt-Conveyor.jpg?w=600&ssl=1" },
  { id: 2, name: "Inclined Conveyor", description: "Smooth elevation conveyor for varied heights.", img: "https://i0.wp.com/www.yuhaitechnology.com/wp-content/uploads/2020/03/Belt-Conveyor-1-1.jpg?resize=1024%2C238&ssl=1" },
  { id: 3, name: "Roller Machine", description: "High-volume roller based material handling.", img: "https://i0.wp.com/www.yuhaitechnology.com/wp-content/uploads/2023/06/180%C2%B0-Roller-Turning-Machine-11.jpg?fit=1400%2C316&ssl=1" },
  { id: 4, name: "Climbing Belt Conveyor", description: "Used for inclined transport, ensures smooth material flow.", img: "https://i0.wp.com/www.yuhaitechnology.com/wp-content/uploads/2023/06/Climbing-Belt-Conveyor.jpg?w=600&ssl=1" },
  { id: 5, name: "Multi-Wedge Belt", description: "Used for inclined transport, ensures smooth material flow.", img: "https://i0.wp.com/www.yuhaitechnology.com/wp-content/uploads/2023/06/Multi-Wedge-Belt.jpg?w=600&ssl=1" },
  { id: 6, name: "180 degree Roller Turning Machine", description: "Transmission Speed: generally 10∼30M/min, according to user needs to use inverter speed regulation operation.", img: "https://i0.wp.com/www.yuhaitechnology.com/wp-content/uploads/2023/06/180%C2%B0-Roller-Turning-Machine-11.jpg?fit=1400%2C316&ssl=1" }
];

// === Load Products into Grid ===
function loadProducts() {
  const grid = document.getElementById("productGrid");

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="info">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      </div>`;
    grid.appendChild(card);
  });
}

// === Smooth Scroll to Section ===
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// === Submit Contact Form ===
function submitForm(e) {
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();

  if (!name || !email) {
    alert("Please fill out all fields correctly.");
    return;
  }

  alert(`Thank you, ${name}! We’ll get back to you soon.`);
  e.target.reset();
}

// === Scroll to Top Button ===
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();

  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.onscroll = () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  };

  scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});
