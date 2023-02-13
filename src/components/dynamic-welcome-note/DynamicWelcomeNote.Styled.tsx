import { styled } from "@mui/material";

namespace S {
  export const WelcomeNote = styled("div")({
    width: "100%",
    backgroundColor: " rgba(0, 0, 0, 0.5)",
    height: "60vh",
    position: "relative",

    "&::before": {
      backgroundSize: "cover",
      content: '""',
      backgroundPosition: "center top",
      height: "100%",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
    },

    h1: {
      fontSize: "2.4rem",
    },
    p: {
      fontSize: " 1.4rem",
      textAlign: "center",
    },
  });
  export const Heading = styled("div")({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });
}
export default S;
