import { ProjectContainer, ProjectTitle, ProjectIcons, ProjectImage, ProjectDescription, ProjectTags } from './style'
import GitHubIcon from '../../SVGicons/GitHub';
import GoToWebsite from '../../SVGicons/GoToWebsite';

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
        <ProjectTags>
          {tags.map((tag, index) => ( 
            <div key={index}>{tag}</div>
          ))}
        </ProjectTags>
      </ProjectContainer>
    );
  };
  
  export default Project;