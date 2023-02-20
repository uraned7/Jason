"use strict";

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((json) => showProduct(json));

function showProduct(jason){
    let content = document.querySelector("#content")
    console.log(jason)
    let allProducts = jason.products;
    for (const product of allProducts) {
        content.innerHTML += `
        <div class="ItemDiv">
            <h1>${product.title}</h1>
            <p>${product.category}</p>
            <img src="${product.thumbnail}"></img>
            <p>${product.description}</p>
            <p>${product.price} рублей</p>
            <p>${product.rating} звёзд</p>
        </div>
        `
    }
}
let TB = document.querySelector("#TB").value;

fetch('https://dummyjson.com/products/search?q={TB}')
.then(res => res.json())
.then(console.log);