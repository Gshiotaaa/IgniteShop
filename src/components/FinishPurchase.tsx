import { ShoppingBagContext } from "@/context/ShoppingBagContext";
import { CompleteInfos, CompletePurchase } from "@/styles/pages/app";
import { useContext } from "react";

export function FinishPurchase() {
  const { newProduct } = useContext(ShoppingBagContext);

  const totalValueOfPurchase = newProduct
    .map((product) => product.price)
    .reduce((acc, value) => {
      return acc + parseFloat(value.slice(3, value.length - 1));
    }, 0);

  return (
    <CompletePurchase>
      <CompleteInfos>
        <span>Quantidade</span>
        <span>
          {newProduct.length > 1
            ? `${newProduct.length} itens`
            : `${newProduct.length} item`}
        </span>
      </CompleteInfos>
      <CompleteInfos>
        <span>Valor total</span>
        <span>
          {totalValueOfPurchase.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </CompleteInfos>
      <button>Finalizar Compra</button>
    </CompletePurchase>
  );
}
