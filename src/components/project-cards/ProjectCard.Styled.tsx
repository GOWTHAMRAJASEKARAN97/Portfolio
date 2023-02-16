import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";
namespace S {
  export const Card = styled("div")({
    height: "28rem",
    width: "20rem",
    background: "#1a1919",
    border: "1px solid #1a1919",
    padding: "1.2rem 1rem",
    img: {
      width: " 100%",
    },
    "&:hover": {
      border: "1px solid#fff",
      cursor: "pointer",
      ".overlay": {
        padding: 0,
        display: "flex",
      },
    },
  });

  export const Title = styled("h3")({
    color: "#fff",
    padding: "1rem 0",
  });
  export const Details = styled("div")({
    height: "25%",
    p: {
      paddingBottom: "1rem",
      fontSize: ".9rem",
      textAlign: "justify",
    },
  });
  export const ProjectNavigators = styled("div")({
    width: " 100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    transition: "0.4s ease-in-out",
    backgroundColor: "rgba(0,0,0,.1)",
  });
  export const StyledLink = styled(NavLink)({
    textTransform: "uppercase",
    backgroundColor: "rgb(8, 71, 22,.5)",
    padding: ".9rem 1.9rem",
    border: "none",
    borderRadius: ".5rem",
  });
  export const TechStack = styled("div")({
    width: "100%",
    height: "5rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  });
  export const OverLay = styled("div")({
    position: "relative",
    color: "white",
    display: "none",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backdropFilter: "blur(0.1rem)",
    backgroundColor: "rgba(0,0,0,.8)",
    transition: "0.6s ease-in-out",
    transform: "translate(-4.5%, -94.5%)",
    height: "109.5%",
    width: "110%",
    p: {
      marginBottom: ".5rem",
      fontSize: "1rem",
      fontWeight: "600",
    },
  });
  export const DIV = styled("div")({
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: " space-evenly",
  });
  export const Section = styled("section")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    a: {
      fontSize: "1rem",
      color: "white",
    },
    "&:hover": {
      transform: "scale(1.2)",
    },
  });
}
export default S;
