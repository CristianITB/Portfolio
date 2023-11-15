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

export const Name = styled.p`
  font-size: 2.5vw;
`

export const Profession = styled.p`
  font-size: 1.7vw;
  margin-top: 15px;
`

export const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2%;
  font-size: 1.8vw;
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
  position: absolute;
  top: 3%;
  right: 2%;
  padding: 12px 18px; /* Increased padding for a slightly bigger button */
  background: linear-gradient(45deg, #BFA181, #37b0ac);
  color: #fff;
  border: none;
  border-radius: 8px; /* Increased border radius for a rounded look */
  cursor: pointer;
  font-size: ${withTheme('font-size', 'sizes.vw2')};
  transition: transform 0.3s ease-in-out; /* Change transition to transform */

  &:hover {
    background: linear-gradient(45deg, #9f8769, #2f8f89);
    transform: scale(1.1); /* Scale up by 10% on hover */
  }
`
