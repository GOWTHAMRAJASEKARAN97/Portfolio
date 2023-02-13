import { useState, FC } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";
//@ts-ignore
import ShuffleText from "react-shuffle-text";
import S from "./Navbar.Styled";

interface Props {}

const Navbar: FC<Props> = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const matches = useMediaQuery("(max-width:1040px)");

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <S.Container
        sx={{
          backgroundColor: color ? "rgba(0,0,0,0.85)" : "",
          transition: color ? "0.5s" : "",
        }}
      >
        <Link
          to="/"
          style={{ fontSize: "2em", fontWeight: "bold" }}
          onClick={handleClick}
        >
          <ShuffleText content={"Portfolio"} />
        </Link>
        <S.NavMenu
          sx={{
            flexDirection: matches ? "column" : "",
            justifyContent: matches ? "center" : "",
            alignItems: matches ? "center" : "",
            width: matches ? "100%" : "30%",
            height: matches ? "100vh" : "",
            background: matches ? "rgba(0,0,0,0.9)" : "",
            position: matches ? "absolute" : "",
            top: matches ? "0" : "",
            left: matches ? (click ? 0 : "-100%") : "",
            zIndex: matches ? "-3" : "",
            transition: matches ? "0.3s" : "",
          }}
        >
          <li style={{ padding: matches ? "1rem 0" : "0 1rem" }}>
            <Link
              to="/"
              style={{ fontSize: matches ? "2rem" : "1.2rem" }}
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li style={{ padding: matches ? "1rem 0" : "0 1rem" }}>
            <Link
              to="/projects"
              style={{ fontSize: matches ? "2rem" : "1.2rem" }}
              onClick={handleClick}
            >
              Projects
            </Link>
          </li>
          <li style={{ padding: matches ? "1rem 0" : "0 1rem" }}>
            <Link
              to="/about"
              style={{ fontSize: matches ? "2rem" : "1.2rem" }}
              onClick={handleClick}
            >
              About
            </Link>
          </li>
          <li style={{ padding: matches ? "1rem 0" : "0 1rem" }}>
            <Link
              to="/contact"
              style={{ fontSize: matches ? "2rem" : "1.2rem" }}
              onClick={handleClick}
            >
              Contact
            </Link>
          </li>
          <li style={{ padding: matches ? "1rem 0" : "0 1rem" }}>
            <a
              href="#techStack"
              style={{ fontSize: matches ? "2rem" : "1.2rem" }}
              onClick={handleClick}
            >
              Teckstack
            </a>
          </li>
        </S.NavMenu>
        <S.Hamburger
          sx={{ display: matches ? "initial" : "" }}
          onClick={handleClick}
        >
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </S.Hamburger>
      </S.Container>
      <Outlet />
    </>
  );
};

export default Navbar;
