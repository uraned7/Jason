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
        <div class="ItemDiv" onclick="popup('${product.description}')">
            <div class="ItemHeader">
                <h1>${product.title}</h1>
                <p id="Category">${product.category}</p>
            </div>
            <img id="ItemImage" src="${product.thumbnail}"></img>
            <p>${product.description}</p>
            <div class="ItemInfo">
                <p>${product.price} рублей</p>
                <p id="Rating">${product.rating} звёзд</p>
            </div>
            <input id="Buy" type="button" value="Купить">

        </div>
        
        `
    }
}
let TB = document.querySelector("#TB").value;

fetch('https://dummyjson.com/products/search?q={TB}')
.then(res => res.json())
.then(console.log);

function popup(text){
    alert(text)
}