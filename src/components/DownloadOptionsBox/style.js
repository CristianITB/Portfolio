import styled from '@emotion/styled'
import { withTheme } from '../../styles/styles.helper'

export const DownloadBoxContainer = styled.div`
  ${withTheme('background-color', 'colors.goldBackground')}
  position: absolute;
  top: 10%;
  right: 2%;
  border: 2px solid #BFA181;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LanguageButton = styled.button`
  ${withTheme('font-weight', 'fontWeight.bold')};
  ${withTheme('font-size', 'sizes.vw07')};
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export const LanguageFlag = styled.img`
  height: 15px;
  margin-right: 5px;
  vertical-align: top;
`