import { styled } from "@mui/material";
import { Link } from "react-router-dom";
namespace S {
  export const About = styled("div")({
    width: " 100%",
    margin: "3rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    height: " 100%",
  });
  export const Left = styled("div")({
    margin: "3rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    height: " 100%",
    textAlign: "center",
    // margin: "auto",
    padding: "1rem",
    maxWwidth: "350px",
    p: {
      margin: "1.2rem 0",
    },
  });
  export const Right = styled("div")({
    width: " 100%",
    margin: "3rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    height: " 100%",
    maxWidth: "700px",
    img: {
      maxWidth: " 90%",
      border: "1px solid #333",
    },
  });
  export const ImgContainer = styled("div")({
    display: "grid",
    gridTemplateColumns: " repeat(12, 1fr)",
    position: "relative",
    alignItems: "center",
    textAlign: "center",
  });
  export const Top = styled("div")({
    gridColumn: "1 / span 8",
    gridRow: " 1",
    paddingTop: "20%",
    zIndex: "6",
  });
  export const Bottom = styled("div")({
    gridColumn: " 4/-1",
    gridRow: "1",
    zIndex: "5",
  });
  export const StyledLink = styled(Link)({
    textTransform: "uppercase",
    backgroundColor: "rgb(8, 71, 22,.5)",
    padding: "1rem 2rem",
    border: "none",
    borderRadius: ".5rem",
    "&:hover": {
      backgroundColor: "rgb(8, 71, 22)",
    },
  });
}
export default S;
