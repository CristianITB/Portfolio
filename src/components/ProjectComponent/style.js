import styled from '@emotion/styled';
import { withTheme } from '../../styles/styles.helper';

export const ProjectContainer = styled.div`
  border: 1px solid #BFA181;
  padding: 16px;
  margin: 16px 0;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectTitle = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3vw;
  font-weight: bold;
  margin-bottom: 5%;
`;

export const ProjectIcons = styled.div`
  display: flex;
  gap: 8px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const ProjectDescription = styled.p`
  text-align: justify;
  margin: 2% 0;
  overflow: hidden;
`;

export const ProjectTags = styled.div`
  display: flex;
  margin-top: 3%;
  padding: 4px 8px;
  border-radius: 15px;
  font-size: 0.9em;
  font-weight: bold;
  gap: 8px;
`;

export const HTMLTag = styled(ProjectTags)`
  background-color: #3498db;
  color: #000;
`;

export const CSSTag = styled(ProjectTags)`
  background-color: #e67e22;
  color: #000;
`;

export const JavaScriptTag = styled(ProjectTags)`
  background-color: #f1c40f;
  color: #000;
`;

export const ReactTag = styled(ProjectTags)`
  background-color: #61db61;
  color: #000;
`;

export const TestingTag = styled(ProjectTags)`
  background-color: #cf3434;
  color: #000;
`;

export const StyledComponentsTag = styled(ProjectTags)`
  background-color: #c96f21;
  color: #000;
`;

export const DefaultTag = styled(ProjectTags)`
  background-color: #fff;
  color: #000;
`;
