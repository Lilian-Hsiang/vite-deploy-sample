// const { defineStore } = Pinia;
import { defineStore } from 'pinia'
import productsStore from './productsStore.js'
export default defineStore('cartStore', {
  // methods
  // actions
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart(productId, qty = 1) {
      // 產品id, 數量(預設先設1)
      // 取得已經有加入購物車的項目
      // 進行判斷，如果購物車有該項目則+1，如果沒有則是新增一個購物車項目
      const currentCart = this.cart.find((item) => item.productId === productId)
      // 如果購物車目前儲存的productId和傳入的productId相同，那這購物車就會有項目
      console.log('currentCart', currentCart)
      console.log(productId, qty)
      if (currentCart) {
        currentCart.qty += qty // 如果有相同的產品，就將數量加1
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty
        })
      }
      console.log('this.cart', this.cart)
    },
    removeCartItem(id) {
      const index = this.cart.findIndex((item) => item.id === id)
      this.cart.splice(index, 1) // 刪除一筆資料
    },
    setCartQty(id, event) {
      console.log('event', event.target.value, typeof event.target.value)
      console.log(id, event)
      const currentCart = this.cart.find((item) => item.id === id) // 當購物車項目跟傳入的id是一致的時候就取出來
      console.log('currentCart', currentCart)
      currentCart.qty = event.target.value * 1 // *1是將字串轉成數字(也可以用parseInt)
    }
  },
  getters: {
    cartList: ({ cart }) => {
      //使用解構的方式將state裡的cart取出
      // 1. 購物車的品項資訊，需要整合產品資訊
      // 2. 必須計算小計的金額
      // 3. 必須提供總金額
      const { products } = productsStore()
      // console.log('products', products);
      // console.log('cart', cart);
      const carts = cart.map((item) => {
        // cart是當前購物車的資訊
        console.log('item', item)
        // 單一產品取出
        const product = products.find((product) => product.id === item.productId)
        console.log('相同id的產品:', product)
        return {
          ...item, // 當前購物車資訊
          product, // 取出的單一產品資訊
          subtotal: product.price * item.qty // 計算小計的金額
        }
      })
      // 總金額計算
      const total = carts.reduce((a, b) => a + b.subtotal, 0) // reduce會有兩個參數，一個是前一個值，一個是當前值 (0是傳入最後總計的值) // a是前一個值  b.subtotal是當前小計的結果
      console.log('carts', carts)
      return {
        carts, //列表
        total //總金額
      }
    }
  }
})
