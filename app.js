// Menü verisi
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "img/tteokbokki.jpg",
    desc: "Spicy rice cakes, serving with fish cake."
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "img/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: "Chicken noodle soup, serving with vegetables such as soy bean, green onion. Optionally with egg."
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "img/DWELL-bibimbap.jpg",
    desc: "Boiling vegetables, serving with special hot sauce."
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "img/dan-dan-noodle.jpg",
    desc: "Dan dan noodle, serving with green onion."
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "img/Yangzhou-Fried-Rice1.jpg",
    desc: "Yangzhou style fried rice, serving with bean and pickles."
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "img/Onigiri-3-1-of-1.jpg",
    desc: "Rice Sandwich, serving with soy sauce."
  },
];

// Menüdeki kategorileri reduce ile bul ve butonları oluştur
function renderMenuButtons() {
  const categories = menu.reduce((acc, item) => {
    if (!acc.includes(item.category)) acc.push(item.category);
    return acc;
  }, ['All']);
  const btnContainer = document.querySelector('.btn-container');
  btnContainer.innerHTML = categories
    .map(cat => `<button class="btn btn-outline-dark btn-item" data-id="${cat}">${cat}</button>`)
    .join('');
  // Butonlara tıklama olayı
  btnContainer.querySelectorAll('.btn-item').forEach(btn => {
    btn.onclick = function() {
      const category = this.dataset.id;
      const filteredMenu = category === 'All' ? menu : menu.filter(item => item.category === category);
      displayMenuItems(filteredMenu);
    };
  });
}

// Menü kartlarını map ile oluştur
function displayMenuItems(menuItems) {
  const sectionCenter = document.querySelector('.section-center');
  sectionCenter.innerHTML = menuItems
    .map(item => `
      <div class="menu-items col-12 col-md-6 d-flex">
        <img src="${item.img}" alt="${item.title}" class="photo" />
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">${item.desc}</div>
        </div>
      </div>
    `)
    .join('');
}

// Sayfa yüklendiğinde başlat
window.onload = function() {
  renderMenuButtons();
  displayMenuItems(menu);
};
