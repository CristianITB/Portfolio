import { AboutMeContainer, AboutMeParagraph, TechnicalExpertiseTitle } from './style'

export const AboutMe = () => {

    return (
        <AboutMeContainer>
          <AboutMeParagraph>
            Hi, I'm actively seeking opportunities in the software development field. I recently completed my studies with an honors degree and gained valuable experience during a year-long internship as a software developer at TravelPort. This role provided me with my first exposure to the vast world of programming, enabling me to acquire a wealth of knowledge. Additionally, I significantly improved my English communication skills as the job required full proficiency in English. I was also introduced to the Agile methodology, which deepened my understanding of modern software development practices and taught me how to collaborate effectively within a team.
          </AboutMeParagraph>
    
          <AboutMeParagraph>
            <TechnicalExpertiseTitle>Technical Expertise:</TechnicalExpertiseTitle>
            <br />
            During my internship at TravelPort, I primarily utilized JavaScript as my development language and became proficient in associated tools and technologies like React, Yarn, npm, Jest, NodeJS, Redux, TypeScript... Additionally, my academic background exposed me to Kotlin, which I found fascinating and gained proficiency in. Notably, I developed a keen interest in Android app development while working with Android Studio.
          </AboutMeParagraph>
        </AboutMeContainer>
      );
    };

export default AboutMe