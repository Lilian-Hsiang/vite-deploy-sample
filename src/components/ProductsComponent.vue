<template>
  <div class="row row-cols-3 my-4 g-4">
    <div class="col" v-for="product in sortProducts" :key="product.id">
      <div class="card">
        <img :src="product.imageUrl" class="card-img-top" alt="" />
        <div class="card-body">
          <h6 class="card-title">
            {{ product.title }}
            <span class="float-end">$ {{ product.price }}</span>
          </h6>
          <a href="#" class="btn btn-outline-success w-100" @click.prevent="addToCart(product.id)"
            >加入購物車</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productsStore from '../stores/productsStore.js'
import cartStore from '../stores/cartStore.js'
// const { mapState, mapActions } = Pinia; //因為要取得多個資料狀態，所以引入mapState
import { mapState, mapActions } from 'pinia'
export default {
  computed: {
    ...mapState(productsStore, ['sortProducts']) // 前面放store名稱，後面陣列要放productsStore裡面所有getters的名稱(要取得的資料狀態)
  },
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  }
}
</script>
