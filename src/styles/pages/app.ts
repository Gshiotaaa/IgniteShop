import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flexStart",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
});

export const ShoppingBagMenu = styled("div", {
  backgroundColor: "$gray800",
  borderRadius: "12px",

  button: {
    padding: "12px",
    border: "none",
    cursor: "pointer",
    background: "none",
  },

  span: {
    position: "absolute",
    top: "85px",
    color: "white",
    padding: "2px 5px",

    backgroundColor: "$green300",
    borderRadius: "9999px",
  },
});

export const ShoppingBag = styled("div", {
  backgroundColor: "$gray800",
  height: "100%",
  padding: " 0 48px ",
  width: "400px",
  boxSizing: "border-box",
  alignSelf: "end",
  position: "absolute",
  zIndex: 10,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",

  h1: {
    fontSize: "20px",
  },
});

export const ProductsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "24px",

  button: {
    background: "none",
    border: "none",
    alignSelf: "end",
    cursor: "pointer",
  },
});

export const ProductInfos = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "20px",

  section: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",

    button: {
      color: "$green300",
      background: "none",
      border: "none",
      textAlign: "start",
    },
  },
});

export const CompletePurchase = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "7px",

  button: {
    backgroundColor: "$green300",
    padding: "20px",
    borderRadius: "12px",
    border: 0,
    marginTop: "40px",
    cursor: "pointer",
    color: "white",
    fontWeight: "700",
  },
});

export const CompleteInfos = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
