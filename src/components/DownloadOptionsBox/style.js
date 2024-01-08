import styled from '@emotion/styled'
import { withTheme } from '../../styles/styles.helper'

export const DownloadBoxContainer = styled.div`
  position: absolute;
  top: 10%;
  right: 2%;
  ${withTheme('background-color', 'colors.goldBackground')}
  border: 2px solid #BFA181;
  border-radius: 12px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ::before {
    content: '';
    position: absolute;
    top: -15px; /* Adjust this value to control the distance from the button */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 7px 0;
    border-color: rgba(191, 161, 129, 0.55) transparent transparent transparent;
  }
`;

export const LanguageButton = styled.button`
  background-color: transparent;
  ${withTheme('font-weight', 'fontWeight.bold')};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const LanguageFlag = styled.img`
  height: 15px;
  margin-right: 5px; /* Adjust this value based on your design preference */
`