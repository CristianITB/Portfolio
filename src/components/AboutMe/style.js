import styled from '@emotion/styled'
import { withTheme } from '../../styles/styles.helper'

export const AboutMeContainer = styled.div`
  max-width: 85%;
  margin: 0 auto;
  padding: ${withTheme('padding', 'sizes.vw5')};
`;

export const AboutMeParagraph = styled.p`
  font-size: 1vw;
  line-height: 1.8;
  text-align: justify;
`;

export const TechnicalExpertiseTitle = styled.p`
  margin-top: 3%;
  font-weight: bold;
  font-size: 1.3vw;
`

export const TechStackTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4%;
  font-size: 1.5vw;
  font-weight: bold;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 20%; /* Adjust this value as needed */
    height: 2px; /* Adjust the thickness of the underline */
    background-color: #BFA181;
    bottom: 0;
    left: 40%; /* Adjust this value to center the underline */
  }
`

export const TechStack = styled.div`
  border: 2px solid #BFA181;
  background-color: rgba(191, 161, 129, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  margin: 3%;
  padding: 1%;
`

export const SVGIcon = styled.div`
  margin: 0 2%;
`
