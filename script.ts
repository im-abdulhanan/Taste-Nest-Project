var bannerImages: string[] = [
  "banner/bannerOne.jpg",
  "banner/bannerTwo.jpg",
  "banner/bannerThree.jpg",
  "banner/bannerFour.jpg",
  "banner/bannerFive.jpg",
];
var bannerIndex: number = 0;
var bannerDiv = document.getElementById("bannerDiv") as HTMLElement;
var rightArrow = document.getElementById("rightArrow");
var leftArrow = document.getElementById("lightArrow");
rightArrow?.addEventListener("click", function () {
  bannerIndex++;
  if (bannerIndex >= bannerImages.length) {
    bannerIndex = 0;
  }
  bannerDiv.style.background = `url(${bannerImages[bannerIndex]})`;
  bannerDiv.style.backgroundSize = "cover";
});
leftArrow?.addEventListener("click", function () {
  bannerIndex--;
  if (bannerIndex <= 0) {
    bannerIndex = bannerImages.length - 1;
  }
  bannerDiv.style.background = `url(${bannerImages[bannerIndex]})`;
  bannerDiv.style.backgroundSize = "cover";
});

var cardDiv = document.getElementById("cardDisplay") as HTMLElement;
interface Product {
  id: number;
  mainImg: string;
  title: string;
  stars: string[];
  sold: number;
  price: number;
}

var products: Product[] = [
  {
    id: 1,
    mainImg: "./1Headphones/headphone2.jpg",
    title: "Apple Wireless Headphones",
    stars: [
      "./icons/fill_start.png",
      "./icons/fill_start.png",
      "./icons/fill_start.png",
      "./icons/fill_start.png",
      "./icons/empty_star.png",
    ],
    sold: 100,
    price: 199,
  },
  {
    id: 2,
    mainImg: "./2protine /ptnOne.jpeg",
    title: "Nitro Teach Supplement",
    stars: [
      "./icons/fill_start.png",
      "./icons/fill_start.png",
      "./icons/fill_start.png",
      "./icons/fill_start.png",
      "./icons/half_star.png"
    ],
    sold: 100,
    price: 999,
  },
];

products.forEach((item) => {
  //card Parent create
  const card = document.createElement("div");
  card.classList.add("cardBox");

  //img div create
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");
  imgDiv.innerHTML = `<img src="${item.mainImg}" class = "mainIMG" alt="">`;

  //Description
  const DescriptionDiv = document.createElement("div");
  const starDiv = document.createElement("div");
  starDiv.classList.add("starDiv");
  DescriptionDiv.classList.add("desDiv");
  DescriptionDiv.innerHTML = `
  <h2>${item.title}</h2>
  <h3>Price: $${item.price}</h3>
  `
  item.stars.forEach((item)=>{
    const starsImg = document.createElement("img");
    starsImg.classList.add("starsImg")
    starsImg.src = item 
    starDiv.appendChild(starsImg)
  });
  const soldWrite = document.createElement("span")
    soldWrite.classList.add("sold")
    soldWrite.innerHTML = `<span>${item.sold} SOLD</span>` 
    starDiv.appendChild(soldWrite)
  //btn
  const btn_cart_Div = document.createElement("div");
  btn_cart_Div.classList.add("btnCart");

  const btn = document.createElement("a");
  btn.classList.add("cartBTN");
  btn.innerText = "ADD TO CART";

  const cartIcon = document.createElement("img");
  cartIcon.classList.add("BTNcartIcon");
  cartIcon.src = "./icons/add_shopping_cart.png";

  btn_cart_Div.appendChild(btn);
  btn_cart_Div.appendChild(cartIcon);
  card.appendChild(imgDiv);
  card.appendChild(DescriptionDiv);
  card.appendChild(starDiv)
  card.appendChild(btn_cart_Div);

  cardDiv.appendChild(card);
});
