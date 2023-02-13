import { styled } from "@mui/material";
namespace S {
  export const Footer = styled("div")({
    height: "max-content",
    width: "100%",
    padding: "2rem 0",
    backgroundColor: "rgba(19,19,19,0.8)",
  });
  export const FooterContainer = styled("div")({
    maxWidth: "1140px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gridGap: "40px",
  });
  export const Left = styled("div")({
    height: "100%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  });
  export const Location = styled("div")({
    display: "flex",
    alignItems: "center",
    marginBottom: "0.8rem",
    p: {
      lineHeight: "30px",
    },
  });
  export const Phone = styled("div")({
    display: "flex",
    alignItems: "center",
    marginBottom: "0.8rem",
    p: {
      lineHeight: "30px",
    },
  });
  export const Email = styled("div")({
    display: "flex",
    alignItems: "center",
    marginBottom: "0.8rem",
    p: {
      lineHeight: "30px",
    },
  });
  export const Right = styled("div")({
    height: "100%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  });
  export const Social = styled("div")({
    marginTop: "2rem",
  });
  export const Styled_H4 = styled("h4")({
    paddingBottom: "0.7rem",
  });
  export const Styled_H3 = styled("h3")({
    fontSize: "1.5rem",
    color: "#fff",
  });
  export const Styled_P = styled("p")({
    marginTop: "2rem",
    fontSize: "1rem",
  });
}
export default S;
