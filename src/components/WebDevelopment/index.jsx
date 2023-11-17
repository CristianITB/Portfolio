import ProjectComponent from '../ProjectComponent'
import { ProjectsContainer, ProjectWrapper } from './style'

export const WebDevelopment = () => {
  return (
    <div>
      <p>These are a few of my projects:</p>
      <ProjectsContainer>
          <ProjectWrapper>
            <ProjectComponent title={"Project 1"} githubLink={"www.google.es"} websiteLink={"www.google.es"} imageSrc={process.env.PUBLIC_URL + '/portfolio_profile_picture.jpg'} description={"Brief description"} tags={["Hello", "Bye"]} />
          </ProjectWrapper>
          <ProjectWrapper>
            <ProjectComponent title={"Project 1"} githubLink={"www.google.es"} websiteLink={"www.google.es"} imageSrc={process.env.PUBLIC_URL + '/portfolio_profile_picture.jpg'} description={"Brief description"} tags={["Hello", "Bye"]} />
          </ProjectWrapper>
          <ProjectWrapper>
            <ProjectComponent title={"Project 1"} githubLink={"www.google.es"} websiteLink={"www.google.es"} imageSrc={process.env.PUBLIC_URL + '/portfolio_profile_picture.jpg'} description={"Brief description"} tags={["Hello", "Bye"]} />
          </ProjectWrapper>
          <ProjectWrapper>
            <ProjectComponent title={"Project 1"} githubLink={"www.google.es"} websiteLink={"www.google.es"} imageSrc={process.env.PUBLIC_URL + '/portfolio_profile_picture.jpg'} description={"Brief description"} tags={["Hello", "Bye"]} />
          </ProjectWrapper>
          <ProjectWrapper>
            <ProjectComponent title={"Project 1"} githubLink={"www.google.es"} websiteLink={"www.google.es"} imageSrc={process.env.PUBLIC_URL + '/portfolio_profile_picture.jpg'} description={"Brief description"} tags={["Hello", "Bye"]} />
          </ProjectWrapper>
          <ProjectWrapper>
            <ProjectComponent title={"Project 1"} githubLink={"www.google.es"} websiteLink={"www.google.es"} imageSrc={process.env.PUBLIC_URL + '/portfolio_profile_picture.jpg'} description={"Brief description"} tags={["Hello", "Bye"]} />
          </ProjectWrapper>
      </ProjectsContainer>

    </div>
  )
}

export default WebDevelopment