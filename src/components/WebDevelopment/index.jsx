import ProjectComponent from '../ProjectComponent'
import { WebDevelopmentContainer, WebDevelopmentIntro, ProjectsContainer, ProjectWrapper } from './style'

export const WebDevelopment = () => {
  return (
    <WebDevelopmentContainer>
      <WebDevelopmentIntro>Explore a showcase of my Web Development Projects:</WebDevelopmentIntro>
      <ProjectsContainer>
          <ProjectWrapper>
            <ProjectComponent 
              title={"Minesweeper"} 
              githubLink={"https://github.com/CristianITB/Minesweeper_Travelport"} 
              websiteLink={"https://cristianitb.github.io/Minesweeper_Travelport/"} 
              imageSrc={process.env.PUBLIC_URL + '/minesweeper.png'} 
              description={"Traditional Minesweeper game developed using fundamental web programming and featuring rigorous testing. Feel free to play!"} 
              tags={["HTML", "CSS", "JavaScript", "Testing"]} />
          </ProjectWrapper>
          <ProjectWrapper>
            <ProjectComponent 
              title={"Calculator"} 
              githubLink={"https://github.com/CristianITB/Calculator_Travelport"} 
              websiteLink={"https://cristianitb.github.io/Calculator_Travelport/"} 
              imageSrc={process.env.PUBLIC_URL + '/calculator.png'} 
              description={"Basic Calculator without relying on the 'eval' function, ensuring simplicity and robustness through rigorous testing. Always keep one in hand!"} 
              tags={["HTML", "CSS", "JavaScript", "Testing"]} />
          </ProjectWrapper>
          <ProjectWrapper>
            <ProjectComponent 
              title={"Genshin Impact Wiki"} 
              githubLink={"https://github.com/CristianITB/TravelGenshin"} 
              websiteLink={"https://travel-genshin.vercel.app/"} 
              imageSrc={process.env.PUBLIC_URL + '/genshin_wiki.png'} 
              description={"React application for Genshin Impact enthusiast, serving as an intuitive wiki for players. Explore characters, weapons, and more in this immersive gaming experience!"} 
              tags={["React", "Styled Components", "JavaScript"]} />
          </ProjectWrapper>
          <ProjectWrapper>
            <ProjectComponent 
              title={"Recipes"} 
              githubLink={"https://github.com/CristianITB/Recetas_Cristian"} 
              websiteLink={"https://cristianitb.github.io/Recetas_Cristian/"} 
              imageSrc={process.env.PUBLIC_URL + '/recipes.png'} 
              description={"One of my first 'big' projects on fundamental web programming! Don't forget to check it if you feel hungry!"} 
              tags={["HTML", "CSS", "JavaScript"]} />
          </ProjectWrapper>
          <ProjectWrapper>
            <ProjectComponent 
              title={"Secret Code Game"} 
              githubLink={"https://github.com/CristianITB/SecretCode_JavaScript"} 
              websiteLink={"https://cristianitb.github.io/SecretCode_JavaScript/"} 
              imageSrc={process.env.PUBLIC_URL + '/secret_code.png'} 
              description={"Very simple 'Secret Code' game done in my early days as a software developer, exploring the fundamentals of coding and logic! Will you guess the code?"} 
              tags={["HTML", "CSS", "JavaScript"]} />
          </ProjectWrapper>
          <ProjectWrapper>
            <ProjectComponent 
              title={"CSS tryouts"} 
              githubLink={"https://github.com/CristianITB/PruebasCSS"} 
              websiteLink={"https://cristianitb.github.io/PruebasCSS/"} 
              imageSrc={process.env.PUBLIC_URL + '/css_tryouts.png'} 
              description={"Exploring the creative possibilities of CSS beyond conventional web page styling through experimentation and testing."} 
              tags={["HTML", "CSS"]} />
          </ProjectWrapper>
      </ProjectsContainer>

    </WebDevelopmentContainer>
  )
}

export default WebDevelopment