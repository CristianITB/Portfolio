import AndroidStudioIcon from '../../SVGicons/AndroidStudio';
import GitHubLettersIcon from '../../SVGicons/GitHubLetters';
import GitLabLettersIcon from '../../SVGicons/GitLabLetters';
import JavaScriptIcon from '../../SVGicons/JavaScript';
import KotlinIcon from '../../SVGicons/Kotlin';
import MongoDBIcon from '../../SVGicons/MongoDB';
import NodeJSIcon from '../../SVGicons/NodeJS';
import PostgreSQLIcon from '../../SVGicons/PostgreSQL';
import ReactIcon from '../../SVGicons/React';
import { AboutMeContainer, AboutMeParagraph, TechnicalExpertiseTitle, TechStackTitle, TechStack, SVGIcon } from './style'

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

          <TechStackTitle>
              Tech Stack Proficiency
          </TechStackTitle>

          <TechStack>
            <SVGIcon>
              <KotlinIcon width="90" height="90" />
            </SVGIcon>
            <SVGIcon>
              <AndroidStudioIcon width="90" height="90" />
            </SVGIcon>
            <SVGIcon>
              <JavaScriptIcon width="70" height="70" />
            </SVGIcon>
            <SVGIcon>
              <ReactIcon width="70" height="70" />
            </SVGIcon>
            <SVGIcon>
              <GitHubLettersIcon width="70" height="70" />
            </SVGIcon>
            <SVGIcon>
              <GitLabLettersIcon width="70" height="70" />
            </SVGIcon>
            <SVGIcon>
              <MongoDBIcon width="80" height="80" />
            </SVGIcon>
            <SVGIcon>
              <NodeJSIcon width="90" height="90" />
            </SVGIcon>
            <SVGIcon>
              <PostgreSQLIcon width="90" height="90" />
            </SVGIcon>
          </TechStack>          
        </AboutMeContainer>
      );
    };

export default AboutMe