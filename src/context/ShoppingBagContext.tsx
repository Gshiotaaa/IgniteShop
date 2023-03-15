import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ShoppingBagProviderProps {
  children: ReactNode;
}

interface ShoppingBagContext {
  newProduct: NewProduct[];
  setNewProduct: Dispatch<SetStateAction<NewProduct[]>>;
  handleAddNewProductInBag: (product: NewProduct) => void;
}

interface NewProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

export const ShoppingBagContext = createContext({} as ShoppingBagContext);

export function ShoppingBagProvider({ children }: ShoppingBagProviderProps) {
  const [newProduct, setNewProduct] = useState<NewProduct[]>([]);

  function handleAddNewProductInBag(product1: NewProduct) {
    setNewProduct((prevState) => [...prevState, product1]);
  }

  return (
    <ShoppingBagContext.Provider
      value={{ newProduct, setNewProduct, handleAddNewProductInBag }}
    >
      {children}
    </ShoppingBagContext.Provider>
  );
}
