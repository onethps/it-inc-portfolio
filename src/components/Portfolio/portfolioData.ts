import scr1 from '../../assets/PortfolioScreens/simple-video-service.png';
import scr2 from '../../assets/PortfolioScreens/react-native-chat.png';
import scr3 from '../../assets/PortfolioScreens/learn-cards.png';
import scr4 from '../../assets/PortfolioScreens/social-network.png';

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
    title: 'Simple Video Hosting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
  {
    id: 2,
    screen: scr2,
    title: 'React Native Chat + Firebase',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
  {
    id: 3,
    screen: scr3,
    title: 'Learn Cards',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
  {
    id: 4,
    screen: scr4,
    title: 'Social Network',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
];
