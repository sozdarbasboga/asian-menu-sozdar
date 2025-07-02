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
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "img/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "img/Ma Yi Shang Shu.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "img/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// SPA için sayfa içerikleri
const pages = {
  menu: () => renderMenuPage(),
  about: () => renderAboutPage(),
  contact: () => renderContactPage(),
};

// Navigation barı dinamik oluştur
function renderNavBar() {
  const navHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" id="nav-menu">Menu</a>
        <a class="nav-link" href="#" id="nav-about">Hakkında</a>
        <a class="nav-link" href="#" id="nav-contact">İletişim</a>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.getElementById('nav-menu').onclick = () => navigate('menu');
  document.getElementById('nav-about').onclick = () => navigate('about');
  document.getElementById('nav-contact').onclick = () => navigate('contact');
}

// SPA sayfa geçişi
function navigate(page) {
  document.querySelector('.container').innerHTML = '';
  pages[page]();
}

// Menü sayfası
function renderMenuPage() {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <section class="menu">
      <div class="title">
        <h2>Asian Kitchen's Menu</h2>
      </div>
      <div class="btn-container"></div>
      <div class="section-center row"></div>
    </section>
  `;
  renderMenuButtons();
  displayMenuItems(menu);
}

// Hakkında sayfası
function renderAboutPage() {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <section class="about">
      <div class="title">
        <h2>Hakkında</h2>
      </div>
      <div class="about-content">
        <p>Asian Kitchen, Uzak Doğu mutfağının en sevilen lezzetlerini sizlerle buluşturuyor. Taze malzemeler, geleneksel tarifler ve modern sunumlarla eşsiz bir deneyim sunuyoruz.</p>
      </div>
    </section>
  `;
}

// İletişim sayfası
function renderContactPage() {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <section class="contact">
      <div class="title">
        <h2>İletişim</h2>
      </div>
      <div class="contact-content">
        <p>Bize ulaşmak için: <a href="mailto:info@asiankitchen.com">info@asiankitchen.com</a></p>
        <p>Telefon: 0123 456 78 90</p>
      </div>
    </section>
  `;
}

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
  renderNavBar();
  pages.menu();
};
