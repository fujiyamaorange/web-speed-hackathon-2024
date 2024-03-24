import ArrowBack from '@mui/icons-material/ArrowBack';
import Close from '@mui/icons-material/Close';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Menu from '@mui/icons-material/Menu';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Search from '@mui/icons-material/Search';

type Props = {
  color: string;
  height: number;
  type: 'ArrowBack' | 'Search' | 'Favorite' | 'FavoriteBorder' | 'Menu' | 'Close' | 'NavigateNext';
  width: number;
};

const getIcon = (type: Props['type']) => {
  switch (type) {
    case 'ArrowBack':
      return ArrowBack;
    case 'Search':
      return Search;
    case 'Favorite':
      return Favorite;
    case 'FavoriteBorder':
      return FavoriteBorder;
    case 'Menu':
      return Menu;
    case 'Close':
      return Close;
    case 'NavigateNext':
      return NavigateNext;
  }
};

export const SvgIcon: React.FC<Props> = ({ color, height, type, width }) => {
  // eslint-disable-next-line
  const Icon = getIcon(type);
  return <Icon style={{ color, height, width }} />;
};
