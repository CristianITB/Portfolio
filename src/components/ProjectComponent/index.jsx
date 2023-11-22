import { ProjectContainer, ProjectTitle, ProjectIcons, ProjectImage, ProjectDescription, ProjectTags, HTMLTag, CSSTag, JavaScriptTag, ReactTag, StyledComponentsTag, TestingTag, DefaultTag } from './style'
import GitHubIcon from '../../SVGicons/GitHub';
import GoToWebsite from '../../SVGicons/GoToWebsite';

const tagMappings = {
  HTML: HTMLTag,
  CSS: CSSTag,
  JavaScript: JavaScriptTag,
  React: ReactTag,
  'Styled Components': StyledComponentsTag,
  Testing: TestingTag,
};

const getTagComponent = (tag, index) => {
  const TagComponent = tagMappings[tag] || DefaultTag;
  return <TagComponent key={index}>{tag}</TagComponent>;
};

export const Project = ({ title, githubLink, websiteLink, imageSrc, description, tags }) => {
    return (
      <ProjectContainer>
        <ProjectTitle>
          {title}
          <ProjectIcons>
            <a href={githubLink} target='_blank' rel='noreferrer'>
              <GitHubIcon width={40} height={40} />
            </a>
            <a href={websiteLink} target="_blank" rel="noreferrer">
              <GoToWebsite width={40} height={40} />
            </a>
          </ProjectIcons>
        </ProjectTitle>
        <ProjectImage src={imageSrc} alt={title} />
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectTags>{tags.map((tag, index) => getTagComponent(tag, index))}</ProjectTags>
      </ProjectContainer>
    );
  };
  
  export default Project;