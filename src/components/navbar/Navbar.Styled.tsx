import { styled } from "@mui/material";

namespace S {
  export const Container = styled("nav")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    position: "fixed",
    width: "100%",
    height: "90px",
    zIndex: "10",
    top: 0,
  });

  export const NavMenu = styled("ul")({
    display: "flex",
    justifyContent: "flex-end",
    right: 0,
    a: {
      fontSize: "1.2rem",
      fontWeight: "500",
    },
    li: {
      padding: "0 1rem",
    },
  });

  export const Hamburger = styled("div")({
    display: "none",
  });
}
export default S;
