import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "classes/Product";
import { type } from "os";

interface CartItem {
  product: Product;
  amount: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

// Shopping Cart Store
const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    /**
     * Add a product to the shopping cart
     * - If the product is already in the cart, increase the amount
     * - If the product is not in the cart, add it
     * @param {
     * product: Product - The product to add
     * amount: number - The amount of the product to add
     * }
     */
    cartAdd: (state, action: PayloadAction<CartItem>) => {
      const cart: CartItem[] = state.items;
      const { product, amount } = action.payload;
      const index: number = cart.findIndex(
        (item) => item.product.productID === product.productID
      );

      // Add the product to the cart or increase the amount
      index === -1
        ? cart.push({ product, amount })
        : (cart[index].amount += amount || 1);

      // Update the state
      state.items = cart;
      console.debug("New Cart State:", cart);
    },

    /**
     * remove one item from cart by productID
     * - decrement quantity
     * - remove product from cart if quantity is 0
     * @param {
     * product: Product - The product to remove
     * amount: number - The amount of the product to remove
     * }
     */
    cartRemove: (state, action: PayloadAction<CartItem>) => {
      const cart: CartItem[] = state.items;
      const product: Product = action.payload.product;
      const amount: number = action.payload.amount;
      const index: number = cart.findIndex(
        (item) => item.product.productID === product.productID
      );

      // if product is in cart, decrement quantity and remove if quantity is 0
      if (index !== -1) cart[index].amount -= amount || 1;
      if (cart[index].amount === 0) cart.splice(index, amount || 1);

      // update state
      state.items = cart;
    },
  },
});

export const { cartAdd, cartRemove } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
export type { CartItem };
