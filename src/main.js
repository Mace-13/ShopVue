import Vue from 'vue'
import App from './App.vue'
import * as Filters from './utils/filters'
import router from './router'
import axios from "axios";

Vue.config.productionTip = false
Vue.prototype.$http = axios

Object.keys(Filters).forEach( (f) =>{
  Vue.filter(f, Filters[f]);
})

export const eventBus = new Vue({
  data: {
    products: [],
    cart: [

    ],
    page: 'User'
  },
  methods: {
    addProductToCart(product) {
      if(!this.cart.map(i => i.id).includes(product.id)){
        this.cart = [...this.cart,product]
        this.$emit('update:cart', this.cart.slice())
      }

    },
    removeItemFromCart(item) {
      this.cart = this.cart.slice().filter(i => i.id !== item.id)
      this.$emit('update:cart', this.cart.slice())
    },
    changePage(page){
      this.page = page;
      this.$emit('update:page', this.page)
    },
    addProduct(product){
      this.products = [...this.products, {...product, id: this.products.length + 1 + ''}]
      this.$emit('update:products', this.products)
    }
  },
  created() {

  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
