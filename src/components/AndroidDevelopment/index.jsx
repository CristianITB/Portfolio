import ProjectComponent from '../ProjectComponent'
import { ProjectsFrame, ProjectsIntro, ProjectsContainer, ProjectWrapper } from '../WebDevelopment/style'

export const AndroidDevelopment = () => {
    return (
        <ProjectsFrame>
          <ProjectsIntro>Explore a showcase of my Android Development Projects:</ProjectsIntro>
          <ProjectsContainer>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"ThatPlace"} 
                  gitLink={"https://gitlab.com/CristianITB/thatplace"} 
                  imageSrc={process.env.PUBLIC_URL + '/thatPlace.png'} 
                  description={"Traditional Minesweeper game developed using fundamental web programming and featuring rigorous testing. Feel free to play!"} 
                  tags={["HTML", "CSS", "JavaScript", "Testing"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"The Plague Skeleton"} 
                  gitLink={"https://gitlab.com/CristianITB/the-plague-skeleton"} 
                  imageSrc={process.env.PUBLIC_URL + '/thePlagueSkeleton.png'} 
                  description={"Basic Calculator without relying on the 'eval' function, ensuring simplicity and robustness through rigorous testing. Always keep one in hand!"} 
                  tags={["HTML", "CSS", "JavaScript", "Testing"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"Genshin Impact Wiki"} 
                  gitLink={"https://gitlab.com/CristianITB/genhinapi"} 
                  imageSrc={process.env.PUBLIC_URL + '/genshinApi.png'} 
                  description={"React application for Genshin Impact enthusiast, serving as an intuitive wiki for players. Explore characters, weapons, and more in this immersive gaming experience!"} 
                  tags={["React", "Styled Components", "JavaScript"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"PepegaInveaders"} 
                  gitLink={"https://gitlab.com/CristianITB/pepegainvaders"} 
                  imageSrc={process.env.PUBLIC_URL + '/pepegaInvaders.png'} 
                  description={"One of my first 'big' projects on fundamental web programming! Don't forget to check it if you feel hungry!"} 
                  tags={["HTML", "CSS", "JavaScript"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"Geography Game"} 
                  gitLink={"https://gitlab.com/CristianITB/geographygame"} 
                  imageSrc={process.env.PUBLIC_URL + '/geographyGame.png'} 
                  description={"Very simple 'Secret Code' game done in my early days as a software developer, exploring the fundamentals of coding and logic! Will you guess the code?"} 
                  tags={["HTML", "CSS", "JavaScript"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"FarmVille"} 
                  gitLink={"https://gitlab.com/CristianITB/farmville"} 
                  imageSrc={process.env.PUBLIC_URL + '/farmVille.png'} 
                  description={"Exploring the creative possibilities of CSS beyond conventional web page styling through experimentation and testing."} 
                  tags={["HTML", "CSS"]} />
              </ProjectWrapper>
          </ProjectsContainer>
    
        </ProjectsFrame>
      )
}

export default AndroidDevelopment