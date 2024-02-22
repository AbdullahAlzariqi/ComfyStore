import { createSlice } from '@reduxjs/toolkit';
import { FaArrowUpFromGroundWater } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultState,
    reducers: {
        addItem: (state, action) => {
            console.log('action payload is ', action.payload)
            const { product } = action.payload;
            const item = state.cartItems.find((i) => i.cartID === product.cartID);
            if (item) {
                item.amount += product.amount;
            } else {
                state.cartItems.push(product)
            }

            state.numItemsInCart += product.amount;
            state.cartTotal += product.price * product.amount;
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;

            localStorage.setItem("cart", JSON.stringify(state));
            toast.success('item added to cart')

        },
        clearCart: (state) => {
            console.log('action payload is ', action.payload)
        },
        editItem: (state, action) => {
            console.log('action payload is ', action.payload)
        },
        removeItem: (state, action) => {
            console.log('action payload is ', action.payload)
        },

    }
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;