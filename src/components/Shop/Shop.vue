<template>
 <shop-products-list :products="products" class="p-3"></shop-products-list>
</template>

<script>
import ShopProductsList from "@/components/Shop/ShopProductsList";
import {eventBus} from "@/main";
//import ShopProductItem from "@/components/Shop/ShopProductItem";
export default {
 components: {
   ShopProductsList
   //ShopProductItem
 },
  data(){
   return{
     products: []
   }
  },
  created(){
   this.products = eventBus.products;
   eventBus.$on('update:products',(products)=>{
     this.products = products;
   })
  }
}
</script>

<style>

</style>