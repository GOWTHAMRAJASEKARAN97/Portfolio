// import jsPDF from "jspdf";
import { useMediaQuery } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
// import Resume from "../../assets/resume.jpg";
//@ts-ignore
import Resume from "../../assets/Gowtham's_Resume.pdf";
import BackgroundImage from "../../assets/gowtham.jpg";
import S from "./HomeContent.Styled";

const HomeContent = () => {
  const matches = useMediaQuery("(max-width:640px)");

  // const handleResumeDownload = () => {
  //   let doc = new jsPDF("portrait", "px", "a4", false);
  //   doc.addImage(Resume, "jpg", 3.5, 11, 450, 610);
  //   doc.save("Gowtham_Resume.pdf");
  // };

 function handleResumeDownload() {
    // Create an invisible element
    const element = document.createElement('a');
    element.setAttribute('href', Resume);
    element.setAttribute('download', "Gowtham's_Resume");

    // Append the element to the document body
    document.body.appendChild(element);

    // Programmatically click the element to trigger the download
    element.click();

    // Remove the element from the document
    document.body.removeChild(element);
}

  return (
    <S.HomeContent>
      <S.Mask>
        <img src={BackgroundImage} alt="IntroImg" />
      </S.Mask>
      <S.Content>
        <h3 style={{ color: "white", fontSize: matches ? "2rem" : "3rem" }}>
          GOWTHAM RAJASEKARAN
        </h3>
        <h2
          style={{
            color: "white",
            fontSize: matches ? "1rem" : "1.5rem",
          }}
        >
          <Typewriter
            words={[
              "I'm a React.js Developer",
              "I'm a Javascript Developer",
              "I'm a Web developer",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => {}}
            onType={() => {}}
          />
        </h2>
        <S.StyledButton
          onClick={handleResumeDownload}
          sx={{ padding: matches ? ".5rem 1rem" : "1rem 2rem" }}
        >
          Download Resume
        </S.StyledButton>
      </S.Content>
    </S.HomeContent>
  );
};

export default HomeContent;
