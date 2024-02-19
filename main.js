let home = document.querySelector('.homeicon')
let foodscon = document.querySelector('.foods')

let carticon = document.querySelector('.carticon')

let qt = document.querySelector('.qt')
let carts = document.querySelector('.carts')

let foods = [
  {
    name: "Shushi",
    img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHwwfDB8fHww",
    amount: 105,
    id: 1


  },
  {
    name: "Salad",
    img: "https://images.unsplash.com/photo-1524859880053-f595797051c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxmb29kfGVufDB8MHwwfHx8MA%3D%3D",
    amount: 60,
    id: 2


  },
  {
    name: "French Fries",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/134c5b0d7c768968aa66fab996c432d5",
    amount: 90,
    id: 3


  },

  {
    name: "Samosa (8)",
    img: "https://b.zmtcdn.com/data/dish_photos/dd1/d1530995515582a41f016bcb1096fdd1.jpg",
    amount: 100,
    id: 4

  },
  {
    name: "McDonald's Combo",
    img: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxmb29kfGVufDB8MHwwfHx8MA%3D%3D",
    amount: 180,
    id: 5

  },
  {
    name: "Pizza",
    img: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxmb29kfGVufDB8MHwwfHx8MA%3D%3D",
    amount: 200,
    id: 6

  },
  {
    name: "Pasta",
    img: "https://b.zmtcdn.com/data/pictures/chains/8/97578/f7068dd0487c79b207dc163ce21cbe39_o2_featured_v2.jpg",
    amount: 250,
    id: 7

  },
  {
    name: "Veg Noodles",
    img: "https://b.zmtcdn.com/data/dish_photos/e54/838d8602ebfe53a1235c5ccbb2f01e54.jpg",
    amount: 120,
    id: 8

  },
  {
    name: "Biriyani",
    img: "https://b.zmtcdn.com/data/dish_photos/7b6/ebcf4d4c827fcf075ace22a6e68ea7b6.jpg",
    amount: 250,
    id: 9

  },
  {
    name: "Paratha",
    img: "https://b.zmtcdn.com/data/dish_photos/6bd/9d0373e26b2353eec02599f548fc36bd.jpg",
    amount: 150,
    id: 10

  },
  {
    name: "Manchuria",
    img: "https://b.zmtcdn.com/data/dish_photos/7b7/b105379ea035fc1b18354c823718e7b7.jpg",
    amount: 120,
    id: 11

  },
  {
    name: "Dosa",
    img: "https://b.zmtcdn.com/data/dish_photos/2d3/0a89a1d6084193f592c5eaa7f3d012d3.jpg",
    amount: 90,
    id: 12

  },
  {
    name: "Idly",
    img: "https://b.zmtcdn.com/data/dish_photos/7f0/1a14dba5c01fe3708dbc2642fa7df7f0.png",
    amount: 90,
    id: 13

  },
  
  {
    name: "Sandwich",
    img: "https://b.zmtcdn.com/data/dish_photos/c65/d7092089105ca04f44fe00dbd565ac65.jpg",
    amount: 130,
    id: 14

  },
  {
    name: "Paneer Tikka",
    img: "https://b.zmtcdn.com/data/dish_photos/5ad/92f233e1aa99869ebbf1e962f7e875ad.jpeg",
    amount: 150,
    id: 15

  },
  {
    name: "Allo Paratha",
    img: "https://b.zmtcdn.com/data/dish_photos/c3d/9978f161ebcb8e19026f68d1ede42c3d.jpg?output-format=webp",
    amount: 170,
    id: 15

  },
];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}


