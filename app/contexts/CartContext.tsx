"use client";
import { createContext, useContext, ReactNode } from "react";
import { useState } from "react";
import { cuponSuccessType, orderSummaryType } from "../type/orderSummayType";

type CartItemProps = {
  id: number;
  quantity: number;
  title: string;
  price: number;
  size: number;
  color: number;
  discountedPrice?: number;
  images: string[];
  rating?: {
    rate: number;
    count: number;
  };
  description?: string;
};

interface CartContextType {
  CartItems: CartItemProps[];
  addItem: (item: CartItemProps) => void;
  removeItem: (index: number) => void;
  isExistingItem: (id: number, size: number, color: number) => boolean;
  getIndex: (id: number, size: number, color: number) => number;
  getTotalItems: () => number;
  getItemByIdSizeColor: (
    id: number,
    size: number,
    color: number,
  ) => CartItemProps | undefined;
  updateItemQuantity: (index: number, quantity: number) => void;
  getItemById: (id: number) => CartItemProps | undefined;
  updateItemById: (
    id: number,
    newSize: number,
    newColor: number,
    newQuantity: number,
  ) => void;
  orderSummaryData: orderSummaryType | null;
  clearCart: () => void;
  setOrderSummary: (
    subtotal: number,
    discount: number,
    deliveryFee: number,
    totalPrice: number,
  ) => void;
  cuponData?: cuponSuccessType | null;
  setCuponData: (
    cuponCode: string,
    cuponDiscount: number,
    cuponSuccessMessage: string,
  ) => void;
  clearCuponData?: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [CartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [orderSummaryData, setOrderSummaryData] =
    useState<orderSummaryType | null>(null);
  const [cuponSuccessData, setCuponSuccessData] =
    useState<cuponSuccessType | null>(null);

  const getIndex = (id: number, size: number, color: number) => {
    return CartItems.findIndex(
      (cartItem) =>
        cartItem.id === id &&
        cartItem.size === size &&
        cartItem.color === color,
    );
  };

  const getTotalItems = () => {
    return CartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getItemByIdSizeColor = (id: number, size: number, color: number) => {
    return CartItems.find(
      (cartItem) =>
        cartItem.id === id &&
        cartItem.size === size &&
        cartItem.color === color,
    );
  };

  const getItemById = (id: number) => {
    return CartItems.findLast((cartItem) => cartItem.id === id);
  };

  const isExistingItem = (id: number, size: number, color: number) => {
    return CartItems.some(
      (cartItem) =>
        cartItem.id === id &&
        cartItem.size === size &&
        cartItem.color === color,
    );
  };

  const addItem = (item: CartItemProps) => {
    setCartItems((prev) => {
      const existing = isExistingItem(item.id, item.size, item.color);
      if (existing) {
        return [...prev];
      } else {
        return [...prev, item];
      }
    });
  };

  const removeItem = (index: number) => {
    setCartItems((prev) => prev.filter((item) => prev.indexOf(item) !== index));
  };

  const updateItemQuantity = (index: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity } : item)),
    );
  };

  const updateItemById = (
    id: number,
    newSize: number,
    newColor: number,
    newQuantity: number,
  ) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, size: newSize, color: newColor, quantity: newQuantity }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const setOrderSummary = (
    subtotal: number,
    discount: number,
    deliveryFee: number,
    totalPrice: number,
  ) => {
    setOrderSummaryData((prev) => ({
      subtotal: subtotal !== undefined ? subtotal : prev?.subtotal || 0,
      discount: discount !== undefined ? discount : prev?.discount || 0,
      deliveryFee:
        deliveryFee !== undefined ? deliveryFee : prev?.deliveryFee || 0,
      totalPrice: totalPrice !== undefined ? totalPrice : prev?.totalPrice || 0,
    }));
  };

  const setCuponData = (
    cuponCode: string,
    cuponDiscount: number,
    cuponSuccessMessage: string,
  ) => {
    setCuponSuccessData((prev) => ({
      cuponCode: prev?.cuponCode || cuponCode,
      cuponDiscount: prev?.cuponDiscount || cuponDiscount,
      cuponSuccessMessage: prev?.cuponSuccessMessage || cuponSuccessMessage,
    }));
  };

  const clearCuponData = () => {
    setCuponSuccessData(null);
  };

  return (
    <CartContext.Provider
      value={{
        CartItems,
        getIndex,
        addItem,
        removeItem,
        isExistingItem,
        getTotalItems,
        getItemByIdSizeColor,
        updateItemQuantity,
        getItemById,
        updateItemById,
        clearCart,
        setOrderSummary,
        orderSummaryData: orderSummaryData,
        cuponData: cuponSuccessData,
        setCuponData,
        clearCuponData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart must be used within CartContextProvider");
  return context;
};
