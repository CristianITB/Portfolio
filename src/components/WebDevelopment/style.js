import styled from '@emotion/styled'
import { withTheme } from '../../styles/styles.helper'

export const ProjectsFrame = styled.div`
  max-width: 85%;
  margin: 0 auto;
`

export const ProjectsIntro = styled.div`
  ${withTheme('font-size', 'sizes.vw1')};
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 60px;
`

export const ProjectWrapper = styled.div`
  flex-basis: calc(33.33% - 20px);
  margin-bottom: 20px;
`
