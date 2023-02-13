import AboutContent from "../components/about-content/Index";
import DynamicWelcomeNote from "../components/dynamic-welcome-note/Index";
//@ts-ignore
import AboutBackground from "../assets/about.jpg";

const About = () => {
  return (
    <>
      <DynamicWelcomeNote
        heading="GOWTHAM.R"
        text="Iam a friendly Front-END developer"
        background={AboutBackground}
      />
      <AboutContent />
    </>
  );
};

export default About;
