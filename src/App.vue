<script>
import NavbarComponent from './components/NavbarComponent.vue'
import CartComponent from './components/CartComponent.vue'
import ProductsComponent from './components/ProductsComponent.vue'
export default {
  components: {
    NavbarComponent,
    CartComponent,
    ProductsComponent
  }
}
</script>

<template>
  <div class="container">
    <NavbarComponent></NavbarComponent>
    <CartComponent></CartComponent>
    <ProductsComponent></ProductsComponent>
  </div>
</template>

<style lang="scss">
@import './assets/all.scss';
// $primary: orange;
// div {
//   color: $primary;
// }
.table-image {
  height: 100px;
  width: 100px;
  object-fit: cover;
}
.delete {
  text-decoration: none;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
