<template>
  <div id="app">
    <div class="cart-container">
      <div class="cart-header">
        <h3>Shopping Cart</h3>
        <div class="icon">
        <i class="ri-shopping-cart-2-line"></i>
        <p>{{cartCounter}}</p>
        </div>
      </div>
      <div>
        <div class="cart-items">
          <div class="product-cart">
          <img class="product-img" src="./assets/img/product.png" alt="" />
          <p class="product-name">Dior Lipstick</p>
          <p class="price">$23</p>
          <button @click="increase" class="add-cart">Add to cart</button>
          </div>

          <div class="product-cart" >
          <img class="product-img" src="./assets/img/product.png" alt="" />
          <p class="product-name">Dior Lipstick</p>
          <p class="price">$23</p>
          <button @click="increase" class="add-cart">Add to cart</button>
          </div>
        </div>
      </div>
      <div class="checkout">
        <p>Checkout</p>
        <p>{{totalPrice}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
    }
  },
  computed:{
    cartCounter(){
      return this.$store.state.numberOfProducts
    },
    totalPrice(){
      return this.cartCounter * 23
    }
  },
  methods:{
    increase(){
      this.$store.commit(`increaseNumberOfProducts`)
    }
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  height: 100vh;
  display: flex;
}
.cart-container {
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 25px 40px #f3f3;
  height: 80%;
  width: 60%;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  align-content: center;
}

.cart-items{
margin-left: 20px;
}
.product-img {
  width: 15%;
}

.button{
  cursor: pointer;
}

.icon{
  display: flex;
  align-items: center;
}
.product-cart{
  margin-top: 30px;
}

.ri-shopping-cart-2-line{
  margin-right: 10px;
}

.checkout{
  display: flex;
  justify-content: space-evenly;
}
</style>
