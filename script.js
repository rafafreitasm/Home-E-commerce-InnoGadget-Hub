const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");

let vitrine = document.querySelector("#vitrine")
console.log(vitrine)

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});

let produto = `
    <div class="product">
    <img src="images/products/product-4.png" alt="">
    <p class="product-name">Combo Gamer Meetion</p>
    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
    <p class="prodct-price">4,000.00 <span>R$</span></p>
    </div>
`

let produtos = [
    {
        url: "images/products/product-4.png",
        nome: "Combo Gamer Meetion",
        preco: "R$ 4.000,00",
        estrelas: 4
    },

    {
        url: "images/products/product-5.png",
        nome: "Placa de video GForce",
        preco: "R$ 1.500.00",
        estrelas: 4
    },

    {
        url: "images/products/product-6.png",
        nome: "Consoles e acessórios",
        preco: "R$ 5.000,00",
        estrelas: 4
    },

    {
        url: "images/products/product-7.png",
        nome: "Combo Gamer Meetion",
        preco: "R$ 1.450.00",
        estrelas: 4
    }
]

let qtd = produtos.length - 1;

for(let i = 0; i <= qtd; i++) {
    vitrine.innerHTML += `
    <div class="product">
    <img src="${produtos[i].url}" alt="">
    <p class="product-name">${produtos[i].nome}</p>
    <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
    <p class="prodct-price">${produtos[i].preco} <span>R$</span></p>
    </div>
`;
}
