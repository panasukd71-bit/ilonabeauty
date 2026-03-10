// ===== CREATE PRODUCTS =====

const catalog=document.getElementById("catalog");

if(catalog){

PRODUCTS.forEach(product=>{

catalog.innerHTML+=`
<div class="card">
<a href="product.html?id=${product.id}">
<img src="${product.image}">
</a>

<h3>${product.name}</h3>
<p>${product.price}</p>

<a class="btn" href="product.html?id=${product.id}">
Подробнее
</a>

<a class="btn"
href="https://t.me/Ninel_Viktorivna"
target="_blank">
Заказать
</a>
</div>
`;

});

}


// ===== PRODUCT PAGE =====

const params=new URLSearchParams(window.location.search);
const productID=params.get("id");

const productContainer=document.getElementById("product-page");

if(productContainer && productID){

const product=PRODUCTS.find(p=>p.id===productID);

productContainer.innerHTML=`
<div class="product-page">
<img src="${product.image}">
<h1>${product.name}</h1>
<p>${product.desc}</p>
<div class="price">${product.price}</div>

<a class="btn"
href="https://t.me/Ninel_Viktorivna"
target="_blank">
Заказать в Telegram
</a>
</div>
`;

}


// ===== CARD ANIMATION =====

const cards=document.querySelectorAll(".card");

function reveal(){
const trigger=window.innerHeight-80;

cards.forEach(card=>{
const top=card.getBoundingClientRect().top;
if(top<trigger){
card.classList.add("show");
}
});
}

window.addEventListener("scroll",reveal);
reveal();