import styled from '@emotion/styled'
import { withTheme } from '../../styles/styles.helper'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  cursor: default;
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

export const Name = styled.p`
  ${withTheme('font-size', 'sizes.vw25')}
`

export const Profession = styled.p`
  ${withTheme('font-size', 'sizes.vw17')}
  margin-top: 15px;
`

export const UnorderedList = styled.ul`
  ${withTheme('font-size', 'sizes.vw18')}
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2%;
  border-bottom: solid 2px #BFA181;
  padding: 1%; 
`

export const LiElement = styled.li`
  cursor: pointer;
  padding: 0 7%;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.2);
    color: #9f8769;
  }
`

export const HeaderNav = styled.nav`
  margin-bottom: 3%;
`

export const DownloadCVButton = styled.button`
  ${withTheme('font-size', 'sizes.vw08')};
  ${withTheme('font-weight', 'fontWeight.bold')};
  ${withTheme('color', 'colors.black')}
  ${withTheme('background-color', 'colors.goldBackground')}
  border: 2px solid #BFA181;
  position: absolute;
  top: 3%;
  right: 2%;
  padding: 12px 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    background: rgba(191, 161, 129, 0.7);
    transform: scale(1.1);
  }
`
