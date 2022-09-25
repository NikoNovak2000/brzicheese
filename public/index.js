import { Itemfood } from "./Itemfood.js";

console.log(Itemfood);

function displayItems(){
    var burger = document.getElementById('burger')
    var kebab = document.getElementById('kebab')
    var pizza = document.getElementById('pizza')
    var seafood = document.getElementById('seafood')
    var sides = document.getElementById('sides')

    const burgerData = Itemfood.filter(item => item.category=='burger');
    console.log(burgerData);

    const kebabData = Itemfood.filter(item => item.category=='kebab');
    console.log(kebabData);

    const pizzaData = Itemfood.filter(item => item.category=='pizza');
    console.log(pizzaData);

    const seafoodData = Itemfood.filter(item => item.category=='seafood');
    console.log(seafoodData);

    const sidesData = Itemfood.filter(item => item.category=='sides');
    console.log(sidesData);

    burgerData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','itemCard');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','cardTop');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);

        cardTop.appendChild(heart);
        cardTop.appendChild(star);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute = ('id', 'itemName');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','itemPrice');
        itemPrice.innerText = 'Price: ' + item.price + ' €';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        burger.appendChild(itemCard);
    })

    kebabData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','itemCard');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','cardTop');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);

        cardTop.appendChild(heart);
        cardTop.appendChild(star);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute = ('id', 'itemName');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','itemPrice');
        itemPrice.innerText = 'Price: ' + item.price + ' €';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        kebab.appendChild(itemCard);
    })

    pizzaData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','itemCard');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','cardTop');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);

        cardTop.appendChild(heart);
        cardTop.appendChild(star);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute = ('id', 'itemName');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','itemPrice');
        itemPrice.innerText = 'Price: ' + item.price + ' €';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        pizza.appendChild(itemCard);
    })

    seafoodData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','itemCard');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','cardTop');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);

        cardTop.appendChild(heart);
        cardTop.appendChild(star);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute = ('id', 'itemName');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','itemPrice');
        itemPrice.innerText = 'Price: ' + item.price + ' €';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        seafood.appendChild(itemCard);
    })

    sidesData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','itemCard');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','cardTop');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);

        cardTop.appendChild(heart);
        cardTop.appendChild(star);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute = ('id', 'itemName');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','itemPrice');
        itemPrice.innerText = 'Price: ' + item.price + ' €';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        sides.appendChild(itemCard);
    })
}

displayItems();

const categoryListData= [...new Map(Itemfood.map(item=> [item['category'],item])).values()];
console.log(categoryListData);

function categoryLists(){
    var categoryLists = document.getElementById('categoryList');

    categoryListData.map(item=> {
        var listCard = document.createElement('div');
        listCard.setAttribute('class', 'listCard');

        var listName = document.createElement('a');
        listName.setAttribute('class', 'listName');
        listName.innerText = item.category + ': ' + item.name;
        listName.setAttribute('href','#' + item.category);

        var listImg = document.createElement('img');
        listImg.src = item.img;

        listCard.appendChild(listImg);
        listCard.appendChild(listName);
        
        var cloneListCard = listCard.cloneNode(true);
        categoryList.appendChild(listCard);
    })
}

categoryLists();


document.querySelectorAll('.add-to-cart').forEach(item=> { item.addEventListener('click',addToCart);
})

var cartData = [];

function addToCart() {
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj = Itemfood.find( element => element.name == itemToAdd);
    console.log(itemObj);

    var index = cartData.indexOf(itemObj);
    if(index == -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');

        cartData = [...cartData,itemObj];
        console.log(cartData);
    }

    else if(index > -1){
        alert("Already added to cart. To increase quantity of the same order click on the cart button.");
    }

    document.getElementById('cartBox').innerText = ' ' + cartData.length + ' Items';
    //document.getElementById('m-cart-plus').innerText = ' ' + cartData.length + ' Items';
    totalAmount();
    cartItems();
}

function cartItems(){
    var tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ' ';

    cartData.map(item=> {
        var tableRow = document.createElement('tr');

        var rowData1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2 = document.createElement('td');
        rowData2.innerText = item.name;

        var rowData3 = document.createElement('td');
        var btn1 = document.createElement('button');
        btn1.setAttribute('class', 'decrease-item');
        btn1.innerText = '-';
        var span = document.createElement('span');
        span.innerText = item.quantity;
        
        var btn2 = document.createElement('button');
        btn2.setAttribute('class', 'increase-item');
        btn2.innerText = ' + ';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
    })

    document.querySelectorAll('.increase-item').forEach(item => { item.addEventListener('click',incrementItem);
})
    document.querySelectorAll('.decrease-item').forEach(item => { item.addEventListener('click',decrementItem);
})
}

var currentPrice = 0;

function incrementItem(){
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log(itemToInc);

    var incObj = cartData.find(element => element.name == itemToInc);
    incObj.quantity += 1;

    currentPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) / (incObj.quantity - 1);

    incObj.price = currentPrice * incObj.quantity;

    totalAmount();
    cartItems();
}
var flag = false;

function decrementItem(){

    let itemToDec = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(element => element.name == itemToDec);
    let ind = cartData.indexOf(decObj);

    if(decObj.quantity > 1){
        currentPrice = (decObj.price * decObj.quantity - decObj.price * (decObj.quantity -1)) / (decObj.quantity);
        decObj.quantity -= 1;
        decObj.price = currentPrice * decObj.quantity;
    }
    else {
        document.getElementById(decObj.id).classList.remove('toggle-heart');
        cartData.splice(ind,1);
        document.getElementById('cartBox').innerText = ' ' + cartData.length + 'Items ';
        //document.getElementById('m-cart-plus').innerHTML = ' ' + cartData.length;

        if(cartData.length < 1 && flag){
            document.getElementById('foodItems').classList.toggle('foodItems');
            document.getElementById('categoryList').classList.toggle('foodItems');
          //document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
            document.getElementById('cartPage').classList.toggle('cartToggle');
          //document.getElementById('categoryHeader').classList.toggle('categoryToggle');
            document.getElementById('checkout').classList.toggle('cartToggle');
            flag = false;
            alert('You do not have any items in the cart at the moment.');
            console.log(flag);
        }
    }
    totalAmount();
    cartItems();
}

function totalAmount(){

    var sum = 0;
    cartData.map(item => {
        sum += item.price;
    })

    document.getElementById('totalItem').innerText = 'Total number of items: ' + cartData.length;
    document.getElementById('totalPrice').innerText = 'Total price: ' + sum + ' € ';
}

document.getElementById('cartBox').addEventListener('click', cartToggle);
//document.getElementById('m-cart-plus').addEventListener('click', cartToggle);

var flag = false;
function cartToggle(){
    if (cartData.length > 0){  
        document.getElementById('foodItems').classList.toggle('foodItems');
        document.getElementById('categoryList').classList.toggle('foodItems');
        //document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
          document.getElementById('cartPage').classList.toggle('cartToggle');
        //document.getElementById('categoryHeader').classList.toggle('categoryToggle');
          document.getElementById('checkout').classList.toggle('cartToggle');  
          flag = true;
          console.log(flag); 
    }
    else {
        alert('You do not have any items in the cart at the moment.');
    }
}

document.getElementById('addAddress').addEventListener('click',addAddress);

function addAddress(){
    var address = prompt('Enter your Address');
    if(address){
        document.getElementById('addAddress').innerText = ' ' + address;
    }
    else{
        document.getElementById('addAddress').innerText = 'Your Address';
        alert('Address has not been added. Please add your address.');
    }
    
}