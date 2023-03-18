import { ShoppingBagContext } from "@/context/ShoppingBagContext";
import { ProductInfos } from "@/styles/pages/app";
import Image from "next/image";
import { useContext } from "react";

export function ProductDetails() {
  const { newProduct, handleRemoveProductOfBag } =
    useContext(ShoppingBagContext);

  return (
    <>
      {newProduct.map((product) => {
        return (
          <ProductInfos>
            <Image src={product.imageUrl} alt="" width={94.79} height={94.79} />
            <section>
              <span>{product.name}</span>
              <span>{product.price}</span>
              <button onClick={() => handleRemoveProductOfBag(product.id)}>
                Remover
              </button>
            </section>
          </ProductInfos>
        );
      })}
    </>
  );
}
