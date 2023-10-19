import styled from '@emotion/styled'
import { withTheme } from '../../styles/styles.helper'

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const ProfilePicture = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  max-width: 200px;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.4);
  }
`

export const HeaderInfo = styled.div`
  text-align: left;
`

export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ${withTheme('margin', 'sizes.vw2')}
    ${withTheme('font-size', 'sizes.vw2')};
`

export const LiElement = styled.li`
    cursor: pointer;
`
