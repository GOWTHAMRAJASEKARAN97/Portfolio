import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";
namespace S {
  export const Card = styled("div")({
    height: "28rem",
    background: "#1a1919",
    padding: "1.2rem 1rem",
    border: "1px solid #1a1919",
    img: {
      width: " 100%",
    },
    "&:hover": {
      border: "1px solid#fff",
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
    "&:hover": {
      backgroundColor: "rgb(8, 71, 22)",
      padding: ".8rem 1.8rem",
    },
  });
  export const TechStack = styled("div")({
    position: "relative",
    bottom: 0,
    marginTop: "1rem",
    display: "flex",
    textAlign: "center",
    justifyContent: "space-evenly",
  });
}
export default S;
