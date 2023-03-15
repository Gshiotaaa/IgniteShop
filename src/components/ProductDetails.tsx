import { ShoppingBagContext } from "@/context/ShoppingBagContext";
import { ProductInfos } from "@/styles/pages/app";
import Image from "next/image";
import { useContext } from "react";

export function ProductDetails() {
  const { newProduct } = useContext(ShoppingBagContext);

  return (
    <>
      {newProduct.map((product) => {
        return (
          <ProductInfos>
            <Image src={product.imageUrl} alt="" width={94.79} height={94.79} />
            <section>
              <span>{product.name}</span>
              <span>{product.price}</span>
              <button>Remover</button>
            </section>
          </ProductInfos>
        );
      })}
    </>
  );
}
