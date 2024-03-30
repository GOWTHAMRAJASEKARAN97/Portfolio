import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { IoNavigateSharp } from "react-icons/io5";
import S from "./ProjectCard.Styled";

interface Props {
  title: string;
  image: any;
  text: string;
  view: string;
  source: string;
  techstack: string[];
}

const WorkCard: FC<Props> = ({
  title,
  image,
  text,
  view,
  source,
  techstack,
}) => {
  return (
    <S.Card>
      <img src={image} alt="project" />
      <S.Title>{title}</S.Title>
      <S.Details>
        <p>{text}</p>
      </S.Details>

      <S.TechStack>
        {techstack.map((i, index) => {
          return (
            <>
              <img
                key={index}
                src={i}
                alt={i}
                style={{ width: "2rem", height: "2rem" }}
              />
            </>
          );
        })}
      </S.TechStack>

      <S.OverLay className="overlay">
        <S.DIV>
          <S.Section>
            <a href={view} target="blank" title="View Live">
              <IoNavigateSharp size={60} style={{ color: "#fff" }} />
            </a>
            <span>View</span>
          </S.Section>
          <S.Section>
            <a href={source} target="blank" title="View Source">
              <FaGithub size={60} style={{ color: "#fff" }} />
            </a>
            <span>Source</span>
          </S.Section>
        </S.DIV>
        <p className="title">{title.toLocaleUpperCase()}</p>
      </S.OverLay>
    </S.Card>
  );
};

export default WorkCard;
