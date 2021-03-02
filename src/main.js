import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data: {
    products: [
      {
        id: '1',
        img: 'https://img.bfmtv.com/c/0/708/571/29bf9a4c4d8c73b3b354db00f461a.jpg',
        title: 'Macbook',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus porttitor bibendum. Donec facilisis eget odio at rhoncus. Suspendisse eu.',
        price: 1500
      },
      {
        id: '2',
        img: 'https://dyw7ncnq1en5l.cloudfront.net/optim/produits/450/50705/huawei-matebook-d-15_61fb7fa9c6ad9e74__908_512__overflow.jpg',
        title: 'Huawei',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus porttitor bibendum. Donec facilisis eget odio at rhoncus. Suspendisse eu.',
        price: 800
      },
      {
        id: '3',
        img: 'https://media.ldlc.com/r1600/ld/products/00/05/40/69/LD0005406931_2_0005567216_0005669970.jpg',
        title: 'Msi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus porttitor bibendum. Donec facilisis eget odio at rhoncus. Suspendisse eu.',
        price: 1470
      },
      {
        id: '4',
        img: 'https://pic.clubic.com/v1/images/1835955/raw?fit=smartCrop&width=550&height=450&hash=0e4ee8eafa0635b0ee3ebf3f251d06bc14ab9800',
        title: 'Predator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus porttitor bibendum. Donec facilisis eget odio at rhoncus. Suspendisse eu.',
        price: 1900
      },
      {
        id: '5',
        img: 'https://www.img-selexion.be/images/photolib/412793.jpg',
        title: 'Asus',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus porttitor bibendum. Donec facilisis eget odio at rhoncus. Suspendisse eu.',
        price: 679
      },
      {
        id: '6',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwA6MCm6sfKKLMmNUqYwEhxYNJpmOo8jZZqw&usqp=CAU',
        title: 'Lenovo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus porttitor bibendum. Donec facilisis eget odio at rhoncus. Suspendisse eu.',
        price: 841
      },
      {
        id: '7',
        img: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/a/0/3/a034dea45a_50168722_asus-zephyrus-g14-ga401ih-007t-fd.jpg',
        title: 'Asus',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus porttitor bibendum. Donec facilisis eget odio at rhoncus. Suspendisse eu.',
        price: 1900
      },
      {
        id: '8',
        img: 'https://img.bfmtv.com/c/0/708/571/29bf9a4c4d8c73b3b354db00f461a.jpg',
        title: 'Macbook',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus porttitor bibendum. Donec facilisis eget odio at rhoncus. Suspendisse eu.',
        price: 1500
      }

    ],
    cart: [

    ]
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
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
