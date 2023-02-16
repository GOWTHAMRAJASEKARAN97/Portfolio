import { useMediaQuery } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ProjectData from "../../utils/local-api/Index";

import S from "./Project.Styled";
const Project = () => {
  const matches = useMediaQuery("(max-width: 740px)");
  return (
    <S.Container>
      <S.ProjectHeading>Projects</S.ProjectHeading>
      <S.ProjectContainer
        sx={{
          maxWidth: matches ? "90%" : "1140px",
          // gridTemplateColumns: matches ? "1fr" : "repeat(3, 1fr)",
          flexDirection: matches ? "column" : "flex",
        }}
      >
        {ProjectData.map(
          ({ image, title, text, view, source, techstack }, index) => {
            return (
              <ProjectCard
                key={index}
                image={image}
                title={title}
                text={text}
                view={view}
                source={source}
                techstack={techstack}
              />
            );
          }
        )}
      </S.ProjectContainer>
    </S.Container>
  );
};

export default Project;
