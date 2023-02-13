import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { useMediaQuery } from "@mui/material";
import S from "./Footer.styled";

const Footer = () => {
  const matches = useMediaQuery("(max-width:640px)");
  return (
    <S.Footer>
      <S.FooterContainer
        sx={{ gridTemplateColumns: matches ? "1fr" : "repeat(2, 1fr)" }}
      >
        <S.Left>
          <S.Location>
            <FaHome size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>8,Vamanan Street,</p>
              <p>Kulalarpalayam, Bodinayakanur.</p>
            </div>
          </S.Location>
          <S.Phone>
            <FaPhone size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            <S.Styled_H4>+918220256597</S.Styled_H4>
          </S.Phone>
          <S.Email>
            <FaMailBulk
              size={25}
              style={{
                color: "#fff",
                marginRight: "2rem",
              }}
            />
            <S.Styled_H4>gowthamrajasekaran97@gmail.com</S.Styled_H4>
          </S.Email>
        </S.Left>
        <S.Right>
          <S.Styled_H3>About me</S.Styled_H3>
          <S.Styled_P>
            This is Gowtham.Web Developer with project experience.I'm so curious
            to learn new technologies.
          </S.Styled_P>
          <S.Social>
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </S.Social>
        </S.Right>
      </S.FooterContainer>
    </S.Footer>
  );
};

export default Footer;
