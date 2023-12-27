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
                  description={"An Android app revolutionizing your dining experience. Easily store and manage your favorite or yet-to-visit restaurants. The app features an intuitive map display, showcasing all your saved places for seamless exploration."} 
                  tags={["Android Studio", "Kotlin", "API", "MongoDB"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"The Plague Skeleton"} 
                  gitLink={"https://gitlab.com/CristianITB/the-plague-skeleton"} 
                  imageSrc={process.env.PUBLIC_URL + '/thePlagueSkeleton.png'} 
                  description={"Dive into an engaging game that draws inspiration from 'Pandemic' fundamentals. Navigate through boards, encounter enemies, vehicles, and power-ups. Strategize your moves in this thrilling adventure!"} 
                  tags={["Kotlin", "JetPack Compose"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"Genshin Impact Wiki"} 
                  gitLink={"https://gitlab.com/CristianITB/genhinapi"} 
                  imageSrc={process.env.PUBLIC_URL + '/genshinApi.png'} 
                  description={"Dive into a handy application for Genshin Impact enthusiast, serving as an intuitive wiki for players. Explore characters, weapons, and more in this immersive gaming experience!"} 
                  tags={["Android Studio", "Kotlin", "API"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"PepegaInveaders"} 
                  gitLink={"https://gitlab.com/CristianITB/pepegainvaders"} 
                  imageSrc={process.env.PUBLIC_URL + '/pepegaInvaders.png'} 
                  description={"Embark on a retro-inspired space invasion journey in this game project featuring sound effects. Inspired by Twitch streamer Knekro!"} 
                  tags={["Android Studio", "Kotlin", "Media Player"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"Geography Game"} 
                  gitLink={"https://gitlab.com/CristianITB/geographygame"} 
                  imageSrc={process.env.PUBLIC_URL + '/geographyGame.png'} 
                  description={"Enjoy a fun and educational experience with a 'Guess the Capital'-like game! Will you get all the capitals right?"} 
                  tags={["Kotlin", "JetPack Compose"]} />
              </ProjectWrapper>
              <ProjectWrapper>
                <ProjectComponent 
                  title={"FarmVille"} 
                  gitLink={"https://gitlab.com/CristianITB/farmville"} 
                  imageSrc={process.env.PUBLIC_URL + '/farmVille.png'} 
                  description={"Very simple 'miner simulator' game focusing on coroutine practice."} 
                  tags={["Android Studio", "Kotlin"]} />
              </ProjectWrapper>
          </ProjectsContainer>
        </ProjectsFrame>
      )
}

export default AndroidDevelopment