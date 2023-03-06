import ProductsContext from '../context/ProductProvider';
import { UseProductsContextType } from '../context/ProductProvider';
import { useContext } from 'react';

const useProducts = (): UseProductsContextType => {
  return useContext(ProductsContext);
};

export default useProducts;
