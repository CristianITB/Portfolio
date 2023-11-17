import styled from '@emotion/styled';

export const SideMailContainer = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 10;
`

export const SideMailDiv = styled.div`
  padding: 10px;

  &::after {
    content: '';
    display: block;
    width: 2px;
    height: 75px;
    margin: 0 auto;
    background-color: #BFA181;
    position: relative;
    bottom: -30px;
  }
`

export const AnchorElement = styled.a`
  text-decoration: none;
  color: #BFA181;
  font-size: 1vw;
  transition: transform 0.5s;
  writing-mode: vertical-rl;
  letter-spacing: 3px;

  &:hover {
    transform: translateY(-5px);
    color: #9f8769;
  }
`