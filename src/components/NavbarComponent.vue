<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">香香餅乾店</span>
      <button type="button" class="btn">
        購物車
        <span class="badge rounded-pill bg-warning text-dark">{{ totalQuantity }}</span>
      </button>
    </div>
  </nav>
</template>
<script>
// const { mapState } = Pinia
import { mapState } from 'pinia'
import cartStore from '../stores/cartStore.js'
export default {
  computed: {
    ...mapState(cartStore, ['cart']),
    totalQuantity() {
      return this.cart.reduce((total, item) => total + item.qty, 0)
    }
  }
}
</script>
