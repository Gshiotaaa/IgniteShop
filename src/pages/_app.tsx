import { globalStyles } from "@/styles/global";
import {
  CompleteInfos,
  CompletePurchase,
  Container,
  Header,
  ProductInfos,
  ProductsContainer,
  ShoppingBag,
  ShoppingBagMenu,
} from "@/styles/pages/app";
import type { AppProps } from "next/app";

import { Tote, X } from "@phosphor-icons/react";

import Image from "next/image";

import logoImg from "./assets/logo.svg";

import { useState } from "react";
import camisa1 from "./assets/camisetas/1.png";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [openShoppingBag, setOpenShoppingBag] = useState(false);

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
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
            <ProductInfos>
              <Image src={camisa1} alt="" width="101.94" height="93" />
              <section>
                <span>Camiseta X</span>
                <span>R$ 79,90</span>
                <button>Remover</button>
              </section>
            </ProductInfos>
            <ProductInfos>
              <Image src={camisa1} alt="" width="101.94" height="93" />
              <section>
                <span>Camiseta X</span>
                <span>R$ 79,90</span>
                <button>Remover</button>
              </section>
            </ProductInfos>
          </ProductsContainer>

          <CompletePurchase>
            <CompleteInfos>
              <span>Quantidade</span>
              <span>3 itens</span>
            </CompleteInfos>
            <CompleteInfos>
              <span>Valor total</span>
              <span>R$ 270,00</span>
            </CompleteInfos>
            <button>Finalizar Compra</button>
          </CompletePurchase>
        </ShoppingBag>
      )}
      <Component {...pageProps} />
    </Container>
  );
}
