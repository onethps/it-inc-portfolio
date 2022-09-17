import scr1 from '../../assets/PortfolioScreens/1.svg';

export type PortfolioData = {
  id: number;
  screen: string;
  title: string;
  description: string;
};

export const portfolioData: PortfolioData[] = [
  {
    id: 1,
    screen: scr1,
    title: 'Todolist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
  {
    id: 2,
    screen: scr1,
    title: 'Todolist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
  {
    id: 3,
    screen: scr1,
    title: 'Todolist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
  {
    id: 4,
    screen: scr1,
    title: 'Todolist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
];
