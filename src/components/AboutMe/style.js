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
