import CartContext from '../context/CartProvider';
import { UseCartContextType } from '../context/CartProvider';
import { useContext } from 'react';

const useCart = (): UseCartContextType => {
  return useContext(CartContext);
};

export default useCart;
