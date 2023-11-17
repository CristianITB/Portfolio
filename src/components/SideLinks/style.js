import styled from '@emotion/styled'

export const SideLinksContainer = styled.div`
  position: fixed;
  bottom: 15px;
  left: 15px;
  z-index: 10;
`

export const UnorderedList = styled.ul`
  list-style: none;

  &::after {
    content: '';
    display: block;
    width: 2px;
    height: 75px;
    margin: 0 auto;
    background-color: #BFA181;
    position: relative;
    left: 50%;
    bottom: -15px;
  }
`

export const LiElement = styled.li`
  margin: 50%;
  padding: 5%;
`

export const AnchorElement = styled.a`
  svg {
    transition: transform 0.5s;
  }

  &:hover {
    svg {
      transform: translateY(-5px);
    }
  }
`
