import { ProjectContainer, ProjectTitle, ProjectIcons, ProjectImage, ProjectDescription, ProjectTags } from './style'
import { HTMLTag, CSSTag, JavaScriptTag, ReactTag, StyledComponentsTag, TestingTag, DefaultTag } from './ProjectTagsStyle'
import GitHubIcon from '../../SVGicons/GitHub';
import GitLab from '../../SVGicons/GitLab';
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

export const Project = ({ title, gitLink, websiteLink, imageSrc, description, tags }) => {

  const isGitHubLink = gitLink.includes('github');

    return (
      <ProjectContainer>
        <ProjectTitle>
          {title}
          <ProjectIcons>
            {isGitHubLink ? (
              <a href={gitLink} target='_blank' rel='noreferrer'>
                <GitHubIcon width={40} height={40} />
              </a>
            ) : (
              <a href={gitLink} target='_blank' rel='noreferrer'>
                <GitLab width={40} height={40} />
              </a>
            )}
            {websiteLink && (
              <a href={websiteLink} target="_blank" rel="noreferrer">
                <GoToWebsite width={40} height={40} />
              </a>
            )}
          </ProjectIcons>
        </ProjectTitle>
        <ProjectImage src={imageSrc} alt={title} />
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectTags>{tags.map((tag, index) => getTagComponent(tag, index))}</ProjectTags>
      </ProjectContainer>
    );
  };
  
  export default Project;