function showFoods(data) {
shuffleArray(foods)
  let hs = ``;
  for (i = 0; i < data.length; i++) {
    hs = hs + `
          


            <div class="col-xs-12 col-sm-6 col-md-3 mb-5 product" data-id="${i}">

        <div class="card">


          <img
            src="${data[i].img}"
            class="card-img" alt="${data[i].name}">
          <div class="card-img-overlay">
            <span class="card-text text-light bg-black p-1 w-50">${data[i].name}</span>
            <span class="card-text text-light bg-black p-1 float-end end-0">₹ ${data[i].amount}</span>
          <span class="card-text position-absolute bottom-0 end-0 fs-6 text-black rounded-3 p-1 m-1"><button   onclick="addToCart(${i})"" class="btn btn-warning" type="button"> Add to  
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></button>
     
          </span>

          </div>

        </div>
    
      </div>
            
          `;
  }
  document.querySelector(".fooditems").innerHTML = hs;

}


showFoods(foods);
let frm =document.querySelector('.frm')
home.addEventListener('click', () => {
  carts.classList.add('active');
  foodscon.classList.remove('active');
  frm.classList.remove('default');

})

carticon.addEventListener('click', () => {
  foodscon.classList.add('active');
  carts.classList.remove('active');
  carts.classList.remove('default');
  frm.classList.add('default');

  
  updateCartUI(cart)
})




function searchMovie() {

  let movieName = document.getElementById('search').value;
  if (movieName !== "") {
      if(movieName.length==1){
          let result = foods.filter(function (foods) {
         
               return foods.name.toUpperCase()[0]==(movieName.toUpperCase())[0];
              
           });
           showFoods(result);
      }
      else {
          let result = foods.filter(function (foods) {
         if(foods.name.toUpperCase()[0]==(movieName.toUpperCase())[0] ){
          return foods.name.toUpperCase().includes(movieName.toUpperCase());
              
         }
               
           });
           showFoods(result);

      }
     
    
  }
 
  else{
    showFoods(foods);
  }


}


let cart = [];



function addToCart(productId) {

  const product = document.querySelector(`.product[data-id="${productId}"]`);
  const productName = foods[productId].name;
  const productPrice = foods[productId].amount;
  const productImg = foods[productId].img;

  // Check if the product is already in the cart
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {




    cart.push({ id: productId, name: productName, amount: productPrice, quantity: 1, img: productImg });
  }
  qt.innerHTML = cart.length
  // Update the UI
  updateCartUI(cart);
}




function count(id, productId) {

   if(cart[productId].quantity == 0){
         delete cart(productId);

        // delete fruits(2);

    
    
    }
    else{


      cart[productId].quantity = cart[productId].quantity + id

    }
    updateCartUI(cart)



}


function updateCartUI(data) {

  let hs = ``;
  for (i = 0; i < data.length; i++) {
    hs = hs + `
            
  
  
              <div class="col-xs-12 col-sm-6 col-md-3 mb-5 product" data-id="${i}">
  
          <div class="card">
  
  
            <img
              src="${data[i].img}"
              class="card-img" alt="${data[i].name}">
            <div class="card-img-overlay">
              <span class="card-text text-warning bg-black p-1 w-50">${data[i].name}</span>
              <span class="card-text text-light bg-black p-1 float-end end-0">₹ ${data[i].amount} X ${data[i].quantity}</span>
              
              <span class="card-text  position-absolute bottom-0 end-0 fs-6 text-black rounded-3 p-1 m-1">  <button   onclick="removeCart(${i})"" class="btn btn-primary " type="button"> Remove
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
            </svg>
       
              </button>
     
          </span>



          <span class="card-text position-absolute bottom-0 start-0 fs-4 fw-bolder text-black rounded-3 m-1 p-1">   <button   onclick="count(-1,${i})"" class="btn btn-danger " type="button">-</button>
          <button   onclick="count(+1,${i})"" class="btn btn-success " type="button">+</button>
       </span>
  
            </div>
  
          </div>
      
        </div>
              
            `;
  }
  document.querySelector('#cart-items').innerHTML = hs + `<p id="cart-total" class="fs-3 text-center mx-auto text-light"></p>
  `;



  const cartTotalElement = document.querySelector('.total');


  const cartTotal = cart.reduce((total, item) => total + item.amount * item.quantity, 0);
  cartTotalElement.textContent = "Total = ₹ " + cartTotal.toFixed(2);


}
