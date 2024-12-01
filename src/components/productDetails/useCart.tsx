/* eslint-disable react-refresh/only-export-components */
import React, { createContext, ReactNode, useContext, useState } from "react";

type Product = {
  id: number;
  attributes: {
    name: string;
    price: number | string;
    long_desc: string;
    sku: string;
    count: number;
    content: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    category: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    tag: {
      data: [
        {
          attributes: {
            name: string;
          };
        }
      ];
    };
    reviews: {
      data: [
        {
          attributes: {
            rating: number;
            content: string;
          };
        }
      ];
    };
  };
};

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  deleteCart: (id: number) => void;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [count, setCount] = useState(1);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      return [...prevItems, product];
    });
  };

  const deleteCart = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, deleteCart, count, setCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
