import styled from '@emotion/styled';
import { ProjectTags } from './style'
import { withTheme } from '../../styles/styles.helper'

export const HTMLTag = styled(ProjectTags)`
  ${withTheme('background-color', 'colors.lightBlue')};
  ${withTheme('color', 'colors.black')};
`;

export const CSSTag = styled(ProjectTags)`
  ${withTheme('background-color', 'colors.orange')};
  ${withTheme('color', 'colors.black')};
`;

export const JavaScriptTag = styled(ProjectTags)`
  ${withTheme('background-color', 'colors.yellow')};
  ${withTheme('color', 'colors.black')};
`;

export const ReactTag = styled(ProjectTags)`
  ${withTheme('background-color', 'colors.green')};
  ${withTheme('color', 'colors.black')};
`;

export const TestingTag = styled(ProjectTags)`
  ${withTheme('background-color', 'colors.red')};
  ${withTheme('color', 'colors.black')};
`;

export const StyledComponentsTag = styled(ProjectTags)`
  ${withTheme('background-color', 'colors.darkerOrange')};
  ${withTheme('color', 'colors.black')};
`;

export const AndroidStudioTag = styled(ReactTag)``;

export const KotlinTag = styled(HTMLTag)``;

export const ApiTag = styled(ProjectTags)`
  ${withTheme('background-color', 'colors.purple')};
  ${withTheme('color', 'colors.black')};
`;

export const MongoDBTag = styled(ProjectTags)`
  ${withTheme('background-color', 'colors.darkerGreen')};
  ${withTheme('color', 'colors.black')};
`;

export const JetPackComposeTag = styled(CSSTag)``;

export const MediaPlayerTag = styled(TestingTag)``;


export const DefaultTag = styled(ProjectTags)`
  ${withTheme('color', 'colors.white')};
  ${withTheme('color', 'colors.black')};
`;

