import { ShoppingBagContext } from "@/context/ShoppingBagContext";
import { ShoppingBagMenu } from "@/styles/pages/app";
import { Tote } from "@phosphor-icons/react";
import { Dispatch, SetStateAction, useContext } from "react";

interface ShoppingBagMenuButtonProps {
  setOpenShoppingBag: Dispatch<SetStateAction<boolean>>;
}

export function ShoppingBagMenuButton({
  setOpenShoppingBag,
}: ShoppingBagMenuButtonProps) {
  const { newProduct } = useContext(ShoppingBagContext);

  return (
    <ShoppingBagMenu>
      <button onClick={() => setOpenShoppingBag(true)}>
        <Tote size={30} color="white" />
        <span>{newProduct.length > 0 ? newProduct.length : 0}</span>
      </button>
    </ShoppingBagMenu>
  );
}
