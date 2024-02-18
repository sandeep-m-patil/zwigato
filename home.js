let qt=document.querySelector('.qt')

let foods = [
  {
    name: "Shushi",
    img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHwwfDB8fHww",
    amount: 6.7,
    percentage: 45
   

  },
  {
    name: "Salad",
    img: "https://images.unsplash.com/photo-1524859880053-f595797051c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxmb29kfGVufDB8MHwwfHx8MA%3D%3D",
    amount: 4.2,
    percentage: 50
    

  },
  {
    name: "Fries",
    img: "https://plus.unsplash.com/premium_photo-1679434184867-a294eb85400c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D",
    amount: 11.25,
    percentage: 30
    

  },

  {
    name: "Magiee",
    img: "https://images.unsplash.com/photo-1546453570-d2fcacdafbb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxmb29kfGVufDB8MHwwfHx8MA%3D%3D",
    amount: 3.75,
    percentage: 24

  },
  {
    name: "Combo",
    img: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxmb29kfGVufDB8MHwwfHx8MA%3D%3D",
    amount: 12.17,
    percentage: 42

  },
  {
    name: "Pizza",
    img: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxmb29kfGVufDB8MHwwfHx8MA%3D%3D",
    amount: 23.3,
    percentage: 24

  },
  {
    name: "Stawberry mix",
    img: "https://images.unsplash.com/photo-1606165194862-535b4a4bbaf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU5fHxmb29kfGVufDB8MHwwfHx8MA%3D%3D",
    amount: 4.26,
    percentage: 40

  },
  {
    name: "Burger",
    img: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHwwfDB8fHww",
    amount: 1.26,
    percentage: 40

  },


];


function showFoods(data) {

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
            <span class="card-text text-light bg-black p-1 float-end end-0">$${data[i].amount}</span>
          <span class="card-text  p-1 position-absolute bottom-0 end-0 fs-5 text-black rounded-3 p-2 m-1">   <button   onclick="addToCart(${i})"" class="btn btn-primary " type="button"> Add to  
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg></button>
     
          </span>

          </div>

        </div>
    
      </div>
            
          `;
  }
  document.getElementById("con").innerHTML = hs;

}

showFoods(foods);

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

              


                cart.push({ id: productId, name: productName, amount: productPrice, quantity: 1  ,img: productImg});
            }
            qt.innerHTML=cart.length
            // Update the UI
        updateCartUI(cart);
        }


  
  
        function count(id,productId) {
 
            
          cart[productId].quantity=cart[productId].quantity+id
         
          updateCartUI(cart)
      
         
          } 


        function updateCartUI(data){
            
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
              <span class="card-text text-light bg-black p-1 float-end end-0">$${data[i].amount} X ${data[i].quantity}</span>
            
            </div>
  
          </div>
      
        </div>
              
            `;
    }
  document.querySelector('#cart-items').innerHTML=hs+`<p id="cart-total" class="fs-3 mx-auto text-center my-5 text-light"></p>
  `;

    

    const cartTotalElement = document.getElementById('cart-total');

  
    const cartTotal = cart.reduce((total, item) => total + item.amount * item.quantity, 0);
    cartTotalElement.textContent ="Total = $"+ cartTotal.toFixed(2);
 

        }
       
       
        function showCart(){
          let con=document.querySelector('#con');
          let ci = document.querySelector('#cart-items')
          if(con.innerHTML!=ci.innerHTML){
       
            con.innerHTML=ci.innerHTML
          }
         
          }
          function home(){
            showFoods(foods)
          }