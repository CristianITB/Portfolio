import { ProjectContainer, ProjectTitle, ProjectIcons, ProjectImage, ProjectDescription, ProjectTags } from './style'

export const Project = ({ title, githubLink, websiteLink, imageSrc, description, tags }) => {
    return (
      <ProjectContainer>
        <ProjectTitle>
          {title}
          <ProjectIcons>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src="/github-icon.svg" alt="GitHub" />
            </a>
            <a href={websiteLink} target="_blank" rel="noopener noreferrer">
              <img src="/go-to-icon.svg" alt="Go To" />
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