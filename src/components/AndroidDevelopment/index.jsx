import ProjectComponent from '../ProjectComponent'
import { ProjectsFrame, ProjectsIntro, ProjectsContainer, ProjectWrapper } from '../WebDevelopment/style'

export const AndroidDevelopment = () => {
    return (
        <ProjectsFrame>
          <ProjectsIntro>Explore a showcase of my Android Development Projects:</ProjectsIntro>
          <ProjectsContainer>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"Minesweeper"} 
                  gitLink={"https://github.com/CristianITB/Minesweeper_Travelport"} 
                  websiteLink={"https://cristianitb.github.io/Minesweeper_Travelport/"} 
                  imageSrc={process.env.PUBLIC_URL + '/minesweeper.png'} 
                  description={"Traditional Minesweeper game developed using fundamental web programming and featuring rigorous testing. Feel free to play!"} 
                  tags={["HTML", "CSS", "JavaScript", "Testing"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"Calculator"} 
                  gitLink={"https://github.com/CristianITB/Calculator_Travelport"} 
                  websiteLink={"https://cristianitb.github.io/Calculator_Travelport/"} 
                  imageSrc={process.env.PUBLIC_URL + '/calculator.png'} 
                  description={"Basic Calculator without relying on the 'eval' function, ensuring simplicity and robustness through rigorous testing. Always keep one in hand!"} 
                  tags={["HTML", "CSS", "JavaScript", "Testing"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"Genshin Impact Wiki"} 
                  gitLink={"https://github.com/CristianITB/TravelGenshin"} 
                  websiteLink={"https://travel-genshin.vercel.app/"} 
                  imageSrc={process.env.PUBLIC_URL + '/genshin_wiki.png'} 
                  description={"React application for Genshin Impact enthusiast, serving as an intuitive wiki for players. Explore characters, weapons, and more in this immersive gaming experience!"} 
                  tags={["React", "Styled Components", "JavaScript"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"Recipes"} 
                  gitLink={"https://github.com/CristianITB/Recetas_Cristian"} 
                  websiteLink={"https://cristianitb.github.io/Recetas_Cristian/"} 
                  imageSrc={process.env.PUBLIC_URL + '/recipes.png'} 
                  description={"One of my first 'big' projects on fundamental web programming! Don't forget to check it if you feel hungry!"} 
                  tags={["HTML", "CSS", "JavaScript"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"Secret Code Game"} 
                  gitLink={"https://github.com/CristianITB/SecretCode_JavaScript"} 
                  websiteLink={"https://cristianitb.github.io/SecretCode_JavaScript/"} 
                  imageSrc={process.env.PUBLIC_URL + '/secret_code.png'} 
                  description={"Very simple 'Secret Code' game done in my early days as a software developer, exploring the fundamentals of coding and logic! Will you guess the code?"} 
                  tags={["HTML", "CSS", "JavaScript"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"CSS tryouts"} 
                  gitLink={"https://github.com/CristianITB/PruebasCSS"} 
                  websiteLink={"https://cristianitb.github.io/PruebasCSS/"} 
                  imageSrc={process.env.PUBLIC_URL + '/css_tryouts.png'} 
                  description={"Exploring the creative possibilities of CSS beyond conventional web page styling through experimentation and testing."} 
                  tags={["HTML", "CSS"]} />
              </ProjectWrapper>
          </ProjectsContainer>
    
        </ProjectsFrame>
      )
}

export default AndroidDevelopment