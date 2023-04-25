import { ReactNode, createContext, useEffect, useState } from "react";

export interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
    if (cartItemsFromLocalStorage) {
      setCartItems(JSON.parse(cartItemsFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  console.log(cartItems);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
