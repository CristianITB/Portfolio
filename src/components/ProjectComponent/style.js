import styled from '@emotion/styled'
import { withTheme } from '../../styles/styles.helper'

export const ProjectContainer = styled.div`
  border: 1px solid #BFA181;
  padding: 16px;
  margin: 16px 0;
`;

export const ProjectTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectIcons = styled.div`
  display: flex;
  gap: 8px;
`;

export const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 8px;
`;

export const ProjectDescription = styled.p`
  margin-top: 8px;
`;

export const ProjectTags = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`;