import styled from '@emotion/styled'
import { withTheme } from '../../styles/styles.helper'

export const AboutMeContainer = styled.div`
  max-width: 85%;
  margin: 0 auto;
  cursor: default;
`;

export const AboutMeParagraph = styled.p`
  ${withTheme('font-size', 'sizes.vw1')}
  line-height: 1.8;
  text-align: justify;
`;

export const TechnicalExpertiseTitle = styled.p`
  ${withTheme('font-weight', 'fontWeight.bold')}
  ${withTheme('font-size', 'sizes.vw13')}
  margin-top: 3%;
}
`

export const TechStackTitle = styled.p`
  ${withTheme('font-size', 'sizes.vw15')}
  ${withTheme('font-weight', 'fontWeight.bold')}
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4%;
  position: relative;


  &:after {
    content: "";
    position: absolute;
    width: 20%;
    height: 2px;
    background-color: #BFA181;
    bottom: 0;
    left: 40%;
  }
`

export const TechStack = styled.div`
  ${withTheme('background-color', 'colors.softGoldBackground')}
  border: 2px solid #BFA181;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  margin: 3%;
  padding: 1%;
`

export const SVGIcon = styled.div`
  margin: 0 2%;
  svg {
    width: 100%;
    height: auto;
  }
`
