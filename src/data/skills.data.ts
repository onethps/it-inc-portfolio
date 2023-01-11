import CoddingIcon from 'assets/SkillsIcons/coding.png';
import FoundationIcon from 'assets/SkillsIcons/foundation.png';
import TestingIcon from 'assets/SkillsIcons/test.png';
import DesignIcon from 'assets/SkillsIcons/web-design.png';
import { SkillsDataType } from './types';

export const skillsData: SkillsDataType[] = [
  {
    id: 1,
    Title: 'DEVELOPMENT',
    Skills: 'React, Redux, Firebase, NodeJS(base),  Axios etc',
    cardColor: 'red',
    icon: CoddingIcon,
  },
  {
    id: 2,
    Title: 'FOUNDATION',
    Skills: 'JavaScript, TypeScript, HTML5, CSS3, SCSS, LESS',
    cardColor: 'yellow',
    icon: FoundationIcon,
  },
  {
    id: 3,
    Title: 'TESTING',
    Skills: 'Unit Tests, SnapShot, Storybook',
    cardColor: 'blue',
    icon: TestingIcon,
  },
  // {
  //   id: 4,
  //   Title: 'DESIGN',
  //   Skills: 'Material UI, Ant-Design, Styled-Components, etc',
  //   cardColor: 'red',
  //   icon: DesignIcon,
  // },
];
