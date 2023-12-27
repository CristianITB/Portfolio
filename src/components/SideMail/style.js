import styled from '@emotion/styled';
import { withTheme } from '../../styles/styles.helper'

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
  ${withTheme('color', 'colors.goldText')};
  ${withTheme('font-size', 'sizes.vw1')};
  text-decoration: none;
  transition: transform 0.5s;
  writing-mode: vertical-rl;
  letter-spacing: 3px;

  &:hover {
    transform: translateY(-5px);
    color: #9f8769;
  }
`