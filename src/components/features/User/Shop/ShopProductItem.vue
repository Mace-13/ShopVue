<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div class="d-flex flew-row justify-content-center">
      <img style="height:150px" :src="product.img" >
    </div>
    <div>
      <h3>{{product.title}}</h3>
    </div>
    <hr>
    <div>
      <p>{{product.description}}</p>
    </div>
    <div>
      <span>{{product.price | price}}</span>
      <button @click="addProductToCart" class="btn btn-primary btn-sm ms-5">Buy</button>
    </div>
  </div>
</template>

<script>
import {eventBus} from "@/main";

export default {
  props: ['product'],
  methods:{
    addProductToCart(){
      eventBus.addProductToCart({...this.product}) //déconstruction de l'objet
    }
  }
}
</script>

<style>
.product-container{
  height: 400px;
}
p{
  font-size: 12px;
}
</style>