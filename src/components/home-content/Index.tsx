import jsPDF from "jspdf";
// import Typical from "react-typical";
import { useMediaQuery } from "@mui/material";
import Resume from "../../assets/resume.jpg";
import BackgroundImage from "../../assets/gowtham.jpg";
import S from "./HomeContent.Styled";

const HomeContent = () => {
  const matches = useMediaQuery("(max-width:640px)");

  const handleResumeDownload = () => {
    let doc = new jsPDF("portrait", "px", "a4", false);
    doc.addImage(Resume, "jpg", 10, 10, 450, 610);
    doc.save("Gowtham_Resume.pdf");
  };

  return (
    <S.HomeContent>
      <S.Mask>
        <img src={BackgroundImage} alt="IntroImg" />
      </S.Mask>
      <S.Content>
        {/* <div style={{ fontSize: matches ? "1.4rem" : "1.4rem" }}>
          <Typical
            steps={[
              "HI, I'M A WEB DEVELOPER.",
              1000,
              "HI, I'M A REACT JS DEVELOPER.",
              500,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </div> */}
        <h1 style={{ fontSize: matches ? "3rem" : "4rem" }}>GOWTHAM.R</h1>
        <S.ButtonContainer>
          <S.StyledLink to="/projects">Projects</S.StyledLink>
          <S.StyledLink to="/contact">Contact</S.StyledLink>
        </S.ButtonContainer>
        <S.StyledButton onClick={handleResumeDownload}>
          Download Resume
        </S.StyledButton>
      </S.Content>
    </S.HomeContent>
  );
};

export default HomeContent;
