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
  handleRemoveProductOfBag: (id: string) => void;
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
    const productAlreadyInBag = newProduct.find(
      (product) => product.id === product1.id
    );
    if (productAlreadyInBag) {
      setNewProduct((prevState) => [...prevState]);
      return;
    }
    setNewProduct((prevState) => [...prevState, product1]);
  }

  function handleRemoveProductOfBag(id: string) {
    const productsNotRemoved = newProduct.filter((product) => product.id != id);

    setNewProduct(productsNotRemoved);
  }

  return (
    <ShoppingBagContext.Provider
      value={{
        newProduct,
        setNewProduct,
        handleAddNewProductInBag,
        handleRemoveProductOfBag,
      }}
    >
      {children}
    </ShoppingBagContext.Provider>
  );
}
