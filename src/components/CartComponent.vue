<template>
  <div class="bg-light my-4 p-4">
    <!-- my-4 是上下margin是4的意思 p=4是padding=4-->
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <table v-else class="table align-middle">
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <td width="100">
            <a href="#" class="text-dark delete" @click.prevent="removeCartItem(item.id)">x</a>
          </td>
          <td width="100">
            <img :src="item.product.imageUrl" class="table-image" alt="" />
          </td>
          <td>{{ item.product.title }}</td>
          <td>
            <select
              name=""
              id=""
              class="form-select"
              :value="item.qty"
              @change="(event) => setCartQty(item.id, event)"
            >
              <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
            </select>
          </td>
          <!-- text-end是文字靠右 -->
          <td class="text-end">$ {{ item.subtotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額 NT$ {{ cartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
import cartStore from '../stores/cartStore.js'
// const { mapState, mapGetters, mapActions } = Pinia;
import { mapState, mapActions } from 'pinia'
export default {
  computed: {
    ...mapState(cartStore, ['cartList'])
    // ...mapGetters(cartStore, ['cartList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeCartItem', 'setCartQty'])
  }
}
</script>
