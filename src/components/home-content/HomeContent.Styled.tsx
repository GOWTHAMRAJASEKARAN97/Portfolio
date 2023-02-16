import { Button, Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

namespace S {
  export const HomeContent = styled("div")({
    width: "100%",
    top: "50%",
    left: "50%",
    textAlign: "center",
    h1: {
      fontSize: "4rem",
      padding: "0.6rem 0 1.5rem",
    },
    p: {
      fontSize: "1.4rem",
      fontWeight: 200,
      textTransform: "uppercase",
    },
    zIndex: 0,
  });
  export const Mask = styled("div")({
    width: "100%",
    height: "100vh",
    position: "relative",

    img: {
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      objectFit: "cover",
    },
    "&:after": {
      content: `""`,
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "#000",
      opacity: "0.8",
    },
  });
  export const Content = styled("div")({
    position: "absolute",
    transform: "translate(-50%,-50%)",
    top: "50%",
    left: "50%",
    textAlign: "center",
    marginBottom: "1rem",
    h2: {
      padding: "0.6rem 0 1.5rem",
    },
    p: {
      fontSize: "1.4rem",
      fontWeight: 200,
      textTransform: "uppercase",
    },
  });

  export const StyledLink = styled(Link)({
    textTransform: "uppercase",
    backgroundColor: "rgb(8, 71, 22,.5)",

    border: "none",
    borderRadius: ".5rem",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "rgb(8, 71, 22)",
    },
  });
  export const StyledButton = styled(Button)({
    fontSize: ".8rem",
    marginTop: "1rem",
    textTransform: "uppercase",
    backgroundColor: "rgb(8, 71, 22,.5)",
    border: "none",
    color: "white",
    borderRadius: ".5rem",
    "&:hover": {
      backgroundColor: "rgb(8, 71, 22)",
    },
  });
  export const ButtonContainer = styled(Stack)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  ButtonContainer.defaultProps = {
    gap: 2,
    direction: "row",
  };
}
export default S;
