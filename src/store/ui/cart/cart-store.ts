import { CartProduct, Size } from "@interface/product.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStore {
  cart: CartProduct[];

  //* Metodos_____
  getTotalItems: () => number;
  getSummaryInformation: () => {
    tax: number;
    total: number;
    subTotal: number;
    itemsInCart: number;
  };

  addProductToCart: (product: CartProduct) => void;
  updateQuantityProduct: (product: CartProduct, quantity: number) => void;
  removeProduct: (product: CartProduct) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((prev, curr) => prev + curr.quantity, 0);
      },

      getSummaryInformation: () => {
        const { cart } = get();
        const subTotal = cart.reduce(
          (subTotal, product) => product.quantity * product.price + subTotal,
          0
        );
        const tax = subTotal * 0.15;
        const total = subTotal;
        const itemsInCart = cart.reduce(
          (prev, curr) => prev + curr.quantity,
          0
        );

        return { tax, total, subTotal, itemsInCart };
      },

      addProductToCart: (product: CartProduct) => {
        const { cart } = get();
        //? 1. Revisar si el producto existe en ele carrito con la talla seleccionada.
        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        //? 2. Si el producto existe por la talla... tengo que incrementar la cantidad ( 'quantity' ).

        const updateCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: product.quantity + item.quantity };
          }
          return item;
        });

        set({ cart: updateCartProducts });
      },

      updateQuantityProduct: (product: CartProduct, quantity: number) => {
        const { cart } = get();

        const updatedCartProduct = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...product, quantity };
          }

          return item;
        });

        set({ cart: updatedCartProduct });
      },

      removeProduct: (product: CartProduct) => {
        const { cart } = get();

        const removedProduct = cart.filter(
          (item) => item.id !== product.id || item.size !== product.size
        );

        set({ cart: removedProduct });
      },
    }),
    {
      name: "shopping-cart",
    }
  )
);
