import styled from '@emotion/styled'
import { withTheme } from '../../styles/styles.helper'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
`

export const ProfilePicture = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  max-width: 200px;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

export const HeaderInfo = styled.div`
  text-align: left;
`

export const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 4%;
  ${withTheme('font-size', 'sizes.vw15')};
`

export const LiElement = styled.li`
  cursor: pointer;
  padding: 0 3%;
`
