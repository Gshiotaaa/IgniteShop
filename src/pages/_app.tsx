import { globalStyles } from "@/styles/global";
import {
  Container,
  Header,
  ProductsContainer,
  ShoppingBag,
  ShoppingBagMenu,
} from "@/styles/pages/app";
import type { AppProps } from "next/app";

import { Tote, X } from "@phosphor-icons/react";

import Image from "next/image";

import logoImg from "./assets/logo.svg";

import { FinishPurchase } from "@/components/FinishPurchase";
import { ProductDetails } from "@/components/ProductDetails";
import {
  ShoppingBagContext,
  ShoppingBagProvider,
} from "@/context/ShoppingBagContext";
import Link from "next/link";
import { useContext, useState } from "react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [openShoppingBag, setOpenShoppingBag] = useState(false);

  const { newProduct } = useContext(ShoppingBagContext);

  console.log(newProduct);

  return (
    <ShoppingBagProvider>
      <Container>
        <Header>
          <Link href={"/"}>
            <Image src={logoImg} alt="" />
          </Link>
          <ShoppingBagMenu>
            <button onClick={() => setOpenShoppingBag(true)}>
              <Tote size={30} color="white" />
              <span>0</span>
            </button>
          </ShoppingBagMenu>
        </Header>
        {openShoppingBag && (
          <ShoppingBag>
            <ProductsContainer>
              <button onClick={() => setOpenShoppingBag(false)}>
                <X size={32} color="#e8e0f0" weight="bold" />
              </button>
              <h1>Sacola de compras</h1>
              <ProductDetails />
            </ProductsContainer>
            <FinishPurchase />
          </ShoppingBag>
        )}
        <Component {...pageProps} />
      </Container>
    </ShoppingBagProvider>
  );
}
