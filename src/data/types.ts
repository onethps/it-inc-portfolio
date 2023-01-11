export type PortfolioData = {
  id: number;
  thumb: string;
  title: string;
  demoLink: string;
  codeLink: string;
  screens: string[];
};

export type SkillsDataType = {
  id: number;
  Title: string;
  Skills: string;
  cardColor: 'red' | 'blue' | 'yellow';
  icon: string;
};
