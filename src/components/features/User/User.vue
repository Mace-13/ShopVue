<template>
  <div class="d-flex flex-row">
    <transition name="left" appear>
      <shop :products="products" class="w-75"></shop>
    </transition>
   <transition name="right" appear>
     <cart class="w-25"></cart>
   </transition>

  </div>
</template>

<script>
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import { mapState } from 'vuex';

export default {
  components: {
    Shop,
    Cart
  },
  computed: {
    ...mapState('product', {
      products: 'datas'
    })
  },
  created() {
    this.$store.dispatch('product/fetchDatas')
  }
}
</script>

<style scoped>
  @keyframes fromleft{
    from {
      transform: translateX(-100px);
    }
    to {}
  }

  @keyframes fromright {
    from {
      transform: translateX(100px)
    }
    to {
    }
  }
  .left-enter-active {
    animation: fromleft 1s;
  }
  .right-enter-active {
    animation: fromright 1s;
  }
</style>