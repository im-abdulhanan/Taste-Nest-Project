var bannerImages = [
    "banner/bannerOne.jpg",
    "banner/bannerTwo.jpg",
    "banner/bannerThree.jpg",
    "banner/bannerFour.jpg",
    "banner/bannerFive.jpg",
];
var bannerIndex = 0;
var bannerDiv = document.getElementById("bannerDiv");
var rightArrow = document.getElementById("rightArrow");
var leftArrow = document.getElementById("lightArrow");
rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.addEventListener("click", function () {
    bannerIndex++;
    if (bannerIndex >= bannerImages.length) {
        bannerIndex = 0;
    }
    bannerDiv.style.background = "url(".concat(bannerImages[bannerIndex], ")");
    bannerDiv.style.backgroundSize = "cover";
});
leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.addEventListener("click", function () {
    bannerIndex--;
    if (bannerIndex <= 0) {
        bannerIndex = bannerImages.length - 1;
    }
    bannerDiv.style.background = "url(".concat(bannerImages[bannerIndex], ")");
    bannerDiv.style.backgroundSize = "cover";
});
var cardDiv = document.getElementById("cardDisplay");
var products = [
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
products.forEach(function (item) {
    //card Parent create
    var card = document.createElement("div");
    card.classList.add("cardBox");
    //img div create
    var imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");
    imgDiv.innerHTML = "<img src=\"".concat(item.mainImg, "\" class = \"mainIMG\" alt=\"\">");
    //Description
    var DescriptionDiv = document.createElement("div");
    var starDiv = document.createElement("div");
    starDiv.classList.add("starDiv");
    DescriptionDiv.classList.add("desDiv");
    DescriptionDiv.innerHTML = "\n  <h2>".concat(item.title, "</h2>\n  <h3>Price: $").concat(item.price, "</h3>\n  ");
    item.stars.forEach(function (item) {
        var starsImg = document.createElement("img");
        starsImg.classList.add("starsImg");
        starsImg.src = item;
        starDiv.appendChild(starsImg);
    });
    var soldWrite = document.createElement("span");
    soldWrite.classList.add("sold");
    soldWrite.innerHTML = "<span>".concat(item.sold, " SOLD</span>");
    starDiv.appendChild(soldWrite);
    //btn
    var btn_cart_Div = document.createElement("div");
    btn_cart_Div.classList.add("btnCart");
    var btn = document.createElement("a");
    btn.classList.add("cartBTN");
    btn.innerText = "ADD TO CART";
    var cartIcon = document.createElement("img");
    cartIcon.classList.add("BTNcartIcon");
    cartIcon.src = "./icons/add_shopping_cart.png";
    btn_cart_Div.appendChild(btn);
    btn_cart_Div.appendChild(cartIcon);
    card.appendChild(imgDiv);
    card.appendChild(DescriptionDiv);
    card.appendChild(starDiv);
    card.appendChild(btn_cart_Div);
    cardDiv.appendChild(card);
});
